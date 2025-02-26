import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  imports: [],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent {
  @Input() name: String = "";
  @Input() image: String = "";

  remove_class() {
    (document.getElementById("button") as HTMLInputElement).classList.remove("tile");
  }
  add_class() {
    (document.getElementById("button") as HTMLInputElement).classList.add("tile");
  }

}
