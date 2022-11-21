import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  btnValidar = "Validar";
  validar(form:any){
     alert(form);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
