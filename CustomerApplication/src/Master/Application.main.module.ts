import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from '../Master/master.component';
import { MainRoutes } from '../Routing/CustomerApplication.routing';

@NgModule({
  declarations: [MasterComponent],
  imports: [BrowserModule, RouterModule.forRoot(MainRoutes), FormsModule],
  providers: [],
  bootstrap: [MasterComponent],
})
export class AppMainModule {}
