var age = prompt("만 19세 이상만 이 페이지를 볼 수 있습니다. 생년월일을 입력하세요 ", "19970701");
    if(age > 20000101)
    {
        alert("you cant");

    }
    else
    {
        alert(age);
    }

function mover(){
    var M;
    M= document.getElementById("detail_original_soju");
    M.style.display = 'block';
}
function mount(){
    var M;
    M= document.getElementById("detail_original_soju");
    M.style.display = 'none';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});