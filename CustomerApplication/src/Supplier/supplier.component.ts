import { Component, Injector } from '@angular/core';
import { BaseLogger } from 'src/Utility/CustomerApp.logger';

@Component({
  templateUrl: './supplier.view.html',
})
export class SupplierComponent {
  /**
   *Conditional DI
   */
  loggerObj: BaseLogger = null;
  constructor(_injector: Injector) {
    this.loggerObj = _injector.get('File');
    this.loggerObj.Log();
  }
  title = 'Supplier Page';
}
