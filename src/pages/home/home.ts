import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from './../../app/services/api.service';
import { Albums } from './../../app/Albums';

import { PhotosPage } from './../photos/photos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  albumsRes: Albums[];
  constructor(public navCtrl: NavController, private _apiService: ApiService) {
    this.fatchAlbums();
  }
  fatchAlbums() {
      this._apiService.fatchAlbums().subscribe(res => {
          this.albumsRes = res;
          console.log(res);
      })
  }
  onLoadPhotos() {
    this.navCtrl.push(PhotosPage);
  }

}
