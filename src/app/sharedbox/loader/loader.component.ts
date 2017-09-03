import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { LoaderService } from "../loader/loader.service";
import { LoaderState } from "../loader/loaderstate";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
  
})
export class LoaderComponent implements OnInit {
  show = false;
  private _subscription: Subscription;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit() {
    console.log("STATE: before ", this.show);
    this._subscription = this._loaderService.loaderState.subscribe((state:LoaderState) => {
      this.show = state.show;
      console.log("STATE inside: ", this.show);
    });
   // console.log("Loading....",this.show);
  }
  ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}
