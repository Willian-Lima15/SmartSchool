import { environment } from 'src/environments/environment';
import { ProfessoresModel } from './../../shared/professores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
url = `${environment.baseUrl}/Professor`

constructor(
  private http: HttpClient
) { }

getAll():Observable<ProfessoresModel[]>{
  return this.http.get<ProfessoresModel[]>(`${this.url}`)
}

getById(id: number):Observable<ProfessoresModel>{
  return this.http.get<ProfessoresModel>(`${this.url}/${id}`)
}

save(professor: ProfessoresModel){
  if(professor.id){
    return this.update(professor)
  }else {
    return this.create(professor)
  }
}

private create(professor: ProfessoresModel){
  return this.http.post(`${this.url}`, professor)
}

private update(professor:ProfessoresModel){
  return this.http.put(`${this.url}/${professor.id}`, professor)
}

delete(id:number) {
  return this.http.delete(`${this.url}/${id}`)
}

}
