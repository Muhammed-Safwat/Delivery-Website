'use strict'

let changeTheme  = document.querySelector('.change-thems');
let menu  = document.querySelector('.menu .list');
let showMenu  = document.querySelector('.grid');

const updateLocalStorge = function(theme){
  localStorage.setItem('theme' , theme);
}

const displayTheme = function(){
  if(localStorage.getItem("theme")==='dark'){
     document.body.classList.add("dark-theme");
     changeTheme.querySelector('.circle').classList.add("dark");
     changeTheme.querySelector('.circle').dataset.theme = 'dark';
    }else{
      document.body.classList.remove("dark-theme");
      changeTheme.querySelector('.circle').classList.remove("dark");
      changeTheme.querySelector('.circle').dataset.theme = 'light';
     } 
  ;
}

displayTheme();

showMenu.addEventListener('click' , ()=>{
  menu.classList.toggle("show-menu");
});

changeTheme.addEventListener('click' , ()=>{
  
  if(changeTheme.querySelector('.circle').dataset.theme === 'light'){   
    updateLocalStorge('dark');
    displayTheme();  
  }else{
    updateLocalStorge('light');
    displayTheme(); 
  }
});


/** sticky header  */

let header  = document.querySelector(".header");
let homepage  = document.querySelector(".homepage");
// console.log(header);
// console.log(homepage);

let stickyNav = function(entries){
  const [entry] = entries;
  // console.log(entry);
  if(entry.isIntersecting ) {
    header.classList.remove('sticky-header');
    homepage.classList.remove('scroll');  
  }
  else{
    header.classList.add('sticky-header');
    homepage.classList.add('scroll'); 
  }
}
let headerObserver = new IntersectionObserver(stickyNav , {
  root: null,
  threshold: 0.2,
  rootMargin:"-150px"
});

headerObserver.observe(homepage );


/// section active 
const links = document.querySelectorAll('.item'); 
const allSections = document.querySelectorAll('section');
console.log(allSections);
let sectionScroll = function(entries){
  const [entry] = entries ;
 // console.log(entry);
  
  const d = document.querySelector(`[data-section='${entry.target.id}']`);
  links.forEach((el) =>{
    el.classList.remove("active");
  });
  d.classList.add("active"); 
  
  console.log(entry.target);
}

let sectionObserver = new IntersectionObserver(sectionScroll , {
  root : null , 
  threshold:.3 ,
  rootMargin:`-200px`,
});

allSections.forEach((el) => {
  sectionObserver.observe(el);
});
/*
const allSections = document.querySelectorAll('section');
const links = document.querySelectorAll('.item'); 
const el = document.querySelector("[data-section='about']");
console.log(el);
window.addEventListener('scroll', ()=>{
  
    allSections.forEach((el) => {
      console.log( el.getBoundingClientRect() );
      if(+el.getBoundingClientRect().top < window.scrollY &&  el.getBoundingClientRect().bottom +100>window.scrollY ){
        
        const d = document.querySelector(`[data-section='${el.id}']`);
        links.forEach((el) =>{
          el.classList.remove("active");
        });
        d.classList.add("active"); 
      } 
    })
  });*/


// localStorage.setItem('id' , "safwat");
// console.log(localStorage.getItem('id'));

