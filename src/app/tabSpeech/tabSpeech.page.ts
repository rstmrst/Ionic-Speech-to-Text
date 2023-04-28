import { Component, NgZone } from '@angular/core';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabSpeech',
  templateUrl: 'tabSpeech.page.html',
  styleUrls: ['tabSpeech.page.scss'],
})
export class tabSpeechPage {
  okunanMetin: string = '';
  okunacakMetin: string = 'Okunacak Metni Buraya Yazabilirsiniz.';
  konusDurum: Boolean = false;

  constructor(
    public sr: SpeechRecognition,
    public tts: TextToSpeechAdvanced,
    public platform: Platform,
    public zone: NgZone
  ) {
    // if (this.platform.is('android') || this.platform.is('ios'))
    //   this.speechToTextYetkiIslemleri();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      if (this.platform.is('android') || this.platform.is('ios'))
        this.speechToTextYetkiIslemleri();
    }, 500);
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} karakter kaldı...`;
  }

  async speechToTextYetkiIslemleri() {
    if (!(await this.sr.hasPermission())) {
      this.sr.requestPermission().then(this.speechToTextBaslat, () => {
        alert('Bu Özellik Kullanılamıyor...');
      });
    } else {
      this.speechToTextBaslat();
    }
  }

  speechToTextBaslat() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.konusDurum = true;
      this.sr
        .startListening({
          //language: 'en-EN',
          language: 'tr-TR',
          matches: 1,
          showPopup: false,
        })
        .subscribe(
          (_matches) => {
            if (_matches && _matches.length > 0) {
              let _okunanMetin = _matches[0];
              this.metniOku(_okunanMetin);
            }
          },
          (_e) => {
            //console.error(_e);

            this.zone.run(() => {
              this.konusDurum = false;
            });

            alert('Konuşmanız Anlaşılamadı!!! Lütfen Terkar Deneyiniz...');
          }
        );
    }
  }

  speechToTextDurdur() {
    this.sr.stopListening();
  }

  metinOkumayiBaslat() {
    this.metniOku(this.okunacakMetin);
  }

  metniOku(_text: string) {
    this.zone.run(() => {
      this.konusDurum = false;
      this.okunanMetin = _text;
    });

    /*
    setTimeout(() => {
      this.konusDurum = false;
      this.okunanMetin = _text;
    }, 100);
*/
    this.tts
      .speak({
        text: _text,
        identifier: 'com.apple.ttsbundle.Samantha-compact',
        rate: 1.0,
        //rate: 0.75,
        //pitch: 0.9,
        //rate: 0.75,
        //pitch: 1,
        cancel: true,
        locale: 'tr-TR',
      })
      .then(
        function () {
          alert('success');
        },
        function (reason) {
          alert(reason);
        }
      );
  }
}
