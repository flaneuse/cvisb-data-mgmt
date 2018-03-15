import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  exports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
