import { AlunoService } from './../core/services/aluno.service';
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

  alunos!: AlunosModel[];

  modalRef?: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.alunosForms = this.fb.group({
      id:[''],
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      phone:['',Validators.required]
    })
    this.listaAlunos()
  }

  listaAlunos(){
    this.alunoService.getAll().subscribe((res:any)=> {
      console.log(res);
      this.alunos = res
    })
  }

//===================//==============
  atualizar(aluno: AlunosModel){
    this.alunoService.update(aluno.id, aluno).subscribe(
      (res)=>{
        console.log(res);
        this.listaAlunos()
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  salvar(){
   this.atualizar(this.alunosForms.value)
  }
//=================//=================

  selectAluno(aluno:AlunosModel){
    this.alunoSelect = aluno //seleciona um aluno
    this.alunosForms.patchValue(aluno)// preenche o form com aluno selecionado
  }

  voltar(){
    this.alunoSelect = null as any;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
