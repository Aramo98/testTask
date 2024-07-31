const orderBtn = document.querySelectorAll(".orderBtn");
const secondModalBlock = document.querySelector(".secondModalBlock");
const closeBtnSecond = document.querySelector(".closeBtnSecond")
orderBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        secondModalBlock.classList.add("open")
    })
})

closeBtnSecond.addEventListener("click",()=>{
    secondModalBlock.classList.remove("open")
})



// validation One
const inputBool = true
const formEight = document.querySelector(".formEight");
const Name = document.querySelector(".Name");
const Phone = document.querySelector(".Phone");
const Select = document.querySelector(".Select");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");

formEight.addEventListener("submit",(evt)=>{
  
      
evt.preventDefault()
if (!Name.value || !Phone.value || !Select.value) {
  alert1.innerHTML = "Это обязательно"
  alert2.innerHTML = "Это обязательно"
  alert3.innerHTML = "Это обязательно"
  alert1.style.color ="#B91C1C"
  alert2.style.color ="#B91C1C"
  alert3.style.color ="#B91C1C"
  return false
}else{
  alert1.innerHTML = ""
  alert2.innerHTML = ""
  alert3.innerHTML = ""  
}
})


Phone.addEventListener("click",()=>{
    if(numberBool){
        Phone.setAttribute("placeholder", '+7 (000)000-00-00');
     inputBool = false
    }else{
        Phone.getAttribute("placeholder");
     bool = true
    
    }
    })

// Validation two


let numberBool = true
const NumberInput = document.querySelector('.NumberInput');
const textInput = document.querySelector(".TextInput")
const SelectInput = document.querySelector(".SelectInput")
const messageInput = document.querySelector(".messageInput")
const selectBtn = document.querySelector(".selectBtn")
const selectBlock = document.querySelector(".selectBlock")
const selects = document.querySelectorAll(".selects")

const formNine = document.querySelector(".formNine")
const nameAlert = document.querySelector(".nameAlert")
const numberAlert = document.querySelector(".numberAlert")
const selectAlert = document.querySelector(".selectAlert")
const messageAlert = document.querySelector(".messageAlert")
formNine.addEventListener("submit",(evt)=>{
 evt.preventDefault();

 if (!NumberInput.value || !SelectInput.value || !textInput.value || !messageInput.value ) {
     nameAlert.innerHTML  = "Это обязательно";
     numberAlert.innerHTML  = "Это обязательно";
     selectAlert.innerHTML  = "Это обязательно";
     messageAlert.innerHTML  = "Это обязательно";
     nameAlert.style.color = "#B91C1C"
     numberAlert.style.color = "#B91C1C"
     selectAlert.style.color = "#B91C1C"
     messageAlert.style.color = "#B91C1C";
     return false
 }else{
   nameAlert.innerHTML  = "";
     numberAlert.innerHTML  = "";
     selectAlert.innerHTML  = "";
     messageAlert.innerHTML  = "";
 }
 


})

NumberInput.addEventListener("click",()=>{
if(numberBool){
 NumberInput.setAttribute("placeholder", '+7 (000)000-00-00');
 numberBool = false

}else{
 NumberInput.getAttribute("placeholder");
 numberBool = true

}
})




// selects
selectBtn.addEventListener("click",()=>{
selectBlock.classList.toggle("active")
})
selects.forEach((item)=>{
item.addEventListener("click",()=>{
 SelectInput.value = item.innerHTML
 selectBlock.classList.remove("active")
})
})



// Validation three 
 let bool = true
const formThree = document.querySelector(".formThree")
const nameValue = document.querySelector(".nameValue")
const phoneValue = document.querySelector(".phoneValue")
const selectValue = document.querySelector(".selectValue")
const messageValue = document.querySelector(".messageValue");
const inputAlert1 = document.querySelector(".inputAlert1");
const inputAlert2 = document.querySelector(".inputAlert2");
const inputAlert3 = document.querySelector(".inputAlert3");
const inputAlert4 = document.querySelector(".inputAlert4");

formThree.addEventListener("submit",(evt)=>{
evt.preventDefault();
if(!nameValue.value || !phoneValue.value || !selectValue.value || !messageValue.value){
    inputAlert1.innerHTML = "Это обязательно"
    inputAlert2.innerHTML = "Это обязательно"
    inputAlert3.innerHTML = "Это обязательно"
    inputAlert4.innerHTML = "Это обязательно"
    inputAlert1.style.color = "#B91C1C"
    inputAlert2.style.color = "#B91C1C"
    inputAlert3.style.color = "#B91C1C"
    inputAlert4.style.color = "#B91C1C"
}
})


phoneValue.addEventListener("click",()=>{
    if(numberBool){
        phoneValue.setAttribute("placeholder", '+7 (000)000-00-00');
     bool = false
    
    
    }else{
        phoneValue.getAttribute("placeholder");
     bool = true
    
    }
    })



// Modal Input Validation One

const modalPhoneInput = document.querySelector(".modalPhoneInput")
const FormTwo = document.querySelector(".FormTwo");
const alertPhone = document.querySelector(".alertPhone")
FormTwo.addEventListener("submit",()=>{
    if (!modalPhoneInput.value) {
        alertPhone.innerHTML = "Это обязательно"
        alertPhone.style.color = "#B91C1C"
    }else{
        alertPhone.innerHTML = ""
    }
})


modalPhoneInput.addEventListener("click",()=>{
    if(numberBool){
        modalPhoneInput.setAttribute("placeholder", '+7 (000)000-00-00');
     bool = false
    
    
    }else{
        modalPhoneInput.getAttribute("placeholder");
     bool = true
    
    }
    })


    const selectBtnSecond = document.querySelector(".selectBtnSecond")
    const selectBlockSecond = document.querySelector(".selectBlockSecond")
    const selectsSecond = document.querySelectorAll(".selectsSecond")

    selectBtnSecond.addEventListener("click",()=>{
        selectBlockSecond.classList.toggle("active")
        })
        selectsSecond.forEach((item)=>{
        item.addEventListener("click",()=>{
         Select.value = item.innerHTML
         selectBlockSecond.classList.remove("active")
        })
        })



//Modal Input Validation One
const modalForm = document.querySelector(".modalForm");
const modalPhoneVal = document.querySelector(".modalPhoneVal");
const modalEmailVal = document.querySelector(".modalEmailVal");
const modalFormAlert = document.querySelector(".modalFormAlert");

modalForm.addEventListener("submit",(evt)=>{
evt.preventDefault();
if (!modalEmailVal.value || !modalPhoneVal.value) {
    modalFormAlert.innerHTML = "Оба поля являются обязательными";
    modalFormAlert.style.color ="#B91C1C";
    return false;
}
if (modalEmailVal.value.indexOf("@") === -1 || modalEmailVal.value.indexOf(".") === -1) {
    modalFormAlert.innerHTML = "Электронная почта: адрес неверный";
    modalFormAlert.style.color ="#F97316";
    return false;
}else{
     secondModalBlock.classList.remove("open")
    let succesBlock = document.querySelector(".successBlock");
    succesBlock.classList.add("active");
    setTimeout(()=>{
        succesBlock.classList.remove("active");
        window.location.reload()
    },1500)
}
})

const maskOptions = {
mask: '+{7}(000)000-00-00',
maskTwo: '+{7}(000)000-00-00',
maskThree: '+{7}(000)000-00-00',
maskFour: '+{7}(000)000-00-00',
maskFive: '+{7}(000)000-00-00',
};
const mask = IMask(NumberInput,maskOptions);
const maskTwo = IMask(Phone,maskOptions);
const maskThree = IMask(phoneValue,maskOptions)
const maskFour = IMask(modalPhoneInput,maskOptions)
const maskFive = IMask(modalPhoneVal,maskOptions)



