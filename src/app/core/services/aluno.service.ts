import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/Operators'

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = environment.baseUrl;

constructor(
  private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(`${this.url}/aluno`).pipe(tap(res => console.log(res)
    ))
  }

}
