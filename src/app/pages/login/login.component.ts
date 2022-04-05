import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loading: Boolean = false;
  submitted: Boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
  });

  constructor(
    public router: Router,
    public _usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(48),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(48),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(5),
            Validators.maxLength(10),
          ],
        ],
      },
      {
        validators: [this.fullNameValidate('name', 'lastName')],
      }
    );
  }

  fullNameValidate(name: string, lastName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(name);
      const checkControl = controls.get(lastName);
      if (checkControl?.errors && !checkControl.errors['fullNameValidate']) {
        return null;
      }

      if (control?.value.length + checkControl?.value.length > 50) {
        controls.get(name)?.setErrors({ fullNameValidate: true });
        controls.get(lastName)?.setErrors({ fullNameValidate: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    let usuario = new Usuario(
      this.form.value.name,
      this.form.value.lastName,
      this.form.value.phoneNumber,
      this.form.value.email
    );

    this._usuariosService.register(usuario).subscribe(
      () => (this.loading = false),
      (err) => {
        this.loading = false;
        const errores = JSON.parse(err.error).errors;

        Swal.fire({
          title: 'Error de registro',
          text: errores.join('\n'),
          icon: 'error',
        });
      }
    );
  }
}
