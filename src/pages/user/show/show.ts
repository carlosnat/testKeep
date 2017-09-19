import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/servicio/userService';


@Component({
    selector:'user-show',
    templateUrl:'show.html'
})

export class UserShowPage implements OnInit{

    constructor(private userService:UserService){}

    user:any = {};

    ngOnInit(){
        this.user = this.userService.getData();
        console.log('data capturada', this.user);
    }

}