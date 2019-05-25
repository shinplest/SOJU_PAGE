function on_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = 'rgba(160, 212, 104, 0.705)';
}

function out_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';

}
function on_LOTTE() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_LOTTE_soju");
  i = document.getElementById("LOTTE");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = 'rgba(253, 137, 191, 0.705)';
}

function out_LOTTE() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_LOTTE_soju");
  i = document.getElementById("LOTTE");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_MUHAK() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_MUHAK_soju");
  i = document.getElementById("MUHAK");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6aa';
}

function out_MUHAK() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_MUHAK_soju");
  i = document.getElementById("MUHAK");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_kumbokju() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_kumbokju_soju");
  i = document.getElementById("kumbokju");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6ab8e';
}

function out_kumbokju() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_kumbokju_soju");
  i = document.getElementById("kumbokju");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_Bohae() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_Bohae_soju");
  i = document.getElementById("Bohae");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6aa';
}

function out_Bohae() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_Bohae_soju");
  i = document.getElementById("Bohae");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_DAESUN() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_DAESUN_soju");
  i = document.getElementById("DAESUN");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6aa';
}

function out_DAESUN() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_DAESUN_soju");
  i = document.getElementById("DAESUN");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_THEMACKISS() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_THEMACKISS_soju");
  i = document.getElementById("THEMACKISS");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6aa';
}

function out_THEMACKISS() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_THEMACKISS_soju");
  i = document.getElementById("THEMACKISS");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
  m.style.right = '0px';
  M.style.display = 'none';
}
function on_HALLASAN() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_HALLASAN_soju");
  i = document.getElementById("HALLASAN");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = '#55d6aa';
}

function out_HALLASAN() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_HALLASAN_soju");
  i = document.getElementById("HALLASAN");

  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
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


function alertfunction() {
  var year = document.getElementById("myText").value;
  if (document.getElementById("cuki").checked != true) {
    alert("쿠키정보 사용동의에 체크해주세요.");
  } else {
    if (year == "") {
      alert("출생년도를 입력하세요.");
    } else if (year > 2000) {
      alert("미성년자는 열람이 불가능합니다.");
    } else if (1900 < year && year<= 2000) {
      alert("이제부터 저희 페이지의 모든 자료를 열람하실 수 있습니다.");
      document.querySelector(".popup").style.display = 'none';
      document.querySelector("html").style.overflow = 'auto';
    } else {
      alert("잘못 입력하셨습니다. ex) 1993");
    }
  }
}