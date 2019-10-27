import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Configuration, ConfigurationParameters, ApiModule } from './swagger';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo/todo.module';
export  function  apiConfigFactory():  Configuration {
	const params:  ConfigurationParameters  = {
		// es. get basePath from environment or define it here
		basePath: 'http://localhost:9081/api'
	};
	return  new  Configuration(params);
  }
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, ApiModule.forRoot(apiConfigFactory),
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
