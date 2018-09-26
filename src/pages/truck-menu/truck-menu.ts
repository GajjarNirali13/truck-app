import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { TruckMenuService } from './truck-menu.service';

@Component({
    selector: 'page-truck-menu',
    templateUrl: 'truck-menu.html',
    providers: [ TruckMenuService ]
})
export class TruckMenuPage {
    truckId: any;
    menuList: any;

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public params: NavParams,
        public truckMenuService: TruckMenuService
    ) {
        this.truckId = params.get('truckId');
        this.getTruckMenu(this.truckId);
    }

    getTruckMenu(truckId) {
        this.truckMenuService.getMenuList(truckId).subscribe((res)=> {
            if (Object.keys(res).length > 0) {
                var temp = res[0];
                this.menuList = temp.menu;
            } else {
                this.menuList = [];
            }
        }, (err)=> {
            alert('error')
        })
    }

    truckLocation() {
        
    }
}