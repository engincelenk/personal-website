# Kontaktformular über IONOS

Die Seite ruft `https://immofuchs.info/ec/api/contact.php` auf (siehe `src/data/profile.js`, `contactForm.endpoint`).
Die Datei `contact.php` muss genau dort liegen: Ordner `ec` → Ordner `api` → `contact.php`.
Liegt sie woanders (z. B. `/api/contact.php`), den Endpunkt in `profile.js` anpassen.

## 1. Hochladen
IONOS Control Center → Hosting → Webspace → `contact.php` aus diesem Ordner an den Zielort hochladen und die alte Datei ersetzen.

## 2. Prüfen
Adresse im Browser öffnen. Richtig ist eine Zeile wie:
`{"success":"false","message":"Contact endpoint is running. POST only.","php":"8.x","mail":true,"from":"kontakt@immofuchs.info","to":"**gincelenk@web.de"}`

## 3. Absender
`$FROM` muss eine Adresse auf deiner Domain sein (IONOS verschickt nur von eigenen Domains zuverlässig). Existiert `kontakt@immofuchs.info` nicht,
im IONOS Control Center unter E-Mail eine Adresse anlegen (eine Weiterleitung auf engincelenk@web.de genügt) oder `$FROM` anpassen.
`$FROM2` (web.de) ist nur der Ersatz, falls der erste Absender abgelehnt wird.

## 4. Fehlersuche
Schlägt das Senden fehl, zeigt das Formular unter der Fehlermeldung einen „Technischen Hinweis“ (z. B. `HTTP 404`, `HTTP 500 · Mail could not be sent`).
Diesen Text an Claude schicken.
