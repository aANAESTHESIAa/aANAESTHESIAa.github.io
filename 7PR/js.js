
document.addEventListener("DOMContentLoaded", ready);
function ready(){
but1.onclick=function(){
    var first = task1.value;
    first=first.toString();
    var reg1= /a+b*/g;
    if(reg1.test(first)){
                        alert("Найдено совпадение: "+first.match(reg1));
    }
}       //ok
but2.onclick=function(){
    var second = task2.value;
    second=second.toString();
    var reg2= /\\*\**/g;
    if(reg2.test(second)){alert("Найдено совпадение: "+second.match(reg2));}
}       //ok
but3.onclick=function(){
    var third = task3.value;
    var thirda = task3ans.value;
    third=third.toString();
    let regexp3=new RegExp ("\("+third+"\){3}","g");
    
    
    
    if(regexp3.test(thirda)){alert("Найдено совпадение: "+thirda.match(regexp3));}
    else alert("Совпадений не найдено.")
} //ok
but4.onclick=function(){
    var fourth = task4.value;
    fourth=fourth.toString();
    var reg4= /(.|\n){5}/g;
    if(reg4.test(fourth)){alert("Найдено совпадение: "+fourth.match(reg4));}
}   //к
but5.onclick=function(){
    var fifth = task5.value;
    fifth=fifth.toString();
    var reg5= new RegExp (/(\b\S+\b)\s*(\1\s*)+/g);
    if(reg5.test(fifth)){alert("Найдено совпадение: "+fifth.match(reg5));}
}       //k
but6.onclick=function(){
    var six = task6.value;
    six=six.toString();
    var reg6= /#[a-f0-9]{6}/gi;
    if(reg6.test(six)){alert("Найдено совпадение: "+six.match(reg6));}
}   //k
but8.onclick=function(){
    var eight = task8.value;
    eight=eight.toString();
    var reg8= /((;|:){1}-*(\(|\)|\[|\])(\2)*)/g;
    if(reg8.test(eight)){
       let matchAll = eight.matchAll(reg8);
        
        
        alert("Найдено совпадение: "+eight.match(reg8)+ "     количество смайлов:" + eight.match(reg8).length);
                        }
}   //k
but9.onclick=function(){
  let tr= "<b> <br\>  </b> tuyio";
  let regexp9=/(\<(\/?[^>]+)>)/g;
  let f=tr.replace(regexp9,'');
  alert(f);
  // let result8=Number8.match(regexp8);
  // alert(result8);
}


}
function readFile() {
  var selectedFile = document.getElementById('inputFile').files[0];
  var reader = new FileReader
             reader.onload = function (e) {
    var FileContent = e.target.result;
    let regexp9=/(\<(\/?[^>]+)>)/g;
    let f= FileContent.replace (regexp9,'');
    parseContent(f);
  };
  reader.readAsText(selectedFile);
}

function parseContent(content) {
    alert(content);
}
