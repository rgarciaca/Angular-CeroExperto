import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.minLength(3) ]],
    favoritos: this.fb.array([
      ['Fallout 76'],
      ['Assasins Credd Valhalla']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritos() {
    return this.miFormulario.controls["favoritos"] as FormArray;
  }

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

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    this.favoritos.push( new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito(index: number) {
    this.favoritos.removeAt(index);
  }

}
