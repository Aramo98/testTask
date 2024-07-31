const iconBlock = document.querySelector(".iconBlock");
const searchBlock = document.querySelector(".searchBlock");
const closeBtn = document.querySelector(".closeBtn")
iconBlock.addEventListener("click",()=>{
    searchBlock.classList.add("active")
})

closeBtn.addEventListener("click",()=>{
    searchBlock.classList.remove("active")
})


// Modal block activation and delete

const questionBtn = document.querySelector(".QuestionBtn");
const modalBlock = document.querySelector(".modalBlock");
const closeModalBtn = document.querySelector(".closeModalBtn")
questionBtn.addEventListener("click",()=>{
    modalBlock.classList.add("open")
})

closeModalBtn.addEventListener("click",()=>{
    modalBlock.classList.remove("open")
})

// scrolling Effects

const header = document.querySelector(".headerfirstVariant");
window.addEventListener("scroll", scrollHeader)


function scrollHeader(){
    const input = document.querySelector(".search")
    if (window.scrollY >=80) {
      header.style.height =  "60px";
      searchBlock.style.height ="60px";
      input.classList.add("scrolling")
    }else{
         header.style.height =  "100px";
         searchBlock.style.height ="100px";
         input.classList.remove("scrolling")
    }
}

const hamburgerBtn = document.querySelector(".hamburgerBtn")
const navigationBar = document.querySelector(".navigationBar");

hamburgerBtn.addEventListener("click",()=>{
    navigationBar.classList.add("active")
})

