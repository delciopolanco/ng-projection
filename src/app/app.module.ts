import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerComponent } from './components/burger/burger.component';
import { TomatoComponent } from './components/burger/ingredients/tomato/tomato.component';
import { LettuceComponent } from './components/burger/ingredients/lettuce/lettuce.component';
import { CheeseComponent } from './components/burger/ingredients/cheese/cheese.component';
import { BaconComponent } from './components/burger/ingredients/bacon/bacon.component';
import { MeatComponent } from './components/burger/ingredients/meat/meat.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    TomatoComponent,
    LettuceComponent,
    CheeseComponent,
    BaconComponent,
    MeatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
