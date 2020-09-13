
document.querySelector('.home-div').style.display='block';
document.querySelector('.about-div').style.display='none';
document.querySelector('.team-div').style.display='none';
document.querySelector('.anton-div').style.display='none';  

document.querySelector('#lgn1').style.display='block';
document.querySelector('#snup1').style.display='none';

document.querySelector('.v1').style.display='none';
document.querySelector('.v2').style.display='block';

document.querySelector('#hlines').addEventListener('click',function(){
    document.querySelector('#home').style.display='block';
    document.querySelector('#team').style.display='block';
    document.querySelector('#ant').style.display='block';
    document.querySelector('#about').style.display='block';
    document.querySelector('#loginbtn').style.display='none';
    document.querySelector('#hlines').style.display='none';
    document.querySelector('#close').style.display='block';
});

document.querySelector('#sbtn').addEventListener('click',function(){
    alert('Your Application is Submitted.We will notify you when application is Aproved!');
});

document.querySelector('#close').addEventListener('click',function(){
    document.querySelector('#home').style.display='none';
    document.querySelector('#team').style.display='none';
    document.querySelector('#ant').style.display='none';
    document.querySelector('#about').style.display='none';
    document.querySelector('#loginbtn').style.display='none';
    document.querySelector('#hlines').style.display='block';
    document.querySelector('#close').style.display='none';
});



document.querySelector('#Login').classList.add('Active');
document.querySelector('#SignUp').classList.remove('Active');

document.querySelector('#Login').addEventListener('click',function(){
    document.querySelector('#Login').classList.add('Active');
    document.querySelector('#SignUp').classList.remove('Active');
    document.querySelector('#lgn1').style.display='block';
    document.querySelector('#snup1').style.display='none';
});
document.querySelector('#Login1').addEventListener('click',function(){
    document.querySelector('#Login').classList.add('Active');
    document.querySelector('#SignUp').classList.remove('Active');
    document.querySelector('#lgn').style.display='block';
    document.querySelector('#snup').style.display='none';
    document.querySelector('#lgn1').style.display='block';
    document.querySelector('#snup1').style.display='none';
});
document.querySelector('#SignUp').addEventListener('click',function(){
    document.querySelector('#SignUp').classList.add('Active');
    document.querySelector('#Login').classList.remove('Active');
    document.querySelector('#lgn1').style.display='none';
document.querySelector('#snup1').style.display='block';
});
document.querySelector('#SignUp1').addEventListener('click',function(){
    document.querySelector('#SignUp').classList.add('Active');
    document.querySelector('#Login').classList.remove('Active');
    document.querySelector('#lgn').style.display='none';
    document.querySelector('#snup').style.display='block';
    document.querySelector('#lgn1').style.display='none';
    document.querySelector('#snup1').style.display='block';
});

document.querySelector('#home').addEventListener('click',function(){
   
    document.querySelector('.team-div').style.display='none';
    document.querySelector('.anton-div').style.display='none';
    document.querySelector('.about-div').style.display='none';
    document.querySelector('.home-div').style.display='block';
    document.querySelector('#team').classList.remove('active');
    home.classList.add('active');
    ant.classList.remove('active');
    document.querySelector('#about').classList.remove('active');
    document.querySelector('.v1').style.display='none';
    document.querySelector('.v2').style.display='block';

});



document.querySelector('#team').addEventListener('click',function(){
   
    document.querySelector('.team-div').style.display='block';
    document.querySelector('.anton-div').style.display='none';
    document.querySelector('.about-div').style.display='none';
    document.querySelector('.home-div').style.display='none';
    document.querySelector('#team').classList.add('active');
    home.classList.remove('active');
    ant.classList.remove('active');
    document.querySelector('#about').classList.remove('active');
    document.querySelector('.v1').style.display='block';
    document.querySelector('.v2').style.display='none';

});

document.querySelector('#ant').addEventListener('click',function(){
    
    document.querySelector('.anton-div').style.display='block';
    document.querySelector('.team-div').style.display='none';
    document.querySelector('.about-div').style.display='none';
    document.querySelector('.home-div').style.display='none';
    document.querySelector('#team').classList.add('active');
    home.classList.remove('active');
    ant.classList.remove('active');
    document.querySelector('#about').classList.remove('active');
    document.querySelector('.v1').style.display='block';
    document.querySelector('.v2').style.display='none';

});


document.querySelector('#about').addEventListener('click',function(){
    document.querySelector('.about-div').style.display='block';
    document.querySelector('.team-div').style.display='none';
    document.querySelector('.anton-div').style.display='none';
    document.querySelector('.home-div').style.display='none';
    document.querySelector('#team').classList.remove('active');
    home.classList.remove('active');
    ant.classList.remove('active');
    document.querySelector('#about').classList.add('active');
    document.querySelector('.v2').style.display='none';
    document.querySelector('.v1').style.display='block';
});


var home = document.querySelector('#home');
var ant = document.querySelector('#ant');

home.addEventListener('click',function(){
    home.classList.add('active');
    ant.classList.remove('active');
    document.querySelector('#team').classList.remove('active');
    document.querySelector('#about').classList.remove('active');
});


ant.addEventListener('click',function(){
    home.classList.remove('active');
    ant.classList.add('active');
    document.querySelector('#team').classList.remove('active');
    document.querySelector('#about').classList.remove('active');
});



document.querySelector('#lgn').style.display='block';
document.querySelector('#snup').style.display='none';

document.querySelector('#Login').addEventListener('click',function(){
    
    document.querySelector('#lgn').style.display='block';
    document.querySelector('#snup').style.display='none';

});


document.querySelector('#SignUp').addEventListener('click',function(){
    document.querySelector('#lgn').style.display='none';
    document.querySelector('#snup').style.display='block';

});




function change(x) {
    x.style.display = "none";
    x.textContent="Hi there This is my website";
  }
  
  function normal(x) {
    var y=x.textContent;
    y="";
    x.textContent=y;
    x.style.display = "block";
    
  }

  

  var textWrapper = document.querySelector('.my');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.my .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });
