"use strict";

function first(obj) {
   // var pi = 3.14;
    var a = obj.a.value;
    var b = obj.b.value;
    var c = obj.c.value;
    if ((a < 0) || (b < 0) || (c < 0)) {
        alert('Сторона прямоугольника не может быть отрицательной длины');
        obj.reset();
    }
//    else if (b < 0) {
//        alert('Радиус не может быть равен нулю');
//        obj.reset();
//    }
    else {
        var V = (a * b * c).toFixed(2);
        var S = 2*(a * b + b * c + a * c).toFixed(2);
        obj.Vol.value = V;
        obj.Sq.value = S;
    }
    
}
function second(obj){
    var fst = obj.fst.value;
     var sec = obj.sec.value;
    if(fst<sec){alert("1");}
    else alert("2");
    obj.reset();
}
function third(obj){
    var month = obj.month.value;
    if ((month<=0)||(month>12)){alert("неправильное значение месяца");}
   switch(month){
       case "1": alert("Январь - 31 день");
           break;
           case "2": alert("Февраль - 28 дней");
          break;
           case "3": alert("Март - 31 день");
          break;
           case "4": alert("Апрель - 30 дней");
               break;
           case "5": alert("Мая - 31 день");
                break;
           case "6": alert("Июнь - 30 дней");
               break;
           case "7": alert("Июль - 31 день");
             break;
           case "8": alert("Август - 31 день");
              break;
            case "9": alert("Сентябрь - 30 дней");
           break;
           case "10": alert("Октябрь - 31 день");
              break;
           case "11": alert("Ноябрь - 30 дней");
             break;
           case "12": alert("Декабрь - 31 день");
              break;
         
   
   
   }
    
    obj.reset();
}
function fourth(obj){
    var price = obj.price.value;
    // var sec = obj.sec.value;
    let answer="";
    for (let i=1; i < 11;i++){
        answer+=price*i;
        answer+="   ";
    }
    answer= "стоимость 1, 2, …, 10 кг конфет"+answer;
    alert(answer);
    obj.reset();
}
function fifth(obj){
    var input = obj.input.value;
        if(input<=0) alert("N должно быть больше нуля");
 
    while (input%5 == 0) { input = input / 5;}
    if (input==1) alert("true");
    else alert("false");
    obj.reset();
}
function sixth(obj){
    var r1 = obj.r1.value;
     var r2 = obj.r2.value;
    var r3 = obj.r3.value;
     var r4 = obj.r4.value;
    var r5 = obj.r5.value;
     var r6 = obj.r6.value;
    let an1 = RingS1(r1,r2);
     let an2 = RingS2(r3,r4);
     let an3 = RingS3(r5,r6);
 
    obj.reset();
    document.task6.res1.value= an1;
    document.task6.res2.value= an2;
    document.task6.res3.value= an3;
}
    
        function RingS1(r1, r2){
            let answer;
            if (r1>r2){
            answer=3.14*r1-3.14*r2;}
            else if(r1==r2){alert("значения радиусов не должны быть равны");}
            else{ answer=3.14*r2-3.14*r1;}
            return answer;
        }
let RingS2= function(r3,r4){
     let answer;
            if (r3>r4){
            answer=3.14*r3-3.14*r4;}
            else if(r3==r4){alert("значения радиусов не должны быть равны");}
            else{ answer=3.14*r4-3.14*r3;}
            return answer;
} 
let RingS3 = (r5,r6)=>{
     let answer;
            if (r5>r6){
            answer=3.14*r5-3.14*r6;}
            else if(r5==r6){alert("значения радиусов не должны быть равны");}
            else{ answer=3.14*r6-3.14*r5;}
            return answer;
}



   function seventh(obj){
    var N = obj.N.value;
       var arr = [];

      
       for(let y=0;y<N;y++){
        arr[y]= prompt("введите число"+(y+1) );
     }
      // alert(arr[2]);
       let min=arr[0];
       let index=0;
    for (let t=0;t < N;t++){
        //console.log(arr[t]);
        if(arr[t] < min){min=arr[t]; index=t;}
    }
       
       
alert("номер минимального элемента из данного набора - "+(index+1));
       obj.reset();
}
  function eighth(obj){
    var N = obj.N.value;
       var A = obj.A.value;
       var B = obj.B.value;
       var arr = [];

      if(N<3){alert("N должно быть больше 2"); 
              obj.reset(); return;}
      
      arr[0]=Number(A);
      arr[1]=Number(B);
   
       for(let y=2;y<N;y++){
           arr[y]=Number(0);
        for(var i=0;i<y;i++){
            
            arr[y]= arr[y] + arr[i];
                 }
     }
       alert(arr);
              obj.reset();
}
   function nineth(obj){
    var N = obj.N.value;
       if(N<2){alert("количество элементов массива должно быть больше 2"); obj.reset(); return;}
       var arr = [];
       for(let y=0;y<N;y++){
        arr[y]= prompt("введите число"+(y+1) );
     }
       let temp;
      let max=arr[0];
      let min=arr[0];
       let indexMin=0;
        let indexMax=0;
    for (let t=0;t < N;t++){
        //console.log(arr[t]);
        if(arr[t] < min){min=arr[t]; indexMin=t;}
      if(arr[t] > max){max=arr[t]; indexMax=t;}
   console.log("t = "+t+" , max ="+max+ "min ="+min);
    }
      
    arr[indexMax]=min;
       arr[indexMin]=max;
       alert(arr);
       
              obj.reset();
}







function tenth(obj){
    var line = obj.line.value;
     let symb;
    let newstr= "";
    line.toString;
      
     for( let i=0;i<line.length;i++){
        
         if(line[i]==line[i].toLowerCase()){
             symb=line[i].toUpperCase();
             console.log(symb);
            
             newstr+=symb;
                          continue;         }
                 else { 
            symb=line[i].toLowerCase();
                     newstr+=symb;
     }  
   
}
     alert(newstr);
              obj.reset();}


function per(obj){
    
class paral {
constructor() {
  this.W = null;
  this.L = null;
  this.H = null;
  this.S = null;
  this.V = null;
    this.D = null;
}
enter(){
   
    this.W = obj.W.value;
    this.L = obj.L.value;
    this.H =  obj.H.value;
}
square() {
  this.S = 2*(this.H * this.W + this.W * this.L + this.H * this.L);
  obj.S.value = this.S;
 
}
diag(){
    this.D = Math.sqrt(this.H * this.H + this.W * this.W + this.L * this.L);
    obj.D.value = this.D;
}

vol(){
    this.V = this.L * this.H * this.W;
    obj.V.value = this.V;
}
}

let Paral = new paral();
Paral.enter();
Paral.square();
Paral.diag();
Paral.vol();

}
function eleven(){
function paral2(W,L,H){
    
this.W=null;
    this.L=null;
    this.H=null;
  
 
 this.enter2 = function(){this.W=document.task11.W.value;
                          this.H=document.task11.H.value;
                          this.L=document.task11.L.value;}

    

    
  
   this.square2 = function(){
    let S = 2*(this.H * this.W + this.W * this.L + this.H * this.L);
      
    document.task11.S.value = S;
    }
   
   this.diag2 = function(){
    let D = Math.sqrt(this.H * this.H + this.W * this.W + this.L * this.L);
    document.task11.D.value=D;
    }
   
  this.vol2 = function(){
        this.V = this.L * this.H * this.W;
    document.task11.V.value= this.V;
    }
   

}
 let Paral2 = new paral2();
    
Paral2.enter2();
    Paral2.square2();
Paral2.diag2();
Paral2.vol2();
}


