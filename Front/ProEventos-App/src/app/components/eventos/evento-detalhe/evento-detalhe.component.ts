import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void{
    this.form = new FormGroup({
      local: new FormControl(''),
      dataevento: new FormControl('', Validators.required),
      tema: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
      ),
      qtdpessoas: new FormControl('',
        [Validators.required, Validators.maxLength(120000)]
      ),
      imagemurl: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('',
        [Validators.required, Validators.email]
      ),
    });
  }

}
