function on_original(){
    var M,m,i;
    m = document.getElementById("bigsoju");
    M = document.getElementById("detail_original_soju");
    i = document.getElementById("original");
    
    m.style.right = '6.5%';
    M.style.display = 'block';
    i.style.backgroundColor = 'rgba(160, 212, 104, 0.705)';
    //M.style.backgroundColor = '#ddd';
}
function out_original(){
    var M,m,i;
    m = document.getElementById("bigsoju");
    M= document.getElementById("detail_original_soju");
    i = document.getElementById("original");

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
function(){
    document.querySelector(".popup").style.display ='none';
    document.querySelector("html").style.overflow = 'auto';
})


