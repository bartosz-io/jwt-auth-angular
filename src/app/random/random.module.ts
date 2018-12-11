import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberComponent } from './containers/random-number/random-number.component';
import { RandomRoutingModule } from './random.routing.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [RandomNumberComponent],
  imports: [
    CommonModule,
    RandomRoutingModule,
    MatButtonModule
  ]
})
export class RandomModule { }
