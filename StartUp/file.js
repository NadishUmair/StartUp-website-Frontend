// ######################### humburger ###########################
const onclickbtn = document.getElementById('onclick');
const lines = document.querySelectorAll('.lines');
const closebtn = document.getElementById('closebtn');
const humburgerlist = document.getElementById("humburger-list");

onclickbtn.addEventListener('click', () => {

    humburgerlist.classList.toggle("hidden");
    lines.forEach(line => {
        line.classList.toggle("hidden");
        
    });
    closebtn.classList.toggle("hidden");
});









// ########################### main background ##########################3
const backgroundimg=document.getElementById('backgroundimg');
const leftbutton=document.getElementById('leftbutton');
const rightbutton=document.getElementById('rightbutton');

let currentbackgroundindex=0;
const backgroundImages=['url("./images/main-bg.webp")','url("./images/office.webp")'];
backgroundimg.style.backgroundImage=backgroundImages[currentbackgroundindex];
function changebackgroundimg(){
  currentbackgroundindex= (currentbackgroundindex+1)% backgroundImages.length;
  backgroundimg.style.backgroundImage=backgroundImages[currentbackgroundindex];
}

leftbutton.addEventListener('click',changebackgroundimg)
rightbutton.addEventListener('click',changebackgroundimg)


// ########################## All divs background ####################################
const divs=document.querySelectorAll('.mouse')

// hmesha jab zyada chezein hn tu loop lgaty hain
divs.forEach(div => {
  div.addEventListener('mouseover',function(){
    div.style.backgroundColor="#F7F7F7";
  })
  div.addEventListener('mouseleave',function(){
    div.style.backgroundColor="white";
  })
});

// ################################## services #################################
const clonein=document.getElementById('forclone');
// const item=document.createElement('h2');
const showhere=document.getElementById('showhere')
const item1=clonein.cloneNode(true);
const item2=clonein.cloneNode(true);
const item3=clonein.cloneNode(true);

showhere.append(item1);

showhere.append(item2);
showhere.append(item3);
const targeth=item1.querySelector('h2');
targeth.textContent="Frontend Developer";
const targetitem3=item3.querySelector('h2')
targetitem3.textContent="Hy I'm developer"
const shadowofboxs=document.querySelectorAll('.shadowdiv');

shadowofboxs.forEach(box => {
  box.addEventListener('mouseover',function(){
     box.style.boxShadow=' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  })
  box.addEventListener('mouseleave',function(){
    box.style.boxShadow='';
 })
})


// ################################## Testimonial ############################

const testimonials=document.querySelectorAll('.box');
const sliderow=document.getElementById('row');
const buttons=document.querySelectorAll('.btnind')
let currentindex=0;

function showtestimonials(index){
 testimonials.forEach(testimonial => {
   testimonial.style.transform=`translateX(-${index * 100}%)`;
 });
}

function nexttestimonial(){
  currentindex=(currentindex+1)% testimonials.length;
  showtestimonials(currentindex);
}
function updatebuttoncolor(){
  buttons.forEach((button,index) => {
    if(index===currentindex){
      button.style.backgroundColor="grey";
      button.style.width="1rem";
    }else{
      button.style.backgroundColor="black";
      button.style.width="";
    }
    });
}

  buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
     currentindex=index;
      
      showtestimonials(currentindex);
    })
  })
setInterval(()=>{
  nexttestimonial(),
  updatebuttoncolor();
},2000)


// ################################# contracts ################################

const contract=document.getElementById('contracts');
const companies=document.querySelectorAll('.companies');
let currentindexcompany=0;
let movestep=1;

function companyslide(index){
  companies.forEach(company=>{
    company.style.transform=`translateX(-${index * 100}%)`;
  })
}
function moveslide(){

    currentindexcompany=(currentindexcompany+1)%companies.length;
    companyslide(currentindexcompany);
  }

setInterval(()=>{
  moveslide();

},3000)


// ####################### top btn #####################

const topbtn=document.getElementById('topbtn');

window.addEventListener('scroll',()=>{
  if(window.scrollY>=900){
    topbtn.style.display="block";
  }else{
    topbtn.style.display="none";
  }
});

topbtn.addEventListener('click',function(){
const scrollduration=500;
const scrolstep= -window.scrollY /(scrollduration/15);

function scrollanimation(){
  if (window.scrollY!==0){
    window.scrollBy(0,scrolstep)
    requestAnimationFrame(scrollanimation);
  }
}
requestAnimationFrame(scrollanimation)
})











// ###################### About  Us Button ##############################

const requestbtn=document.getElementById('requestbtn');
requestbtn.addEventListener('click',()=>{
   requestbtn.style.backgroundColor="lightblue";
})

// ################################ Show numbers in divs #############################

const shownumber=document.querySelectorAll('.shownumber');
function typenumber(element,number){
     element.textContent=number;
 }

function typenumbers(element,end){
  var start=12250;
  let currentnumber=start;
 function typenextnumber(){
  if(currentnumber <= end){
    typenumber(element,currentnumber)
    currentnumber++;
    setTimeout(typenextnumber);
  }
 }
 typenextnumber();
}
shownumber.forEach(element=>{
  typenumbers(element,12345)
})



// const shownumbers = document.querySelectorAll('.shownumber');

//     function typeNumber(element, number) {
//       element.textContent = number;
//     }

//     function typeNumbers(element, start, end, delay) {
//       let currentNumber = start;

//       function typeNextNumber() {
//         if (currentNumber <= end) {
//           typeNumber(element, currentNumber);
//           currentNumber++;
//           setTimeout(typeNextNumber, delay);
//         }
//       }

//       typeNextNumber();
//     }

//     shownumbers.forEach(element => {
//       typeNumbers(element, 1, 12345, 5);
//     });




























// const btn=document.querySelectorAll('.btn');
// const divshover=document.querySelectorAll('.divs');
// divshover.forEach((div,index)=>{
//     div.addEventListener("mouseover",()=>{
//         btn[index].style.display="block";
       
//     })
//     div.addEventListener("mouseout",()=>{
//         btn[index].style.display="none";
//     })
 
// })


// ################################# Testimonial Slide Affect ################################

// const btns = document.getElementsByClassName("btnind");
// const slider = document.getElementById("slidewrapper");
// let slideindex = 0;
// const slidecount = 4;
// const slidewidth = 15;

// function updateSliderPosition() {
//   slider.style.transition = "transform 0.5s ease-in-out";
//   slider.style.transform = `translateX(-${slideindex * slidewidth}%)`;
//   slider.style.background='lightblue';
// }

// function nextSlide() {
//   slideindex = (slideindex + 1) % slidecount;
//   updateSliderPosition();
// }

// setInterval(nextSlide, 4000); // Auto-slide every 3 seconds

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     slideindex = i;
//     updateSliderPosition();

//    for (let j = 0; j < btns.length; j++) {
//       btns[j].classList.remove("active");
//     }
    
//     // Add the "active" class to the clicked button
//     btns[i].classList.add("active");
//   });
// }

// updateSliderPosition(); // Initial position








  



















