import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent implements OnInit {
  gameID:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  hello()
{
  console.log("aaaaa");
}  selectChangeHandler(event) {
    console.log(event);
    this.gameID = event.target.value;
  }

}
