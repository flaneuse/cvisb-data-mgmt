import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatAutocompleteModule, MatFormFieldModule, MatInputModule,
  MatChipsModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatChipsModule, MatTabsModule
  ],
  exports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatChipsModule, MatTabsModule],
})
export class MaterialModule { }
