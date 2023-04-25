let playerState = 0;
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
})


const conn = document.getElementById('con');
const quoteDispalyElement =document.getElementById('quoteDispaly');
const nextButton = document.getElementById('next');
const audioFile= document.getElementById('audio');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

let que_count = 0;

quoteInputElement.addEventListener('input',() => {
   const arrayQuote = quoteDispalyElement.querySelectorAll('span');
   const arrayValue = quoteInputElement.value.split('');
    arrayQuote.forEach((characterSpan , index) => {
     const character = arrayValue[index];
     if(character == null){
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
    }else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }else{
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
        }
    })

    
    
})


nextButton.onclick = ()=>{
  nextButton.classList.add('hide');
  conn.classList.add('hiden');
    quoteInputElement.value='';
    startTimer();
    if(que_count < sintace[playerState].length){
        
      
    showQuestion(que_count,playerState);
    playMusic(que_count,playerState);
    que_count++; 
   
    }else{
        console.log("Question Completed");
    }
   
        
      

}

function showQuestion(index,info){
const quote = sintace[info][index].text;
quoteDispalyElement.innerHTML= '';
quote.split('').forEach(charachter => {
    const charachterSpan = document.createElement('span');
    charachterSpan.innerText=charachter;
    quoteDispalyElement.appendChild(charachterSpan);
});
}

function playMusic(index,info){
    let audio = new Audio(sintace[info][index].audio);
    audio.play()

  
}
let startTime;
function startTimer(){
    startTime = new Date();
    timerElement.innerText = 0;
  
    setInterval(()=>{
      timerElement.innerText = getTimerTime();
    if(timerElement.innerText == 40){
        nextButton.classList.remove('hide');
        
    }
    } , 1000);

  

}
 
function getTimerTime(){
 return  Math.floor((new Date() - startTime) / 1000)
}
