import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public location:Location) {
   }

   getClass(path){
      return (this.location.path().substr(0,path.length) === path) ? 'active-menu': '';
   }

  ngOnInit() {
  }

}
