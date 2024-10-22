

# AngularMitPWA – Hello World

Diese Anleitung beschreibt, wie ein Angular-Projekt mit Unterstützung für Progressive Web Apps (PWA) erstellt wird.

![Browser1 Image](./_img/browser1.png)

----

## Projekt Erstellen

Folgende Schritte beschreiben das Erstellen eines neuen Angular-Projekts und das Hinzufügen von PWA-Funktionalitäten.

### Angular CLI Installieren

Die Installation der Angular CLI erfolgt global im System. Dieses Werkzeug unterstützt beim Erstellen und Verwalten von Angular-Projekten.

```` terminal
npm install -g @angular/cli
````

### Ein neues Angular-Projekt erstellen

Ein neues Angular-Projekt wird mit der Angular CLI erstellt.

```` terminal
ng new AngularMitPWA
````

In das Projektverzeichnis wechseln:

```` terminal
cd AngularMitPWA
````


### PWA-Unterstützung hinzufügen

Mit dem folgenden Befehl wird die PWA-Unterstützung hinzugefügt:

```` terminal
ng add @angular/pwa
````

Dieser Befehl fügt alle notwendigen Dateien und Konfigurationen für PWA hinzu:
- **ngsw-config.json**: Konfiguration für den Service Worker.
- **manifest.webmanifest**: Ermöglicht das Hinzufügen der App zum Startbildschirm.


### Visual Studio Code öffnen

Das Projekt wird in Visual Studio Code zur Bearbeitung geöffnet.

```` terminal
code .
````

----


## Projekt Bearbeiten

Folgende Schritte beschreiben das Bearbeiten eines bereits erstellten Angular-Projekts.

### Bearbeite die App-Komponente

Den Inhalt der ```` app.component.html ```` ändern, um eine einfache Hello World-Nachricht anzuzeigen.

Öffne ```` src/app/app.component.html ```` und ersetze den gesammten Inhalt durch diesen Code:

```` html
<h1>Hello World PWA!</h1>
<p>Willkommen zu deiner ersten Angular PWA.</p>
````

----

## npm start | Ausführen der Anwendung

So wird nun der Angular-Entwicklungsserver (`ng serve`) verwendet, um die Anwendung zu starten.

```` terminal
npm start
````

oder

```` terminal
ng serve --open
````

http://localhost:4200/

![Server](./_img/server1.png)


So kann das gesamte Projekt mit nur einem Befehl (`npm start`) gebaut und auf einem Server bereitgestellt werden!

![Server](./_img/browser1.png)

----

### Die App für die Produktion bauen

Das Projekt wird für die Produktion gebaut, um den Service Worker zu aktivieren:

```` terminal
ng build --configuration production
````
So wird der ```` dist ```` Ordner erstellt, die den Service Worker aktiviert.

```` terminal
/dist/angular-mit-pwa/browser/
````

Hier befinden sich die neu erstellte Dateien. 

----


####  Warum erforderlich?

Die Schritte für den Produktionsbuild sind notwendig, weil Angular standardmäßig in der Entwicklungsumgebung läuft, wenn man `ng serve` ausführt. In dieser Umgebung werden zusätzliche Überprüfungen und Debug-Informationen eingebaut, um die Entwicklung zu erleichtern. Diese Schritte optimieren den Code und bereiten ihn für eine produktive Umgebung vor:

 1. Produktionserstellung (ng build --configuration production):

 - **Optimierung des Codes:** Der Build-Befehl erstellt eine optimierte Version des Projekts. Dazu gehören Minifizierung von JavaScript, Entfernen von nicht benötigtem Code und Reduzierung der Dateigrößen.
 - **Ausschalten von Debug-Informationen:** Der Produktionsbuild entfernt Debug-Informationen, um die Ausführungsgeschwindigkeit und die Sicherheit zu verbessern.
 - **Performance-Verbesserungen:** Ein Produktionsbuild aktiviert zusätzliche Performance-Optimierungen, wie das AOT-Compiling (Ahead-of-Time), Tree Shaking und Code Splitting.

 2. Neuer Build bei Änderungen:

 - Wenn Fehler auftreten oder Änderungen am Skript (Code) vorgenommen werden, muss der Produktionsbuild erneut ausgeführt werden, um die Änderungen in die finalen Dateien zu integrieren. Andernfalls würde die alte Version aus dem letzten Build verwendet werden.

 3. Dist-Ordner:

 - Der `ng build`-Befehl erstellt einen `dist`-Ordner (Distributions-Ordner), der alle optimierten Dateien enthält. Dieser Ordner kann dann auf einen Webserver hochgeladen werden, um die Anwendung in einer produktiven Umgebung bereitzustellen.
 
 4. Deaktivierung von Angular Analytics (`ng analytics disable`):

 - Bei der Erstellung des Builds könnten Warnungen bezüglich der Analysefunktionen von Angular auftreten. Mit dem Befehl `ng analytics disable` wird die Datenerfassung von Angular deaktiviert, was speziell für produktive Umgebungen empfohlen wird.

Zusammengefasst sind diese Schritte entscheidend, um eine leistungsstarke, sichere und optimierte Version der Anwendung für die produktive Bereitstellung zu erstellen.

----

## Teste die PWA lokal

Um die PWA offline zu testen, musst du einen lokalen HTTP-Server verwenden. Installiere zuerst http-server:

```` terminal
npm install -g http-server
````

Starte dann den Server im Projekt-Order mit der diesem Order-Angabe: ```` dist/angular-mit-pwa/browser ````

C:\..\AngularMitPWA> **http-server** dist/angular-mit-pwa/browser -p 8080

```` terminal
http-server dist/angular-mit-pwa/browser -p 8080
````

Öffne einen Browser und navigiere zu:

http://localhost:8080/
http://127.0.0.1:8080/

![Browser1 Image](./_img/browser1.png)

---


####  Warum erforderlich?

Diese Schritte sind erforderlich, um die Anwendung in einer produktionsnahen Umgebung zu testen und sicherzustellen, dass die Anwendung wie erwartet funktioniert, bevor sie auf einen tatsächlichen Server bereitgestellt wird. Hier ist die Begründung für jeden Schritt:

 1. Installation von http-server:

 - `http-server` ist ein einfacher, leichtgewichtiger HTTP-Server, der Node.js verwendet. Er wird global installiert, um ihn von überall aus in deinem System ausführen zu können. Diese Installation ermöglicht es dir, einen einfachen lokalen Webserver zu starten, ohne komplexere Server wie Apache oder Nginx einrichten zu müssen.
  
  2 . Starten des Servers:

  - Der Befehl `http-server dist/angular-mit-bootstrap/browser -p 8080` startet den Server im `dist`-Verzeichnis, das durch den Produktions-Build (`ng build`) erzeugt wurde. Der Server hostet die Anwendung auf Port 8080. Das ist wichtig, da Angular-Builds statische Dateien erzeugen, die in einem produktiven Kontext nur über einen Webserver aufgerufen werden können (und nicht einfach durch Öffnen der HTML-Datei im Browser).
 
 3. Zugriff auf den Server:

 - Durch die Adressen `http://localhost:8080/` oder `http://127.0.0.1:8080/` wird der lokal laufende Server im Browser geöffnet, um die Anwendung zu testen. Dadurch kannst du überprüfen, ob die Anwendung ordnungsgemäß geladen wird, Bootstrap korrekt eingebunden ist und die grundlegende Funktionalität funktioniert, wie z. B. das Klicken auf den Button.
  
**Warum dieser Test wichtig ist:**

- **Testen in einer produktionsähnlichen Umgebung:** Wenn du die App einfach nur über `ng serve` im Entwicklungsmodus testest, hast du nicht die gleichen Optimierungen wie im Produktionsmodus. Der `http-server` simuliert das Hosten der optimierten, produktionsfertigen Version, die sich ähnlich verhält wie auf einem echten Webserver.
- **Fehler und Inkompatibilitäten entdecken:** Es gibt manchmal Unterschiede in der Art und Weise, wie der Code im Entwicklungs- und Produktionsmodus ausgeführt wird. Durch die lokale Verwendung eines Servers kannst du sicherstellen, dass alles funktioniert, bevor die App auf einen echten Webserver hochgeladen wird.

Zusammengefasst helfen diese Schritte sicherzustellen, dass die Anwendung auch in einer produktionsnahen Umgebung fehlerfrei funktioniert und die erwarteten Ergebnisse liefert.


---

## Markdown-Datei (.md)

