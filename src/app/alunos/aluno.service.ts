 import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 import { Aluno, ResponseAlunos } from './aluno.model'
 import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url: string = 'https://private-8f2b0b-wandersoncesar.apiary-mock.com/alunos';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<ResponseAlunos>{
    return this.http.get<ResponseAlunos>(this.url);
  }
}
