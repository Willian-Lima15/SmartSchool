import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos'

  public alunoSelect!:string;

  alunos = [
    {id:1 ,nome:'Willian', sobrenome: 'Pereira', phone:54548},
    {id:2 ,nome:'Wlisses', sobrenome: 'Mota', phone:76846},
    {id:3 ,nome:'Amariles', sobrenome: 'Souza',phone:98214},
  ]
  constructor() { }

  ngOnInit() {
  }

  selectAluno(aluno:any){
    this.alunoSelect = aluno.nome
  }

  voltar(){
    this.alunoSelect = ''
  }

}
