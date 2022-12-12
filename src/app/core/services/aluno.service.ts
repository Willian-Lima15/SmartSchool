import { AlunosModel } from './../../shared/alunos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = environment.baseUrl;

constructor(
  private http: HttpClient
  ) { }

  getAll(): Observable<AlunosModel[]>{
    return this.http.get<AlunosModel[]>(`${this.url}/Aluno`)
  }

  getById(id:number):Observable<AlunosModel>{
    return this.http.get<AlunosModel>(`${this.url}/Aluno/${id}`)
  }

}
