import { Component } from '@angular/core';
import { Resultados } from '../resultados';

@Component({
  selector: 'imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class IMCComponent {


  nombre:string="";
  peso:number=70;
  altura:number=165;
  IMC?:number;
  estado:string=null;
  resultado:string=null;
  interval:any;
 public genero:string;
 public resultados:Resultados[]=[];
  

  public sumar():void{
    this.peso++;

        this.interval=setInterval(()=>{
            this.peso++;
          },200)
   }

   public restar():void{
    if(this.peso > 0){
       this.peso--;

        this.interval=setInterval(()=>{
            this.peso--;
          },200)

    }
       
   }

   public limpia():void{
      clearInterval(this.interval);
   }

  

   public sumaral():void{
    this.altura++;

        this.interval=setInterval(()=>{
            this.altura++;
          },200)
   }

   public restaral():void{
    
    
    if(this.altura > 0){
    this.altura--;

        this.interval=setInterval(()=>{
            this.altura--;
          },200)
   }
  }

  public reset():void{
    this.nombre="";
    this.peso=70;
    this.altura=165;
    this.resultado=null;
    this.genero=null;
  }

   public calculo():void{

    if(this.nombre !="" && this.genero != null){

      this.estado="OK";

      console.log('su genero es: ' + this.genero);
    this.IMC=this.peso/Math.pow((this.altura)/100,2);

    if(this.IMC < 18.5){
       this.resultado=" tiene peso insuficiente ";
    }

    if(this.IMC >= 18.5 && this.IMC <=24.9){
      this.resultado="tiene peso normal ";
    }

    if(this.IMC >= 25 && this.IMC <=29.9){
      this.resultado=" tiene sobrepeso ";
    }

    if(this.IMC > 29.9){
      this.resultado=" esta Obeso ";
    }

    console.log(this.IMC);

    this.resultados.push({
      nombre:this.nombre,
      imc:  Math.round(this.IMC) ,
      mensaje:this.resultado
    });

  

  }
  else{
    this.estado="Error"
    this.resultado="No has introducido un nombre o genero"
  }
  console.log(this.estado)
   }


}
