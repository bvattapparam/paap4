import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dbcard',
  templateUrl: './dbcard.component.html'
})
export class DbcardComponent implements OnInit {

  @Input() dbCardValue: Object; 
  @Input() dbCardTitle: string;
  @Input() dbCardIcon: string;
  private dbcardvalues = this.dbCardValue;
  

  constructor() { 
    
  }

  ngOnInit() {

    //console.log("DB CARD : ", this.dbcardvalues);
  }

}
