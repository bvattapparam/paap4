import { NgModule, Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-baiscmodal',
  templateUrl: './baiscmodal.component.html',
  styleUrls: ['./baiscmodal.component.css']
})
export class BaiscmodalComponent implements OnInit {

  public title: string;
  public list: any[] = [];
  constructor(public activeModal: NgbActiveModal) {}



  ngOnInit() {
  }

}



