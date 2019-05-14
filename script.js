var age = prompt("만 19세 이상만 이 페이지를 볼 수 있습니다. 생년월일을 입력하세요 ", "19970701");
    if(age > 20000101)
    {
        alert("you cant");

    }
    else
    {
        alert(age);
    }

function on_original(){
    var M,m,i;
    m = document.getElementById("bigsoju");
    M = document.getElementById("detail_original_soju");
    i = document.getElementById("original");
    
    m.style.right = '6%';
    M.style.display = 'block';
    i.style.backgroundColor = '#A0D468';
    //M.style.backgroundColor = '#ddd';
}
function out_original(){
    var M,m,i;
    m = document.getElementById("bigsoju");
    M= document.getElementById("detail_original_soju");
    i = document.getElementById("original");

    i.style.backgroundColor = '#2F3339';
    m.style.right = '0px';
    M.style.display = 'none';
    
}
//스크롤 펑션 안넣고 진로페이지처럼 해봄
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

// /Scroll to a certain element
/*
function myFunction() {
    var elmnt = document.getElementById("kind");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}
*/

