import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunosModel } from '../shared/alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'
  alunoSelect!:AlunosModel;
  alunosForms!: FormGroup

  alunos = [
    {id:1 ,nome:'Willian', sobrenome: 'Pereira', phone:54548},
    {id:2 ,nome:'Wlisses', sobrenome: 'Mota', phone:76846},
    {id:3 ,nome:'Amariles', sobrenome: 'Souza',phone:98214},
  ]

  modalRef?: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.alunosForms = this.fb.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      phone:['',Validators.required]
    })
  }

  selectAluno(aluno:AlunosModel){
    this.alunoSelect = aluno //seleciona um aluno
    this.alunosForms.patchValue(aluno)// preenche o form com aluno selecionado
  }

  voltar(){
    this.alunoSelect = null as any;
  }

  salvar(){
    console.log(this.alunosForms.value);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
