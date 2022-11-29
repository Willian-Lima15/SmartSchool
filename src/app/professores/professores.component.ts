import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';

  profSelect!: string;

  professores = [
    {id:1 ,nome:'Tereza', disciplina: 'Português', phone:54548},
    {id:2 ,nome:'Alisson', disciplina: 'Historia', phone:76846},
    {id:3 ,nome:'Conceição', disciplina: 'Geografia',phone:98214},
  ]
  constructor() { }

  ngOnInit() {
  }

  selectProf(prof:any) {
    this.profSelect = prof.nome
  }

  voltar() {
    this.profSelect = ''
  }

}
