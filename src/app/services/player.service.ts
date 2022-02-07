import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

PUBLIC_KEY: string = 'e6337b274e152fe629d5a9c578150a59';
HASH: string = '282e4389087fb8899d81b5f99e3bcf44'
URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&name=`;


  constructor(
    private http:HttpClient
  ) { }

  getAllCharacters(name:string) : Observable<any> {
    return this.http.get<any>(this.URL_API+name)
    .pipe(map((data: any) => data.data.results))
}
}
