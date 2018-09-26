import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


import { RegisterService } from './register.service';
import { LoginPage } from '../login/login';

@Component({
    selector: 'register',
    templateUrl: './register.html',
    providers: [ RegisterService ]
})
export class RegisterPage {
    registerForm: FormGroup;    

    constructor(
        private fb: FormBuilder,
        public registerService: RegisterService,
        public navCtrl: NavController
    ) {
        this.createForm();
    } 

    

    createForm() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ],
            name: ['', Validators.required ],
            email: ['', Validators.required ],
            phno: ['', Validators.required ],
            address: ['', Validators.required ]
        });

        this.registerForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if(!this.registerForm) { return; }
    }   

    onSubmit() {        
        if (!this.registerForm) {
            return;
        } else {
            var sendData = {
                "userName": this.registerForm.controls.username.value,
                "passWord": this.registerForm.controls.password.value,
                "name": this.registerForm.controls.name.value,
                "email": this.registerForm.controls.email.value,
                "phoneNumber": this.registerForm.controls.phno.value,
                "address": this.registerForm.controls.address.value
            };
            this.registerService.createUser(sendData).subscribe((response) => {
                this.navCtrl.setRoot(LoginPage);
            }, (err) => {
                console.log(err);
            });            
        }
    }
}