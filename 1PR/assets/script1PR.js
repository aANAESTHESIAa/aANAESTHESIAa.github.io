
function verify(obj){
  let familyN = obj.cLN.value;
    let name = obj.cFN.value;
    let otch = obj.cFaN.value;
    let pro = obj.cProf.value;
    let lastJob = obj.cLastWP.value;
    let position = obj.cPos.value;
    let tel = obj.cPhone.value;
    console.log(familyN);
//    if(familyN!="/[а-я]+/i"){alert("Фамилия введена неправильно!"); return;   /*???*/  }
    let fst=/^[А-Я][а-я]*/;
      let prof=/[а-я]*/i;
    let tele=/\+[0-9]*/;
    if(!fst.test(familyN)){alert("Фамилия введена неверно");}
  if(!fst.test(name)){alert("Имя введено неверно!");}
      if(!fst.test(otch)){alert("Отчество введено неверно");}
      if(!prof.test(pro)){alert("Профессия введена неверно!");}
    if(!prof.test(position)){alert("Должность введена неверно!");}
    if(!tele.test(tel)){alert("Телефон введен неверно!");}
}