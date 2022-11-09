import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent{
  titulo = "Minhas Fotos!";
  
  


    
  
  // criar um array de objetos para as fotos
  
  imagens = [
    {img:"https://cdn.pixabay.com/photo/2022/11/02/08/48/cat-7564358_960_720.jpg", titulo: "gato"},
    {img:"https://cdn.pixabay.com/photo/2014/08/29/03/02/horses-430441_960_720.jpg",titulo: "cavalo"},
    {img:"https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_960_720.jpg",titulo: "leões"},
    {img:"https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_960_720.jpg",titulo: "Tigres"},
    {img:"https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg",titulo: "raposa"},
    {img:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",titulo: "beija-flor"}
  ];
  
  //botão click
  FotosPares: boolean = true;
  button = " FotosPares";
  clicar(){
  
    if(this.FotosPares){
      this.FotosPares = !this.FotosPares;
      this.button = 'Exibi fotos Pares';
    }else{
      this.FotosPares = !this.FotosPares;
      this.button = " Exibi todas as fotos";
      
    }
  } 
  
  
  
  
  
  }
  
      
   
