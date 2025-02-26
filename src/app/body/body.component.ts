import { Component } from '@angular/core';
import { TilesComponent } from "./tiles/tiles.component";

@Component({
  selector: 'app-body',
  imports: [TilesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  data = [
    {
      name: "GOOG",
      image: "../../assets/icons/google.svg"
    },
    {
      name: "AAPL",
      image: ""
    },
    {
      name: "MSFT",
      image: ""
    },
    {
      name: "META",
      image: ""
    },
    {
      name: "TSLA",
      image: ""
    },
    {
      name: "TWTR",
      image: ""
    },
    {
      name: "NVDA",
      image: ""
    },
    {
      name: "AMZN",
      image: ""
    },
    {
      name: "LLY",
      image: ""
    },
    {
      name: "ORCL",
      image: ""
    },
    {
      name: "COST",
      image: ""
    },
    {
      name: "NFLX",
      image: ""
    },
    {
      name: "JNJ",
      image: ""
    },
    {
      name: "HD",
      image: ""
    },
    {
      name: "BAC",
      image: ""
    },
    {
      name: "TMUS",
      image: ""
    },
    {
      name: "CSCO",
      image: ""
    },
    {
      name: "WTC",
      image: ""
    },
    {
      name: "TM",
      image: ""
    },
    {
      name: "IBM",
      image: ""
    }
  ]

}
