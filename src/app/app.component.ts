import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { StartComponent } from "./start/start.component";
import { BodyComponent } from "./body/body.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, StartComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
