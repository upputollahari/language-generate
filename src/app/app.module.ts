import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LanguageGenerateComponent } from './language-generate/language-generate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  MatTabsModule,BrowserAnimationsModule,
  MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule ],
  declarations: [ AppComponent, HelloComponent, LanguageGenerateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
