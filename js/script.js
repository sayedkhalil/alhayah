let h2 = document.getElementById("q");
let btn = document.getElementById("btn");
let min = document.getElementById("mi");
let anss = "ans";
let content = document.getElementById("content");
let result = 0;
let indexx = 0;
let iner;
let duration = 90;

    let dataq =[{"title":" من العشرة المبشرين بالجنة","ans1":"خالد بن الوليد","ans2":"عمرو بن العاص","ans3":"أنس بن مالك","ans4":"أبو بكر الصديق","ans":"أبو بكر الصديق"},
    {"title":"أصغر رقم زوجي","ans1":"1","ans2":"2","ans3":"3","ans4":"4","ans":"2"},
    {"title":"في الجهاز الهضمي","ans1":"الرئة","ans2":"القرنية","ans3":"القلب","ans4":"المعدة","ans":"المعدة"},
    {"title":"تقع في غرب المملكة","ans1":"جدة","ans2":"الرياض","ans3":"القصيم","ans4":"الدمام","ans":"جدة"},
    {"title":"فعل أمر","ans1":"يأكل","ans2":"نأكل","ans3":"أكل","ans4":"كل","ans":"كل"},
    {"title":"أكبر رقم فردي مكون من رقمين","ans1":"98","ans2":"100","ans3":"99","ans4":"101","ans":"99"}]
   
    findq(dataq);
    level();
    timer(dataq);

function findq(obj) {
  let curent;
  curent = Math.floor(Math.random() * obj.length);
  h2.innerText = obj[curent].title;
  for (let index = 1; index < 5; index++) {
    var oin = anss + index;
    let span = document.createElement("span");
    let input = document.createElement("input");
    input.id = input.type = "radio";
    input.name = "answer";
    input.dataset.answer = obj[curent][oin];
    let label = document.createElement("label");
    label.htmlFor = `ans${index}`;
    label.innerText = obj[curent][oin];
    span.appendChild(input);
    span.appendChild(label);
    content.appendChild(span);
    btn.onclick = () => {
      duration = 90;
      indexx = indexx + 1;
      if (indexx >= 5) {
        clearItemes();
        clearInterval(iner);
        min.innerText = "انتهت المسابقة";
        h2.innerText = "مسابقة من سيربح البالون";
        content.innerText = `لقد حصلت على  ${result}من  5`;
        btn.style.cursor = "none";
      }
      level();
      let inp = Array.from(document.getElementsByTagName("input"));
      for (let index = 0; index < inp.length; index++) {
        if (inp[index].checked) {
          if (inp[index].dataset.answer == obj[curent].ans) {
            result = result + 1;
            clearItemes();
            findq(obj);
          } else {
            clearItemes();
            findq(obj);
          }
        } else {
          clearItemes();
          findq(obj);
        }
      }
    };
  }
}
function clearItemes() {
  h2.innerText = "";
  content.innerHTML = "";
}
function level() {
  let le = Array.from(document.querySelectorAll("#level span"));
  le[indexx].classList.add("act");
}
function timer(obj) {
  iner = setInterval(function () {
    let m = Math.floor(duration / 60);
    let s = duration % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    min.innerText = `باقي ${m}:${s}`;
    if (duration !== 0) {
      duration = duration - 1;
    } else {
      if (indexx < 6) {
        duration = 150;
        indexx = indexx + 1;
        level();
        clearItemes();
        findq(obj);
      } else {
        clearItemes();
        clearInterval(iner);
        min.innerText = "انتهت المسابقة";
        h2.innerText = "مسابقة بنك المعرفة";
        content.innerText = `لقد حصلت على  ${result}من  5`;
        btn.style.cursor = "none";
      }
    }
  }, 1000);
}
