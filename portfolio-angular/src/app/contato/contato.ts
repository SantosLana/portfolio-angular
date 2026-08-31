import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { ChangeDetectorRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  private fb = inject(FormBuilder);
  private service = inject(ContatoService);
  private cdr = inject(ChangeDetectorRef);
  enviando = false; sucesso = ''; erro = ''; 

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
  this.sucesso = '';
  this.erro = '';

  if (this.form.invalid) {
  this.form.markAllAsTouched();

  const primeiroCampoInvalido = document.querySelector(
    'input.ng-invalid, textarea.ng-invalid'
  ) as HTMLElement | null;

  primeiroCampoInvalido?.focus();

  return;
}

  this.enviando = true;

  const dados = this.form.getRawValue();

  this.service.enviar({
    nome: dados.nome!,
    email: dados.email!,
    mensagem: dados.mensagem!,
  }).subscribe({
    next: (resp) => {
      this.sucesso = resp.mensagem;
      this.form.reset();
      this.enviando = false;
      this.cdr.detectChanges();
    },
    error: (err: HttpErrorResponse) => {
  if (err.error?.erros) {
    this.erro = err.error.erros.join(' ');
  } else {
    this.erro = 'Não foi possível enviar. Tente novamente.';
  }

  this.enviando = false;
  this.cdr.detectChanges();
},
  });
}
}