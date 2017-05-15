import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
    templateUrl: './registratie-page.html'
})

export class RegistratieComponent  {

    registrationForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.registrationForm = fb.group({


                'firstName': [null, Validators.required],
                'surName': [null, Validators.required],
                'eMail': [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
                'userName': [null, Validators.required],
                'passWord': [null, Validators.compose([Validators.required, Validators.minLength(7)])],
                'repeatPassWord': [null, Validators.required]

            }, {
                validator: this.matchinPasswords('passWord', 'repeatPassWord')}
        )
    }


    submitForm(value:any){
        console.log(value)
    }

    matchinPasswords(passwordKey: string, repeatpasswordKey: string) {
        return(group: FormGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConformationInput = group.controls[repeatpasswordKey];
            if( passwordInput.value !== passwordConformationInput.value){
                return passwordConformationInput.setErrors({notEquivalent: true})
            }
        }
    }
}
