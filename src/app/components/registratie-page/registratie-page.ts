import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
    templateUrl: './registratie-page.html'
})

export class RegistratieComponent  {

    registrationForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.registrationForm = fb.group({

            //

            'firstName' :  [null, Validators.required],
            'surName'  : [null, Validators.required],
            'eMail'  : [null, Validators.compose([Validators.required,  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'userName' : [null, Validators.compose([])],
            'passWord' : [null, Validators.required],
            'repeatpassWord' : [null, Validators.required]

        })
    }
    submitForm(value:any){
        console.log(value)
    }
}
