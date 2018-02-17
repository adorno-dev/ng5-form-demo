import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  // profile: any = { name: 'John Doe', email: 'john.doe@angularjs.com' }
  // profile: any = { name: null, email: null }
  profile: any = { name: '', email: '' }

  constructor(private http: Http) { }

  ngOnInit() { }

  onSubmit(sender) {
    console.log(sender);
    this.http.post('https://httpbin.org/post', JSON.stringify(sender.value))
             .map(response => response)
             .subscribe(data => console.log(data));
  }

  validateField(field) {
    return !field.valid && field.touched;
  }

  applyCssError(field) {
    return {
      'has-error': this.validateField(field),
      'has-feedback': this.validateField(field)
    };
  }

  checkCEP(value, form) {
    var value = value.replace(/\D/g, ''); // only numbers
    // has value
    if (value != "") {
      var validation = /^[0-9]{8}$/; // regex eight numbers
      if (validation.test(value)) {
        this.resetForm(form);
        this.http.get(`//viacep.com.br/ws/${value}/json`)
          .map(data => data.json())
          .subscribe(data => this.populateCEP(data, form));
      }
    }
  }

  populateCEP(response, sender) {

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

    sender.form.patchValue({
      address: {
        address: response.logradouro,
        cep: response.cep,
        extra: response.complemento,
        district: response.bairro,
        city: response.localidade,
        state: response.uf
      }
    });

    // console.log(sender);
  }

  resetForm(sender) {
    sender.form.patchValue({
      address: {
        address: null,
        extra: null,
        district: null,
        city: null,
        state: null
      }
    })
  }

}