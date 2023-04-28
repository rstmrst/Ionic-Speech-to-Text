<h1 align="center">Speect to Text and Text to Speech</h1>
<h3 align="center">Bu uygulama ile Sesi Metne dönüştürebilir ve Metni Seslendirebilirsiniz.</h3>

<h3 align="left">Yazılım dili ve Tool :</h3>
<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://cordova.apache.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" alt="apachecordova" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="40" height="40"/> </a> </p>

<h3 align="left">Özellikler :</h3>
Konuşmalarınızı yazıya dökebilirsiniz.
<br>
Yazdığınız metni sizin için okuyabilir.

<h3 align="left">Kurulum :</h3>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>
    $ npm install -g ionic
    $ npm install -g cordova
  </pre>
</div>

<h3 align="left">Projeyi Çalıştırmak İçin :</h3>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>
    $ cd Ionic-Speech-to-Text
    $ npm install --save
    $ ionic cordova platform add android
    $ ionic cordova build android
  </pre>
</div>

Android 11 sorun olması durumunda
platforms/android/app/src/AndroidManifest.xml e aşağıdaki kodu ekleyip test edebilirsiniz.

    <queries>
        <intent>
            <action android:name="android.speech.RecognitionService" />
        </intent>
    </queries>

<p dir="auto">
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/rstmrst/Ionic-Speech-to-Text/blob/main/Screenshot_1682661177.png?raw=true">
    <img src="https://github.com/rstmrst/Ionic-Speech-to-Text/blob/main/Screenshot_1682661177.png?raw=true" alt="Speech To Text" style="max-width: 100%; width: 512px;
    margin: 0 auto;
    position: relative;
    display: flex;">
  </a>
</p>
