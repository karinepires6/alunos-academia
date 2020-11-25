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
  enableEdit = false;
  enableEditIndex = -1;

  model: Aluno = new Aluno();

  onSubmit(){
    let objAluno = {
      Nome: this.model.nome,
      Email: this.model.email,
      DataNascimento: this.model.dataNascimento,
      Sexo: this.model.sexo
    };

    //user is editing the table row
    if(this.enableEditIndex != -1){
      this.responseAlunos.splice(this.enableEditIndex, 1, objAluno);
    } else {
      //user is adding a new row to the table
      this.responseAlunos.push(objAluno);
    }

    localStorage.setItem('myArrayAlunos', JSON.stringify(this.responseAlunos));
    console.log(JSON.parse(localStorage.getItem('myArrayAlunos')));

    this.resetValues();
  }

  resetValues(){
    this.model.nome = '';
    this.model.email = '';
    this.model.dataNascimento = '';
    this.model.sexo = '';
    this.enableEditIndex = -1;
  }

  enableEditMethod(e, i) {
    let arrayAlunos = JSON.parse(localStorage.getItem('myArrayAlunos'));
    this.model.nome = arrayAlunos[i].Nome;
    this.model.email = arrayAlunos[i].Email;
    this.model.dataNascimento = arrayAlunos[i].DataNascimento;
    this.model.sexo = arrayAlunos[i].Sexo;
    this.enableEditIndex = i;
  }

  constructor(public alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe(
      res => {this.responseAlunos = res; localStorage.setItem('myArrayAlunos', JSON.stringify(res));}
    )
  }

}
