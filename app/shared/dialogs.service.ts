import { Injectable } from '@angular/core';
import 'node_modules/sweetalert/dist/sweetalert.min.js';

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

    showClearTodoDialog(callback) {
        swal({
            title: "Are you sure?",   
            text: "You will be able to return this Todo into 'standby' state!",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, clear it!",   
            cancelButtonText: "No, cancel plx!",   
            closeOnConfirm: false,   
            closeOnCancel: false 
        }, function(isConfirm) {
            callback(isConfirm);
            
            if (isConfirm) {
                swal("Finished!", "Your todo has been marked as finished.", "success");   
            } else {     
                swal("Cancelled", "Your todo is left unfinished.", "error");   
            }
        });
    }
}