import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatAutocompleteModule, MatFormFieldModule, MatInputModule,
  MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
  MatCheckboxModule, MatIconModule, MatSortModule
} from '@angular/material';

@NgModule({
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
    MatCheckboxModule, MatIconModule, MatSortModule
  ],
  exports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatChipsModule, MatTabsModule, MatTableModule, MatSelectModule,
  MatCheckboxModule, MatIconModule, MatSortModule],
})
export class MaterialModule { }
