/*
Armando Antonio Navarro Flores 12400297
*/
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public sim: string;
   public n1: string;
   public n2: string;
   public res: number;
   public err: boolean;
  constructor(public navCtrl: NavController) {
    
  }
  suma(){    
    this.res = parseInt(this.n1) + parseInt(this.n2);    
    if (isNaN(this.res)){
    this.err=true;
  }    
  else{
    this.err=false;
  }
    this.sim="+";  
  }

resta(){
    this.res = parseInt(this.n1) - parseInt(this.n2);    
    if (isNaN(this.res)){
    this.err=true;
  }    
  else{
    this.err=false;
  }
    this.sim="-";
  }
  div(){
    this.res = parseInt(this.n1) / parseInt(this.n2);     
    if (isNaN(this.res)){
    this.err=true;
  }    
  else{
    this.err=false;
  }
    this.sim="/";
  }
  mul(){
    this.res = parseInt(this.n1) * parseInt(this.n2);       
    if (isNaN(this.res)){
    this.err=true;
  }    
  else{
    this.err=false;
  }
    this.sim="*";
  }
  mod(){
    this.res = parseInt(this.n1) % parseInt(this.n2);       
    if (isNaN(this.res)){
    this.err=true;
  }    
  else{
    this.err=false;
  }
    this.sim="%";
  }
}
