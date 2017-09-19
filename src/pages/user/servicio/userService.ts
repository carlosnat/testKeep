import { Injectable } from '@angular/core';

@Injectable()

export class UserService{

    dataUser:any = {}

    updateData(data){
        this.dataUser = data;
    }

    getData(){
        return this.dataUser;
    }


}