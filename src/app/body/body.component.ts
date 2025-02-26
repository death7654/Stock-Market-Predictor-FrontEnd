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
    
  ]

}
