const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const two = ele => document.querySelector(ele)
const slide1 = _ => {
  const wrap = one('#distilled') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  const chRadio = document.getElementsByName("pos");
  const radidlen = chRadio.length;
  const checkedRadio = chRadio.checked;
  var i = 0,
    count = 0,
    k = 0,
    alloc;
  let pos;

  chRadio[0].onclick = function Radio() {
    pos = 0;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[1].onclick = function Radio() {
    pos = 1;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[2].onclick = function Radio() {
    pos = 2;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[3].onclick = function Radio() {
    pos = 3;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[4].onclick = function Radio() {
    pos = 4;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[5].onclick = function Radio() {
    pos = 5;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[6].onclick = function Radio() {
    pos = 6;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[7].onclick = function Radio() {
    pos = 7;
    target.style.marginLeft = `${-pos * 100}%`
  }

  if (chRadio[0].checked == true) checkingRadio(0);
  if (chRadio[1].checked == true) checkingRadio(1);
  if (chRadio[2].checked == true) checkingRadio(2);
  if (chRadio[3].checked == true) checkingRadio(3);
  if (chRadio[4].checked == true) checkingRadio(4);
  if (chRadio[5].checked == true) checkingRadio(5);
  if (chRadio[6].checked == true) checkingRadio(6);
  if (chRadio[7].checked == true) checkingRadio(7);

  function checkingRadio(i) {
    pos = i;
    alloc = setInterval(() => {
      target.style.marginLeft = `${-pos * 100}%`
      chRadio[pos].checked = true;
      pos = (pos + 1) % len // 장면 선택
    }, 2000)
  }
  // .slide ul의 너비 조정
  target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`
  // .slide li의 너비 조정
  Array.from(target.children)
    .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
  // 화면 전환 실행

}
window.onload = function () {
  slide1();
  slide2();
}

const slide2 = _ => {
  const wrap = two('#diluted') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  const chRadio = document.getElementsByName("POS");
  const radidlen = chRadio.length;
  const checkedRadio = chRadio.checked;
  var i = 0,
    count = 0,
    k = 0,
    alloc;
  let pos;

  chRadio[0].onclick = function Radio() {
    pos = 0;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[1].onclick = function Radio() {
    pos = 1;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[2].onclick = function Radio() {
    pos = 2;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[3].onclick = function Radio() {
    pos = 3;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[4].onclick = function Radio() {
    pos = 4;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[5].onclick = function Radio() {
    pos = 5;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[6].onclick = function Radio() {
    pos = 6;
    target.style.marginLeft = `${-pos * 100}%`
  }
  chRadio[7].onclick = function Radio() {
    pos = 7;
    target.style.marginLeft = `${-pos * 100}%`
  }

  if (chRadio[0].checked == true) checkingRadio(0);
  if (chRadio[1].checked == true) checkingRadio(1);
  if (chRadio[2].checked == true) checkingRadio(2);
  if (chRadio[3].checked == true) checkingRadio(3);
  if (chRadio[4].checked == true) checkingRadio(4);
  if (chRadio[5].checked == true) checkingRadio(5);
  if (chRadio[6].checked == true) checkingRadio(6);
  if (chRadio[7].checked == true) checkingRadio(7);

  function checkingRadio(i) {
    pos = i;
    alloc = setInterval(() => {
      target.style.marginLeft = `${-pos * 100}%`
      chRadio[pos].checked = true;
      pos = (pos + 1) % len // 장면 선택
    }, 2000)
  }
  // .slide ul의 너비 조정
  target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`
  // .slide li의 너비 조정
  Array.from(target.children)
    .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
  // 화면 전환 실행

}

function on_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  m.style.right = '6.5%';
  M.style.display = 'block';
  i.style.backgroundColor = 'rgba(47, 51, 57, 0.9)';
}

function out_hite() {
  var M, m, i;
  m = document.getElementById("bigsoju");
  M = document.getElementById("detail_hite_soju");
  i = document.getElementById("hite");

  i.style.backgroundColor = '#31313100';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0.9)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0.9)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0.9)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
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
  i.style.backgroundColor = 'rgba(47, 51, 57, 0)';
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

window.addEventListener('scroll', function() {
    var el = document.querySelector('.show-on-scroll');
    
    if(window.scrollY >= 300) el.classList.add('shown');
    else el.classList.remove('shown');
  }); //300px 스크롤하면 보이게 
/*
window.addEventListener('scroll', function() {
    var el = document.querySelector('.show-on-5px');
    
    if(window.scrollY >= 5) el.classList.add('shown');
    else el.classList.remove('shown');
  }); //5x 스크롤하면 보이게 

*/
var c = 0;

function pop() {
  if (c == 0) {
    document.getElementById("alertpopup").style.display = "block";
    c = 1;
  } else {
    document.getElementById("alertpopup").style.display = "none";
    c = 0;
  }
}

var allow = 0;

function allowview() {
  if (allow == 1) {
    document.querySelector(".popup").style.display = 'none';
    document.querySelector("html").style.overflow = 'auto';
  }
}

function alertfunction() {
  var year = document.getElementById("myText").value;
  if (document.getElementById("cuki").checked != true) {
    alert("쿠키정보 사용동의에 체크해주세요.");
  } else {
    if (year == "") {
      alert("출생년도를 입력하세요.");
    } else if (year > 2000) {
      document.getElementById("checkimg").src = "./img/multiply.png"
      document.getElementById("inside").innerHTML = "미성년자는 페이지 열람이 불가합니다."
      pop();
    } else if (1900 < year && year <= 2000) {
      allow = 1;
      document.getElementById("checkimg").src = "./img/checked.png"
      document.getElementById("inside").innerHTML = "이제 부터 홈페이지의<br>모든 자료를 열람하실 수 있습니다."
      pop();
    } else {
      document.getElementById("checkimg").src = "./img/multiply.png"
      document.getElementById("inside").innerHTML = "잘못 입력하셨습니다. ex) 1993"
      pop();
    }
  }
}
var Cnt = 0;

function popupdetail() {
  if (Cnt == 0) {
    document.getElementById("deatil").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail1() {
  if (Cnt == 0) {
    document.getElementById("deatil1").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop1").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil1").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop1").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail2() {
  if (Cnt == 0) {
    document.getElementById("deatil2").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop2").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil2").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop2").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail3() {
  if (Cnt == 0) {
    document.getElementById("deatil3").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop3").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil3").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop3").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail4() {
  if (Cnt == 0) {
    document.getElementById("deatil4").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop4").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil4").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop4").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail5() {
  if (Cnt == 0) {
    document.getElementById("deatil5").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop5").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil5").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop5").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail6() {
  if (Cnt == 0) {
    document.getElementById("deatil6").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop6").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil6").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop6").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail17() {
  if (Cnt == 0) {
    document.getElementById("deatil7").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop7").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil7").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop7").style.display = 'none';
    Cnt = 0;
  }
}

function popupdetail8() {
  if (Cnt == 0) {
    document.getElementById("deatil8").style.display = "block";
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector(".poppop8").style.display = 'block';
    Cnt = 1;
  } else {
    document.getElementById("deatil8").style.display = "none";
    document.querySelector("html").style.overflow = 'auto';
    document.querySelector(".poppop8").style.display = 'none';
    Cnt = 0;
  }
}
function calla1(){
document.getElementById("a1").style.display="inline";
}