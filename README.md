# WorkAdventure LMG Map Repo

[WorkAdventure Karten README]('./WORKADVENTURE.md')

Dieses Repository beinhält alle Dateien, die von WorkAdventure benötigt werden um unsere Karten anzuzeigen.

## Namenskonventionen
Für unsere Karten nutzen wir folgende Namenskonventionen:
```
bereich_geschoss_raumid.(dateiendung)
```
#### bereich
Bereich der Schule, in der sich die Map befindet
```
sek1 //Sekundarstufe 1 (Räume mit 2** und 3**)
sek2 //Sekundarstufe 2 (Räume mit 1**)
```

#### geschoss
Geschoss der Schule, wo die Map ist
```
ug //Untergeschoss (Keller)
eg //Erdgeschoss
og //Obergeschoss
og2 //Obergeschoss 2 (Musikräume)
```

#### raumid
Identifikationsnummer des Raumes, zum Beispiel
```
if1 //Informatikraum 1
phy2 //Physikraum 2
103 //Raum 103
```

#### Beispiel
```
sek1_og_if2.tmj
```
für IF2 im Obergeschoss von Sek1

## Karten
Karten sind unter /maps als .tmj-Datei gespeichert, was beim Exportieren/Speichern aus Tiled zu beachten ist. <br>

Unter /src/config befindet sich die config-Datei für die Map, mit demselben Namen wie die Map. Diese beinhalten die Ein- und Ausgänge einer Map, sowie weitere interaktive Elemente. Die config-Datei ist im json-Format und der jeweilige Schlüssel ist der Name der Zone die betreten wird (in Tiled festgelegt) und der Wert davon die Karte, die betreten werden soll (mit Dateiendung). Mit einem `#` hinter der Map-Datei kann man eine bestimmte Zone auswählen, wo der Spieler ankommen soll. <br>

Für jede Map gibt es ein eigenes Skript unter /src/rooms als ts-Datei. Der Name sollte dem der Map gleichen und als Map-Skript in Tiled festgelegt werden.

