import { Component, OnInit } from '@angular/core';
import { Aluno, ResponseAlunos } from './aluno.model';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  responseAlunos: any;

  model: Aluno = new Aluno();

  onSubmit(){
    let objAluno = {
      Nome: this.model.nome,
      Email: this.model.email,
      DataNascimento: this.model.dataNascimento,
      Sexo: this.model.sexo
    };
    this.responseAlunos.push(objAluno);
    localStorage.setItem('myArrayAlunos', JSON.stringify(this.responseAlunos));
    //console.log(JSON.parse(localStorage.getItem('myArrayAlunos')));

    this.resetValues();
  }

  resetValues(){
    this.model.nome = '';
    this.model.email = '';
    this.model.dataNascimento = '';
    this.model.sexo = '';
  }

  constructor(public alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe(
      res => {this.responseAlunos = res; localStorage.setItem('myArrayAlunos', JSON.stringify(res));}
    )
  }

}
