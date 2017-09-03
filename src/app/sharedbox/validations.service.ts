import { Injectable } from '@angular/core';
import { Validators ,FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class ValidationsService {

  constructor() { }

  uiConfigObj(ref: any, args:any){
    let currentObject = ref;
    for(let i = 0; i < args.length; i++){
      if(currentObject){
        currentObject = currentObject[args[i]];
      }
    }
    var finalObject = {};
    if(currentObject){
      currentObject.forEach((item) => {
        finalObject[item.key] = {};
        item.validations.forEach((subItem)=>{
          finalObject[item.key][subItem.type] = subItem.value;
        })
      });
    }
    return finalObject;
  }

  // FORM BUILDER...
  buildForm(schema:any, customValidations?:any){
    let schemaFormGroup;
    if(customValidations){
      schemaFormGroup = new FormGroup({},customValidations);
    }else{
      schemaFormGroup = new FormGroup({});
    }

    if(schema){
      let validationsArr = [];
      schema.forEach((controls)=>{
        let control : FormControl;
        let validations = controls.validations;
        if(validations && validations.length > 0){
          validations.forEach((validation)=>{
            switch(validation.type){
              case "required":
              validationsArr.push(Validators.required);
              break;

              case "maxlength":
              validationsArr.push(Validators.maxLength(validation.value));
              break;
              case "minlength":
              validationsArr.push(Validators.minLength(validation.value));
              break;

            }
          });
          console.log(validationsArr,"test");
          control = new FormControl('', Validators.compose(validationsArr));
        }else{
          control = new FormControl('');
        }
        schemaFormGroup.addControl(controls.key,control)
      });
    }
    return schemaFormGroup
  } // buildForm completed here...

}
