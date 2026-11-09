# Kontaktformular über IONOS einrichten

Dauer: etwa 10 Minuten. Danach laufen alle Nachrichten über dein IONOS-Hosting statt über einen Fremddienst.

## 1. Absender-Postfach prüfen
Im IONOS Control Center unter **E-Mail** prüfen, ob es eine Adresse auf deiner Domain gibt, z. B. `kontakt@immofuchs.info`.
Falls nicht: anlegen (ein einfaches Postfach oder eine Weiterleitung auf engincelenk@web.de genügt).
Steht dort eine andere Adresse, in `contact.php` oben bei `$FROM` eintragen.

## 2. Datei hochladen
1. `contact.php` aus diesem Ordner herunterladen.
2. IONOS Control Center → **Hosting** → das Paket von immofuchs.info → **Webspace** (Webspace-Explorer) öffnen.
3. Im Ordner der Domain `immofuchs.info` einen Ordner `api` anlegen und `contact.php` hineinladen.

## 3. Testen
Im Browser öffnen: `https://immofuchs.info/api/contact.php`
Erwartet: `{"success":"false","message":"Contact endpoint is running. POST only."}`

## 4. Bescheid geben
Die Adresse aus Schritt 3 an Claude schicken. Dann wird das Formular auf der Seite umgestellt,
die Datenschutzerklärung angepasst (IONOS statt FormSubmit) und live geschaltet.
