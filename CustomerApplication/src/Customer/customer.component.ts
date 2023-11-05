import { Component, Injector, Optional } from '@angular/core';
import { BaseLogger } from 'src/Utility/CustomerApp.logger';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  templateUrl: './customer.view.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  /**
   *
   */
  Disable: boolean = false;
  _loggerObj: BaseLogger = null;
  constructor(@Optional() _injector: Injector, public http: HttpClient) {
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

  //does model comes automatically ?-> No
  PostToServer(cus: Customer) {
    this.Disable = true;
    var cusdto: any = {};
    cusdto.CustomerId = cus.CustomerId;
    cusdto.CustomerName = cus.CustomerName;
    cusdto.CustomerLocation = cus.CustomerLocation;
    this.http.post('http://localhost:3000/Customers', cusdto).subscribe(
      (res) => this.SuccessPost(res),
      (res) => this.ErrorPost(res)
    );
  }

  SuccessPost(res) {
    this.GetAllFromServer();
    this.Disable = false;
  }

  ErrorPost(res) {
    console.log(res);
  }

  GetAllFromServer() {
    this.http.get('http://localhost:3000/Customers').subscribe(
      (res) => this.SuccessPostGetAll(res),
      (res) => this.ErrorPost(res)
    );
  }

  SuccessPostGetAll(res) {
    this.CustomerModelList = res;
    this.CustomerModel = new Customer();
  }

  hasErrors(controlName: string, validatorType: string): boolean {
    return this.CustomerModel.formCusGroup.controls[controlName].hasError(
      validatorType
    );
  }
}
