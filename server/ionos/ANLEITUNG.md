# Kontaktformular über IONOS

Die Seite (GitHub Pages, `ec.immofuchs.info`) kann kein PHP ausführen. Das Formular schickt deshalb an `https://kontakt.immofuchs.info/api/contact.php` (siehe `src/data/profile.js`, `contactForm.endpoints`).

Einrichtung bei IONOS:
1. Subdomain `kontakt.immofuchs.info` anlegen, Ziel-Ordner `/ec` (nicht `/immofuchs`: der ImmoFuchs-Deploy löscht dort Dateien).
2. `contact.php` nach `/ec/api/contact.php` hochladen.

## 1. Hochladen
`contact.php` aus diesem Ordner nach `/ec/api/contact.php` hochladen (per FTP oder Webspace-Explorer) und die alte Datei ersetzen.

## 2. Prüfen
`https://kontakt.immofuchs.info/api/contact.php` im Browser öffnen. Richtig ist eine Zeile wie:
`{"success":"false","message":"Contact endpoint is running. POST only.","php":"8.x","mail":true,"from":"kontakt@immofuchs.info","to":"**gincelenk@web.de"}`

## 3. Absender
`$FROM` muss eine Adresse auf deiner Domain sein (IONOS verschickt nur von eigenen Domains zuverlässig). Existiert `kontakt@immofuchs.info` nicht,
im IONOS Control Center unter E-Mail eine Adresse anlegen (eine Weiterleitung auf engincelenk@web.de genügt) oder `$FROM` anpassen.
`$FROM2` (web.de) ist nur der Ersatz, falls der erste Absender abgelehnt wird.

## 4. Fehlersuche
Schlägt das Senden fehl, zeigt das Formular unter der Fehlermeldung einen „Technischen Hinweis“ (z. B. `HTTP 404`, `HTTP 500 · Mail could not be sent`).
Diesen Text an Claude schicken.
