import { environment } from 'src/environments/environment';
import { ProfessoresModel } from './../../shared/professores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
url = environment.baseUrl

constructor(
  private http: HttpClient
) { }

getAll():Observable<ProfessoresModel[]>{
  return this.http.get<ProfessoresModel[]>(`${this.url}/Professor`)
}

}
