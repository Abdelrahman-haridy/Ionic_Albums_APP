import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from './../../app/services/api.service';
import { Photos } from './../../app/Photos';

/**
 * Generated class for the PhotosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
id: string;
param: string;
resPhoto: Photos[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _apiService: ApiService) {

    // this.navParams.get(this.id).subscribe((id) => {
    //   this._apiService.fatchPhoto(id).subscribe(res => {
    //     this.resPhoto = res;
    //     console.log(res);
    //   })
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }
  // pushPage(detailInfo) {
  //   // Push an `id` to the `'detail-page'`
  //   this.navCtrl.push('photos', {
  //     'id': detailInfo.id
  //   })
  // }

}
