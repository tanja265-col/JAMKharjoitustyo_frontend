# Asiakasrekisteri

Projekti on luotu [Angular CLI]:llä (https://github.com/angular/angular-cli)
version 13.0.2.

# Yleiskastsaus

Sovellus on tarkoitettu yksityisyrittäjän asiakastietojen ylläpitoon. Asiakasrekisteri sisältää listan asiakkaista. Asiakastiedoistoista löytyvät kentät nimelle, sähköpostiosoitteelle, osoitteelle, infolle asiakassuhteesta sekä tiedolle onko asiakassuhde tällä hetkellä aktiviinen. Asiakkaan tietoja voi muokata ja rekisteriin voi lisätä uuden asiakkaan ja vanhan asiakkaan voi poistaa.

# Käytetyt teknologiat

Frontend on toteutettu Angularilla ja Backenend Nodejs:llä, Expressillä sekä tietokanta MySQL:llä. Kehitysversio on saatavilla Githubissa: git clone https://github.com/tanja265-col/JAMKharjoitustyo_frontend.git

# Reflektio ja ajankäyttö

Tämä pienyrittäjälle suunnatun Asiakasrekisteri-sovelluksen perustoiminnot ja idea rakentuivat eri vaiheiden kautta. Aluksi ajatuksena oli tehdä sovelluksesta melko monimutkaisempi versio - niin toiminnoiltaan kuin rakenteeltaankin. Ajankäytön rajallisuuden vuoksi sovelluksesta muodostui yksikertainen, mutta ehkä selkeä malli. Matkanvarrella aikaavievää näin aloittelijalle olivat erilaiset virheilmoitukset ja niiden merkitysten selvittäminen sekä myös eri ohjelmien tiheät päivitykset. Itse pidin frontendin ulkoasun suunnittelusta ja olisinkin toivonut että erityisesti sen puolen työstämiseen olisi ennättänyt keskittyä enemmän. Kokonaisuutena käytin tehtävään aika paljon aikaa (ehkä noin kaksikertaisen määrän normaalia enemmän), sillä jumikohtien pohdinta oli välillä hidasta, mutta toki opettavaistsa. Tein harjoitustehtävä joitain osuuksia uudelleen ja katsoin myös kurssin videoita uudelleen löytääkseni ratkaisuja ongelmakohtiin. Käytin tehtävässä osin tutoriaaleja (https://www.bezkoder.com/angular-11-crud-app/, https://www.bezkoder.com/node-js-rest-api-express-mysql/). Lisäksi käytin kurssimateriaaleja ja esim. Bootstrapin ja Angularin sivustoja. Kehittämiskohteikseni näkisin idoiden soveltamisen käytäntöön ja erityisesti rutiinin sekä lisäkokemuksen hankkimisen.

## Kehitysajan serveri

Aja `ng serve` . Navkoi: `http://localhost:4200/`. Sovellus latautuu automaattisesti.

## Koodi

Aja `ng generate component component-name` uuden komponentin luomiseksi. Voi käyttää myös: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Aja komento `ng build` buildataksesi projektin. Buildattu versio syntyy kansioon`dist/`.

## Lisätietoa

Saadaksesi lisätietoa Angularista aja komento `ng help` tai käy nettisivulla[Angular CLI Overview and Command Reference](https://angular.io/cli).
