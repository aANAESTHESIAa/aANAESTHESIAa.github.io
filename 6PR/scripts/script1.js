document.addEventListener("DOMContentLoaded", ready);

function ready() {
  my_button.onclick = function() {
     
    var S = seria.value;
    var N = num.value;
    var IB = issued_by.value;
          var ID =issued_date.value;
          let test = IB.toString();
      console.log(test);
        
             let hasError;
          for (let i=0; i<test.length ;i++){console.log(i+"  letter "+ test[i]);
              if( test[i].match(/\d/)){console.log("error at "+ i);
                  hasError=true;
          
          }
             }
      function checkError(){
        
      if(hasError==true){throw new SyntaxError("Данные некорректны");}}
    try{checkError();}
      catch (e) {
  alert( "Извините, в данных ошибка" );}
      var p = document.createElement('p');
    p.className = 'user_info';
    p.innerText = "Серия "+S+"\n"+"Номер "+N+"\n"+"Выдан "+IB+"\n"+"Дата выдачи"+ID;

    var parentElem = document.body;
parentElem.appendChild(p);
    } 
 
 
   
    
  
}
