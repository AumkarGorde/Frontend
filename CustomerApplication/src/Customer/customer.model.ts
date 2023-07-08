import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder, // helps to create a tree obj model of fromGroup, FromControl and Validators
} from '@angular/forms';

export class Customer {
  CustomerId: number = 0;
  CustomerName: string = '';
  CustomerLocation: string = '';

  //Validation is done in 3 steps
  //1. Create  : We create the validation object model.
  //2. Connect : We connect the validation to the UI.
  //3. Check   : IsValid , IsDirty

  // Creating validation model
  formCusGroup: FormGroup = null;
  constructor() {
    var builder = new FormBuilder();
    this.formCusGroup = builder.group({});

    // Adding Control and Validations
    this.formCusGroup.addControl(
      'CustomerNameControl',
      new FormControl('', Validators.required)
    );

    //adding 2 validations on CustomerId
    var valcollection = [];
    valcollection.push(Validators.required);
    valcollection.push(Validators.pattern('^[0-9]{4,4}$'));

    this.formCusGroup.addControl(
      'CustomerIdControl',
      new FormControl('', Validators.compose(valcollection))
    );
  }
}
