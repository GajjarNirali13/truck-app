import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable'

 
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { LoginService } from './login.service';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [ LoginService ]
})


export class LoginPage implements OnInit {
    private data: Observable<string>;
    private fruits: Array<string> = [];
    private anyErrors: boolean;
    private finished: boolean;


    loginForm: FormGroup;
    
    constructor(
        public navCtrl: NavController, 
        private fb: FormBuilder,
        public loginService: LoginService
    ){
        this.createForm();
    }
    
    ngOnInit() {}    

    createForm() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ]
        });

        this.loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if(!this.loginForm) { return; }
    }   


    onSubmit() {     
        if (!this.loginForm) {
            return;
        } else {
            var sendObj = {
                "userName": this.loginForm.controls.username.value,
                "passWord": this.loginForm.controls.password.value
            }
            this.loginService.authenticateUser(sendObj).subscribe((response) => {
                localStorage.setItem("userData", JSON.stringify(response));
                this.navCtrl.setRoot(HomePage);
            }, (err) => {
                console.log(err);
            });
        }
    }

    registerUser() {
        this.navCtrl.setRoot(RegisterPage);
    }
}
