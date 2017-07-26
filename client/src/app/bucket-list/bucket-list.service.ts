import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BucketList } from './bucket-list';

@Injectable()
export class BucketListService {

    constructor(private _http: Http){ }

    create(bucketList){
        return this._http.post('/bucket-list/add', bucketList)
        .map(data => data.json())
        .toPromise()
    }

    list(){
        return this._http.get("/bucket-list")
        .map(data => data.json())
        .toPromise()
    }

    update (bucketList) {
      return this._http.post(`/bucket-list/${bucketList._id}`, bucketList)
        .map(data => data.json())
        .toPromise();
    }
}

