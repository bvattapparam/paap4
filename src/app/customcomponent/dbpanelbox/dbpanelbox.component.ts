import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from "../../translate";

@Component({
  selector: 'app-dbpanelbox',
  templateUrl: './dbpanelbox.component.html'
})
export class DbpanelboxComponent implements OnInit {

  @Input() panelTitle: string;
  @Input() panelAmount: string;
  @Input() panelIcon: string;
  @Input() panelLink: string;
  
  constructor(private __translateService:TranslateService) { 
    this.panelTitle = this.__translateService.instant(this.panelTitle);
    //console.log("Link",this.panelLink);
   
  }
  

  ngOnInit() {
    
  }

}
