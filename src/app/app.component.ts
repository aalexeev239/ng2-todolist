import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  currentValue: number;

  setRandomValue() {
    this.currentValue = Math.floor(Math.random() * 30);
  }

  setValue(evt: number) {
    this.currentValue = evt;
  }
}

