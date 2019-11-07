import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent {
  username: FormControl;
  constructor() { 
      this.username = new FormControl('', Validators.required, this.limitedSymbols.bind(this))
  }
  
  limitedSymbols(): Observable<any> {
    if(this && this.username.value) {
      if (this.username.value.match('[^a-z^A-Z^0-9^\\@\\.\\-\\_]')) {
        this.username.setErrors({ 'invalid': true });
        return of({ 'No Way Jose': true });
      }
    }
    return of(null);
  }

  resetForm() {
    this.username.setValue('');
    this.username.setErrors(null);
  }

}