import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
    templateUrl: './registratie-page.html'
})

export class RegistratieComponent  {

    registrationForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.registrationForm = fb.group({


            'firstName' :  [null, Validators.required],
            'surName'  : [null, Validators.required],
            'eMail'  : [null, Validators.required]
           /** 'userName' : "",//[null, Validators.required],
            'passWord' : "",//[null, Validators.required],
            'repeatpassWord' : ""//[null, Validators.required]
             */
        })
    }
    submitForm(value:any){
        console.log(value)
    }
}
