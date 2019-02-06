import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SenzingSdkModule, SzRestConfiguration  } from '@senzing/sdk-components-ng';

import { AppComponent } from './app.component';

// create exportable factory  
// for AOT compilation
export function SzRestConfigurationFactory() {
  return new SzRestConfiguration({
    basePath: 'http://localhost:2080',
    withCredentials: true
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SenzingSdkModule.forRoot( SzRestConfigurationFactory )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
