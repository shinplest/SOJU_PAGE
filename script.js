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
    
    m.style.right = '100px';
    M.style.display = 'block';
    i.style.backgroundColor = '#ddd';
    M.style.backgroundColor = '#ddd';
}
function out_original(){
    var M,m;
    m = document.getElementById("bigsoju");
    M= document.getElementById("detail_original_soju");
    i = document.getElementById("original");

    i.style.backgroundColor = '#2F3339';
    m.style.right = '0px';
    M.style.display = 'none';
    
}
// /Scroll to a certain element
/*
function myFunction() {
    var elmnt = document.getElementById("kind");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}
*/

