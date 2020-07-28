import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'horsegame';
  results: any  = [];
  upcoming: any  = [];
  gameInfo = {};
  gameRaces: any = [];
  raceStartInfo: any =  [];
  selectedHorse = 0;

  selectedGame: string = '';
  
  gameId: string = '';
  tabView: boolean = false;
  value: number = 0;
  index;

  gameIdData: Array<String> = ['V75', 'V65', 'V64', 'V4'];
  constructor(private router: Router, private apiService: ApiService) {}
  // selectValue(event) {
  //   this.selectedGame = event.target.
  // }
  gotoHome() {
    this.router.navigate(['/newpage']);
  }
  // getData() {
  //   this.apiService.getGameID(this.testValue).subscribe((data) => {
  //     this.results = data['results'];
  //     this.upcoming = data['upcoming'];
  //     console.log(this.results);
  //     console.log(this.upcoming);
  //   });
  // }

  getID(id) {
    console.log(id);
    this.gameId = id;
    this.apiService.getGameData(this.gameId).subscribe((data) => {
      this.gameInfo = data;
      console.log(data['races']);
      this.gameRaces = this.gameInfo['races'];
    });
  }

  getRaceID(id, index) {
    this.raceStartInfo = this.gameInfo['races'][index].starts;
    console.log(this.raceStartInfo);
  }

  getTabView(index) {
    this.index = index;
    if (this.value == 0) {
      this.tabView = true;
      this.value = 1;
    } else {
      this.tabView = false;
      this.value = 0;
    }
  }

  findHorseDetails(r) {
    console.log(r.horse.id);
    return this.raceStartInfo.filter((x) => x.number == r.number);
  }
  onChange(e) {
    let i = e;
    this.apiService.getGameID(i.toString()).subscribe((data) => {
      this.results = data['results'];
      this.upcoming = data['upcoming'];
    });
  }
}
