<?php
/* ---------------------------------------------------------------
   Contact form endpoint for ec.immofuchs.info, hosted on IONOS.
   Upload to your IONOS webspace, e.g. /api/contact.php.
   PHP 7.4+ (IONOS default is fine).
---------------------------------------------------------------- */

// ---- Settings -------------------------------------------------
$TO      = 'engincelenk@web.de';          // where messages go
$FROM    = 'kontakt@immofuchs.info';      // an existing IONOS mailbox on your domain
$ORIGINS = ['https://ec.immofuchs.info']; // sites allowed to use this form
$LIMIT   = 5;                             // max messages per IP per hour
$CONFIRM = ['freelance'];                 // form sources whose sender gets a confirmation email
// ---------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ORIGINS, true)) {
  header('Access-Control-Allow-Origin: ' . $origin);
  header('Vary: Origin');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Accept');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { echo json_encode(['success' => 'false', 'message' => 'Contact endpoint is running. POST only.']); exit; }
if ($origin && !in_array($origin, $ORIGINS, true)) { http_response_code(403); echo json_encode(['success' => 'false', 'message' => 'Origin not allowed']); exit; }

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) $in = $_POST;
$clean = function ($v, $max) { $v = trim((string)($v ?? '')); $v = str_replace(["\r", "\0"], '', $v); return mb_substr($v, 0, $max); };
$name    = $clean($in['name'] ?? '', 120);
$email   = $clean($in['email'] ?? '', 200);
$company = $clean($in['company'] ?? '', 160);
$message = $clean($in['message'] ?? '', 5000);
$source  = $clean($in['source'] ?? 'portfolio', 40);
$subject = $clean($in['_subject'] ?? 'Neue Nachricht über ec.immofuchs.info', 160);
$lang    = ($in['lang'] ?? 'de') === 'en' ? 'en' : 'de';

// Honeypot: bots fill hidden fields. Pretend success.
if (!empty($in['_honey'])) { echo json_encode(['success' => 'true']); exit; }

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422); echo json_encode(['success' => 'false', 'message' => 'Missing or invalid fields']); exit;
}
$name = str_replace("\n", ' ', $name); $subject = str_replace("\n", ' ', $subject);

// Simple rate limit per IP (stored in the system temp folder, no personal data kept longer than an hour).
$key  = sys_get_temp_dir() . '/ecform_' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . date('YmdH'));
$hits = (int)@file_get_contents($key);
if ($hits >= $LIMIT) { http_response_code(429); echo json_encode(['success' => 'false', 'message' => 'Too many requests']); exit; }
@file_put_contents($key, (string)($hits + 1));

$body = "Name: $name\nE-Mail: $email\n" . ($company !== '' ? "Unternehmen: $company\n" : '') . "Quelle: $source\n\n$message\n";
$headers = [
  'From: ec.immofuchs.info <' . $FROM . '>',
  'Reply-To: ' . $email,
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit'
];
$ok = mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . $FROM);

/* Confirmation to the sender. Fixed text only, no submitted content is echoed back,
   so the form cannot be abused to send arbitrary text to third parties. Only for
   requests coming from the site itself (Origin header present and allowed). */
if ($ok && in_array($source, $CONFIRM, true) && in_array($origin, $ORIGINS, true)) {
  $c = $lang === 'en'
    ? ['Your request via ec.immofuchs.info',
       "Hello,\n\nthank you for your request. Your message has reached me and I will get back to you shortly.\n\nKind regards\nEngin Celenk\nhttps://ec.immofuchs.info/freelance.html\n\nThis is an automatic confirmation. If you did not send a request, please ignore this email."]
    : ['Ihre Anfrage über ec.immofuchs.info',
       "Guten Tag,\n\nvielen Dank für Ihre Anfrage. Ihre Nachricht ist bei mir angekommen, ich melde mich zeitnah bei Ihnen.\n\nViele Grüße\nEngin Celenk\nhttps://ec.immofuchs.info/freelance.html\n\nDies ist eine automatische Bestätigung. Falls Sie keine Anfrage gesendet haben, ignorieren Sie diese E-Mail bitte."];
  $cHeaders = [
    'From: Engin Celenk <' . $FROM . '>',
    'Auto-Submitted: auto-replied',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit'
  ];
  @mail($email, '=?UTF-8?B?' . base64_encode($c[0]) . '?=', $c[1], implode("\r\n", $cHeaders), '-f' . $FROM);
}

if ($ok) { echo json_encode(['success' => 'true']); }
else { http_response_code(500); echo json_encode(['success' => 'false', 'message' => 'Mail could not be sent']); }
