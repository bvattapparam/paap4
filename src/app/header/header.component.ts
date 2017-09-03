import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '../translate'; // LOCALIZATION DEPENDENCY
import { ReferenceserviceService } from '../sharedbox/referenceservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() name: string;

public firstname : string = "Bijeshkumar";
public lastname : string  = "Vattapparambath"; 
public fullname : string;

// FOR TRANSLATION MODULE
public translatedText: string;
public supportedLanguages: any[];
public supportedLangs: any[];
private _referenceData;

  
  constructor(private _translate: TranslateService, private _referenceService : ReferenceserviceService) { 
    this.fullname = this.firstname + " " + this.lastname;
    this.firstname = "Hai";
  }

  ngOnInit() {
    // REFERENCE DATA...
    this._referenceData = this._referenceService._referenceData;

    // STANDING DATA TO BIND THE LOCATIOZATION SELECTION BUTTON
    this.supportedLangs = [
      { display: 'Eng', value: 'en' },
      { display: 'Mal', value: 'ml' }
      ];
    // SET CURRENT DEFAULT LANGUAGE
    this.selectLang('en');
  }
  isCurrentLang(lang: string) {
    // CHECK IF THE SELECTED LANGUAGE IS CURRENT LANGUAGE
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // SET CURRENT LANGUAGE
    this._translate.use(lang);
  }
  

}
