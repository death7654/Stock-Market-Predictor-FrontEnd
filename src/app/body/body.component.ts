import { Component } from '@angular/core';
import { TilesComponent } from "./tiles/tiles.component";

@Component({
  selector: 'app-body',
  imports: [TilesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  advertisement = [
    {
      title: "Precision",
      description: "Advanced algorithms analyze market trends with pinpoint accuracy, ensuring data-driven investment decisions"
    },
    {
      title: "Automation",
      description: "Our system removes human error and emotions by automating investments, executing trades at the perfect moment"
    },
    {
      title: "Optimization",
      description: "Continuous learning and adaptation refine strategies, maximizing returns while managing risk efficiently"
    }
  ]

  data = [
    {
      name: "Google",
      market_name: "GOOG",
      image: "../../assets/icons/google.svg"
    },
    {
      name: "Apple",
      market_name: "AAPL",
      image: ""
    },
    {
      name: "Microsoft",
      market_name: "MSFT",
      image: ""
    },
    {
      name: "Meta",
      market_name: "META",
      image: ""
    },
    {
      name: "Tesla",
      market_name: "TSLA",
      image: ""
    },
    {
      name: "Twitter",
      market_name: "TWTR",
      image: ""
    },
    {
      name: "Nvidia",
      market_name: "NVDA",
      image: ""
    },
    {
      name: "Amazon",
      market_name: "AMZN",
      image: ""
    },
    {
      name: "Eli Lilly And Co",
      market_name: "LLY",
      image: ""
    },
    {
      name: "Oracle",
      market_name: "ORCL",
      image: ""
    },
    {
      name: "Costco",
      market_name: "COST",
      image: ""
    },
    {
      name: "Netflix",
      market_name: "NFLX",
      image: ""
    },
    {
      name: "Johnson & Johnson",
      market_name: "JNJ",
      image: ""
    },
    {
      name: "Home Depot",
      market_name: "HD",
      image: ""
    },
    {
      name: "Bank of America",
      market_name: "BAC",
      image: ""
    },
    {
      name: "T-Mobile",
      market_name: "TMUS",
      image: ""
    },
    {
      name: "Cisco",
      market_name: "CSCO",
      image: ""
    },
    {
      name: "WiseTech Global",
      market_name: "WTC",
      image: ""
    },
    {
      name: "Toyota",
      market_name: "TM",
      image: ""
    },
    {
      name: "IBM",
      market_name: "IBM",
      image: ""
    }
  ]

}
