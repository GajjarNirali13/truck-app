import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TruckListService } from './truck-list.service';
import { TruckMenuPage } from '../truck-menu/truck-menu';


@Component({
    selector: 'page-truck-list',
    templateUrl: 'truck-list.html',
    providers: [ TruckListService ]
})
export class TruckListPage {
    truckList: any;

    constructor(
        public navCtrl: NavController,
        public truckListService: TruckListService,
        public navParams: NavParams
    ) {
        this.getTruckListData()
    }

    getTruckListData() {
        this.truckListService.getTruckList().subscribe((res)=>{
            this.truckList = res;
        },(error)=>{
            alert('Not able to find the truck list');
        });
    }

    goToTruckMenu(truck) {
        this.navCtrl.push(TruckMenuPage, {'truckId': truck._id})
    }

}
