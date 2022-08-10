import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [ this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, { validators: [ this.validatorService.camposIguales('password', 'password2')] });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors && errors['required']) {
      return 'El email es obligatorio';
    } else if(errors && errors['pattern']) {
      return 'El email no tiene el formato correcto';
    } else if(errors && errors['emailExistente']) {
      return 'El email ya existe en BD';
    }

    return '';
  }

  constructor( private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Roberto Garcia',
      email:'test@test.com',
      username: 'rgarcia'
    });
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }

}
