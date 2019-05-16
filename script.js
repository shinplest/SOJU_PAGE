function on_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = 'rgba(160, 212, 104, 0.705)';
  //M.style.backgroundColor = '#ddd';
}

function out_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0.137)';
  m.style.right = '0px';
  M.style.display = 'none';

}
/*
window.addEventListener('scroll', function() {
    var el = document.querySelector('.show-on-scroll');
    
    if(window.scrollY >= 300) el.classList.add('shown');
    else el.classList.remove('shown');
  }); //300px 스크롤하면 보이게 

window.addEventListener('scroll', function() {
    var el = document.querySelector('.show-on-5px');
    
    if(window.scrollY >= 5) el.classList.add('shown');
    else el.classList.remove('shown');
  }); //5x 스크롤하면 보이게 

*/
document.querySelector('.xbutton').addEventListener('click',
  function () {
    document.querySelector(".popup").style.display = 'none';
    document.querySelector("html").style.overflow = 'auto';
  })

  /*document.querySelector('.submit').addEventListener('click',
  function () {
    document.querySelector(".popup").style.display = 'none';
    document.querySelector("html").style.overflow = 'auto';
  })*/

function myFunction() {
  if (document.getElementById("myText").value <= 20) {
    alert("You cant");
  } else if (document.getElementById("myText").value > 20) {
    alert("이제부터 저희 페이지의 모든 자료를 열람하실 수 있습니다.");
    document.querySelector(".popup").style.display = 'none';
    document.querySelector("html").style.overflow = 'auto';
  } else {
    alert("잘못 입력하셨습니다.")
  }
}