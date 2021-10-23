import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-proyection';

  cheese: boolean = false;
  lettuce: boolean = false;
  meat: boolean = false;

  addIngredient(ingredient: 'cheese' | 'lettuce' | 'meat'): void {
    this[ingredient] = !this[ingredient];
  }
}
