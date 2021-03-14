import { Inject,Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class SpinnerService{
    constructor(@Inject(DOCUMENT) private document: Document){}

    selector: string = 'nb-global-spinner';
    
    showSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
            el.style['background'] = 'white';
            el.style['opacity'] = '0.5';
        }
    };
    hideSpinner = function () {
        // TODO use something else other than timeout
        setTimeout(() => {
            var el = this.getSpinnerElement();
            if (el) {
                el.style['display'] = 'none';
            }
        }, 1000);
    };
    getSpinnerElement = function () {
        return this.document.getElementById(this.selector);
    };
}