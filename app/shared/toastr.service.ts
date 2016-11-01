import { Injectable } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastrService {
    
    constructor(public toastr: ToastsManager) { }

    showSuccess(message: string) {
        this.toastr.success(message, 'Success!');
    }

    showError(message: string) {
        this.toastr.error(message, 'Oops!');
    }

    showWarning(message: string) {
        this.toastr.warning(message, 'Alert!');
    }

    showInfo(message: string) {
        this.toastr.info(message);
    }
    
    showCustom(message: string) {
        this.toastr.custom('<span style="color: red">' + message + '</span>', null, { enableHTML: true });
    }
}