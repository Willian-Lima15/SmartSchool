import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProfessoresModel } from '../shared/professores';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from '../core/services/professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  profSelect!: ProfessoresModel;
  profForms!:FormGroup;

  professores!: ProfessoresModel[];

  modalRef?: BsModalRef;
  constructor(
    private fb:FormBuilder,
    private modalService: BsModalService,
    private professorSerivice:ProfessorService
  ) { }

  ngOnInit() {
    this.profForms = this.fb.group({
      id:[''],
      nome:['',Validators.required],
      disciplina:['',Validators.required],
      phone:['',Validators.required]
    });

    this.carregaProf()
  }

  carregaProf(){
    this.professorSerivice.getAll().subscribe((professor: ProfessoresModel[])=> {
      console.log(professor);

      this.professores = professor
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
