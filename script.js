let para = document.querySelector('p');
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');

function text(){
    let textInside = inp.value
    let result = textInside.split(" ")
    console.log(result);
    para.innerHTML = textInside
  if(result.length >3){
   let extractText = result.splice(3).join(" ");
   console.log(extractText);
    para.innerHTML = result.join(" ");
    btn.style.display = 'inline'
  btn.addEventListener('click', ()=>{
    para.innerHTML = result.join(" ") + extractText;
    btn.innerHTML = 'see less'
  })
  }
    else{
        btn.style.display = 'none'  
    }
  }
    // para.innerHTML = textInside;
