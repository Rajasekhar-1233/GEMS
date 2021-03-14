import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboards.modal.html',
    styleUrls: ['./dashboards.modal.scss'],
  })

  export class DashboardModal implements OnInit {
    @Input() param: string;
    cfs: string = 'eh';
    constructor(private mCntrl: ModalController){}

    ngOnInit(){
      this.showParam('eh');
    }

    dismissModal(){
      this.mCntrl.dismiss();
    }

    refresh(){
      //this.showParam(this.cfs);
      let prev:any = document.getElementById(this.cfs);
      prev.setAttribute('style','display:none');
      prev.setAttribute('src', '');
      setTimeout(() =>{
        prev.src = environment[this.cfs];
        prev.setAttribute('style','display:block');
      }, 1000);
       
    }

    showParam(ev){
      let prev:any = document.getElementById(this.cfs); 
      prev.setAttribute('style','display:none');
      prev.setAttribute('src', '');
      this.cfs = ev;
      let ifrme: any = document.getElementById(ev);
      switch (ev){
        case 'eh':
          ifrme.src= environment.eh;
          ifrme.setAttribute('style','display:block');
          //ifrme.parentNode.replaceChild(ifrme.cloneNode(), ifrme);
          break;
        case 'eu':
          ifrme.src= environment.eu;
          ifrme.setAttribute('style','display:block');
          break;
        case 'wd':
          
          ifrme.src = environment.wd;
          ifrme.setAttribute('style','display:block');
          break;
        case 'ta':
          ifrme.src = environment.ta;
          ifrme.setAttribute('style','display:block');
          break;
        case 'hy':
          ifrme.src = environment.hy;
          ifrme.setAttribute('style','display:block');
          break;
        default:
          ifrme.src = environment.eh;
          ifrme.setAttribute('style','display:block');
          break;
      }
    }
  }