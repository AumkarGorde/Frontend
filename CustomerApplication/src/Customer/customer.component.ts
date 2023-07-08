import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.view.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  title = 'Customer Component';
  CustomerModel: Customer = new Customer();
  CustomerModelList: Array<Customer> = new Array<Customer>();

  Add() {
    this.CustomerModelList.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasErrors(controlName: string, validatorType: string): boolean {
    return this.CustomerModel.formCusGroup.controls[controlName].hasError(
      validatorType
    );
  }
}
