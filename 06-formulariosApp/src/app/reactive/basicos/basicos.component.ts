import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.minLength(3) ]],
    precio: [, [ Validators.required, Validators.min(0) ]],
    existencias: [, [ Validators.required, Validators.min(0) ]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoValido(field: string): boolean | null {
    return this.miFormulario.controls[field]?.errors && this.miFormulario.controls[field]?.touched
  }


  guardar() {
    if( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
