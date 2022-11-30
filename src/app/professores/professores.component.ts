import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProfessoresModel } from '../shared/professores';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  profSelect!: ProfessoresModel;
  profForms!:FormGroup;

  professores = [
    {id:1 ,nome:'Tereza', disciplina: 'Português', phone:54548},
    {id:2 ,nome:'Alisson', disciplina: 'Historia', phone:76846},
    {id:3 ,nome:'Conceição', disciplina: 'Geografia',phone:98214},
  ]
  modalRef?: BsModalRef;
  constructor(
    private fb:FormBuilder,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.profForms = this.fb.group({
      nome:['',Validators.required],
      disciplina:['',Validators.required],
      phone:['',Validators.required]
    })
  }

  selectProf(prof:ProfessoresModel) {
    this.profSelect = prof //seleciona um professor
    this.profForms.patchValue(prof)// preenche o form com professor selecionado
  }

  voltar() {
     this.profSelect =  null as any;
  }

  salvar(){
    console.log(this.profForms.value);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
