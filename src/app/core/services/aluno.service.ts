import { AlunosModel } from './../../shared/alunos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = `${environment.baseUrl}/Aluno`;

constructor(
  private http: HttpClient
  ) { }

  getAll(): Observable<AlunosModel[]>{
    return this.http.get<AlunosModel[]>(`${this.url}`)
  }

  getById(id:number):Observable<AlunosModel>{
    return this.http.get<AlunosModel>(`${this.url}/${id}`)
  }

  save(aluno: AlunosModel){
    if(aluno.id){
      return this.update(aluno)
    }else {
      return this.create(aluno)
    }
  }
  private create(aluno: AlunosModel) {
    return this.http.post(`${this.url}`, aluno)
  }


  private update(aluno: AlunosModel){
    return this.http.put(`${this.url}/${aluno.id}`, aluno)
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
