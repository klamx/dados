import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value1: number;
  value2: number;
  src1: string;
  src2: string;
  equal: string = '';

  ngOnInit() {
    this.roll();
  }

  randomNumber(): number {
    return Math.trunc(Math.random() * 6) + 1;
  }

  roll(): void {
    this.value1 = this.randomNumber();
    this.value2 = this.randomNumber();
    this.src1 = `../assets/img/dice${this.value1}.png`;
    this.src2 = `../assets/img/dice${this.value2}.png`;
    this.value1 === this.value2
      ? (this.equal = 'Ganaste')
      : (this.equal = 'Perdiste');
  }
}
