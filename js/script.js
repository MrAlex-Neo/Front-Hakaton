let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let lang = document.querySelector('.lang');
let uz = document.querySelector('.langUz')
let usMan = document.querySelector('.userMenu')
let mWind = document.querySelector('.userMenuWindow');
let projectBtn = document.querySelectorAll('.btnClass')

projectBtn.forEach( btn => {
	btn.addEventListener('click', function () {
		let projectBtn = event.target
		document.querySelectorAll('.btnClass').forEach( btn => {
			btn.classList.remove('secondary')
		})
		projectBtn.classList.add('secondary');
	})
  })


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


lang.addEventListener('click', function(){
    uz.classList.toggle('flex');
})

usMan.addEventListener('click', function(){
	mWind.classList.toggle('none');
    mWind.classList.toggle('flex')
})


function validate(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9]|\./;
	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
  }

  // Slider

  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    snap: boolean = true,
    arrows: false,
    autoplay: true,
    interval: 5000,
    speed: 3000,
    resetProgress: boolean = true,
  } );
  splide.mount();