import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatAutocompleteModule],
  exports: [MatAutocompleteModule],
})
export class SharedModule {}
