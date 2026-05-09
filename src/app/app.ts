import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Description } from './components/description/description';
import { Icon } from "./components/icon/icon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Description, Icon],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
