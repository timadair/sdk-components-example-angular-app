import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SenzingSdkModule, SzRestConfiguration  } from '@senzing/sdk-components-ng';

import { AppComponent } from './app.component';
import * as API_CFG from '../../apiconfig.json'; 

// create exportable factory  
// for AOT compilation
export function SzRestConfigurationFactory() {
  // start with the defaults
  let CFG_OPTS = {
    basePath: 'http://localhost:2080',
    withCredentials: true
  };
  // override with config file (for container parameterization)
  if(API_CFG){
    if(API_CFG.basePath){ CFG_OPTS.basePath = API_CFG.basePath; }
    if(API_CFG.withCredentials){ CFG_OPTS.withCredentials = API_CFG.withCredentials; }
  }
  
  return new SzRestConfiguration( CFG_OPTS );
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
