import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://www.atg.se/services/racinginfo/v1/api/products/";
  
  gameDataUrl: string = "https://www.atg.se/services/racinginfo/v1/api/games/";

  constructor(private http: HttpClient) { }

  getGameID(gametype) {
    let urlId = this.url + gametype;
    return this.http.get(urlId);
  }

  getGameData(gameid) {
    console.log("gameid recieved in api", gameid);
    let gameurl = this.gameDataUrl + gameid;
    return this.http.get(gameurl);
  }
}
