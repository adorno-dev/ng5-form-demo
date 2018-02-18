import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  form: FormGroup;

  // instance of component
  constructor
    (
    private formBuilder: FormBuilder,
    private http: Http
    ) { }

  // instance of ui component
  ngOnInit() {

    // this.form = new FormGroup({
    //   name:  new FormControl(),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     cep: new FormGroup()
    //   })
    // });

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        address: [null, Validators.required],
        cep: [null, Validators.required],
        number: [null, Validators.required],
        extra: [null],
        district: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required]
      })
    });

  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
        .map(response => response)
        .subscribe(data => {
          this.form.reset(); // reseting the form
          console.log(data);
        }, (error: any) => console.log('error!!'));
    } else {
      this.onFormGroupControl(this.form);
    }
  }

  onFormGroupControl(formGroup: FormGroup) {
    Object.keys(formGroup.controls)
      .forEach((fieldId: string) => {
        console.log(fieldId)
        const control = formGroup.get(fieldId);
        control.markAsDirty();
        if (control instanceof(FormGroup))
          this.onFormGroupControl(control);
      });
  }

  onValidTouched(fieldId: string) {
    return !this.form.get(fieldId).valid && (this.form.get(fieldId).touched || this.form.get(fieldId).dirty);
  }

  onInvalidEmail() {
    let control = this.form.controls['email'] as FormControl;
    return control.errors && control.errors['email'] && control.errors['required'] == null && control.touched;
  }

  onCssValidation(fieldId: string) {
    return {
      'has-error': this.onValidTouched(fieldId),
      'has-feedback': this.onValidTouched(fieldId)
    }
  }

  checkCEP() {
    var value = this.form.get('address.cep').value;
    value = value.replace(/\D/g, ''); // only numbers
    // has value
    if (value != "") {
      var validation = /^[0-9]{8}$/; // regex eight numbers
      if (validation.test(value)) {
        this.form.reset();
        this.http.get(`//viacep.com.br/ws/${value}/json`)
          .map(data => data.json())
          .subscribe(data => this.populateCEP(data));
      }
    }
  }

  populateCEP(response) {

    // sender.setValue({
    //   name: sender.value.name,
    //   email: sender.value.email,
    //   address: {
    //     address: response.logradouro,
    //     cep: response.cep,
    //     number: '',
    //     extra: response.complemento,
    //     district: response.bairro,
    //     city: response.localidade,
    //     state: response.uf
    //   }
    // });

    this.form.patchValue({
      address: {
        address: response.logradouro,
        cep: response.cep,
        extra: response.complemento,
        district: response.bairro,
        city: response.localidade,
        state: response.uf
      }
    });

    // this.form.get('name').setValue('<we can set the property directly too.');

  }

}