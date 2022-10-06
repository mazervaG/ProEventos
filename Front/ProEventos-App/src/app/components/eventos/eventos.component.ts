import { Component, OnInit, TemplateRef } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../../model/Evento';
import { EventoService } from '../../services/evento.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
modalRef?: BsModalRef;
public eventos: Evento[] = [];
public eventosFiltrados: Evento[] = [];
public widthImg: number = 150;
public marginImg: number = 2;
public showAllImg: boolean = true;
private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  public ngOnInit() {
    this.spinner.show();
    this.getEventos();
  }

  public updateAllImg(): void {
    this.showAllImg = !this.showAllImg;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
    next: (_eventos: Evento[]) => {
        this.eventos = _eventos
        this.eventosFiltrados = this.eventos
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
      },
      complete: () => this.spinner.hide()
    });
  }

  openModal(template: TemplateRef<any>) : void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Evento deletado com Sucesso', 'Deletado!');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
