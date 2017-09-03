import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestserviceService {
  public _age;

  constructor(private http : Http) { }

    load(): Promise<any> {
    console.log("INSIDE THE LOAD...");
     return this.http
            .get('http://localhost/paap/aswa-services/references/get/')
            .map((res: Response) => res.json())
            .toPromise()
            .then((data: any) => this._age = data)
            .catch((err: any) => Promise.resolve());
            
    
  }
 
  
testSCALL(){
}
  
         

  }


