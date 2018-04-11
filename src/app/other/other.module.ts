import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OtherComponent} from '../components/other.component';
import {SomeComponent} from './someComponent';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OtherComponent , SomeComponent],
  exports: [OtherComponent]
})
export class OtherModule { }
