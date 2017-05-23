import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
    templateUrl: './login-page.html',
    styleUrls: ['./style.css']

})

export class LoginComponent  {

    loginForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({

                'userName': [null, Validators.required],
                'passWord': [null, Validators.required]

            }
        )
    }


    submitForm(value:any){
        console.log(value)
    }
}