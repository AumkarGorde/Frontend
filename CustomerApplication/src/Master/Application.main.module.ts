import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from '../Master/master.component';
import { MainRoutes } from '../Routing/CustomerApplication.routing';
import {
  BaseLogger,
  ConsoleLogger,
  DataBaseLogger,
  FileLogger,
} from 'src/Utility/CustomerApp.logger';

@NgModule({
  declarations: [MasterComponent],
  imports: [BrowserModule, RouterModule.forRoot(MainRoutes), FormsModule],
  providers: [
    { provide: BaseLogger, useClass: ConsoleLogger },
    { provide: 'DB', useClass: DataBaseLogger },
    { provide: 'File', useClass: FileLogger },
  ],
  bootstrap: [MasterComponent],
})
export class AppMainModule {}
