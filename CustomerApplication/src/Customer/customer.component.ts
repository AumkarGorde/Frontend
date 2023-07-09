import { Component, Injector, Optional } from '@angular/core';
import { BaseLogger } from 'src/Utility/CustomerApp.logger';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.view.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  /**
   *
   */
  _loggerObj: BaseLogger = null;
  constructor(@Optional() _injector: Injector) {
    this._loggerObj = _injector.get('DB');
    this._loggerObj.Log();
  }
  title = 'Customer Component';
  CustomerModel: Customer = new Customer();
  CustomerModelList: Array<Customer> = new Array<Customer>();

  Add() {
    this.CustomerModelList.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  SelectCustomer(cusObj: Customer) {
    this.CustomerModel = cusObj;
  }

  hasErrors(controlName: string, validatorType: string): boolean {
    return this.CustomerModel.formCusGroup.controls[controlName].hasError(
      validatorType
    );
  }
}
