import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
    private photosUrl: string;
    id: string;
    constructor(private _http: Http) { }

    fatchAlbums() {
         return this._http.get(this.albumsUrl)
         .map(res => res.json());
    }
    fatchPhoto(id:string) {
        this.photosUrl = 'https://jsonplaceholder.typicode.com/albums/'+id+'/photos';
        return this._http.get(this.photosUrl)
        .map(res => res.json())
    }
}