let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let lang = document.querySelector('.lang');
let uz = document.querySelector('.langUz')

lang.addEventListener('click', function(){
    uz.classList.toggle('flex');
})


// let activePrimary = document.querySelectorAll('.regPrime')
// activePrimary.addEventListenerAll('click', function(){
//   activePrimary.classList.add('activePrimary')
//   activePrimary.classList.toggle('activePrimary')
// })

let usMan = document.querySelector('.userMenu')
let mWind = document.querySelector('.userMenuWindow');

usMan.addEventListener('click', function(){
	mWind.classList.toggle('none');
    mWind.classList.toggle('flex')
})