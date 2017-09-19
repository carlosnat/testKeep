import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/servicio/userService';

@Component({
    selector:'user-edit',
    templateUrl:'userEdit.html'
})

export class UserEditPage implements OnInit{



    constructor(private userService:UserService){}

    ngOnInit() {
    }

    user:any = {};

    saveChanges(){
        console.log('userData', this.user);
        // if (validate)
            this.userService.updateData(this.user);
    }

    /*Validate() se encargara de realizar las respectivas validaciones */
}