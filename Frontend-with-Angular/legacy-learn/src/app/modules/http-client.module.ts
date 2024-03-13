import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule] // Make HttpClient and its dependencies available for import
})
export class MyHttpClientModule { }