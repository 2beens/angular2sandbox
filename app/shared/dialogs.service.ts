import { Injectable } from '@angular/core';
import 'node_modules/sweetalert/dist/sweetalert.min.js'

//declare var swal: any;

@Injectable()
export class DialogsService {

    constructor() { }

    showInfo(title: string, message: string) {
        swal(title, message, "info");
    }

    showError(message: string) {
        swal("Upss :(", message, "error");
    }
}