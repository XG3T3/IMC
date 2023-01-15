import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Resultados } from './resultados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IMC';

  nombre:string="";

  peso:number=70;
  altura:number=150;
  IMC?:number;
  resultado:string=null;
 public genero:string;
 public resultados:Resultados[]=[];
  

  public sumar():void{
    this.peso++;
   }

   public restar():void{
        this.peso--;

        //  setInterval(()=>{
        //    this.peso--;
        //  },300)
   }

   public restarup():void{
    this.peso--;
   }

   public sumara():void{
    this.altura++;
   }

   public restara():void{
    this.altura--;
   }

  public reset():void{
    this.nombre="";
    this.peso=70;
    this.altura=150;
    this.resultado=null;
    this.genero=null;
  }

   public calculo():void{

    if(this.nombre !="" && this.genero != null){

      console.log('su genero es: ' + this.genero);
    this.IMC=this.peso/Math.pow((this.altura)/100,2);

    if(this.IMC < 18.5){
      console.log(this.IMC)
       this.resultado=" peso insuficiente ";
       
    }

    if(this.IMC >= 18.5 && this.IMC <=24.9){
      console.log(this.IMC)
      this.resultado=" peso normal ";
    }

    if(this.IMC >= 25 && this.IMC <=29.9){
      console.log(this.IMC)
      this.resultado=" sobrepeso ";
    }

    if(this.IMC > 29.9){
      console.log(this.IMC)
      this.resultado=" sobrepeso ";
    }

    this.resultados.push({
      nombre:this.nombre,
      imc:  Math.round(this.IMC) ,
      mensaje:this.resultado
    });

  

  }
  else{
    this.resultado="No has introducido un nombre o genero"
  }
   }


}
