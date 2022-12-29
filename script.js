const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice');
const generateAdvice = document.getElementById('generate-advice');


function getApiAdvice(){
    console.log('button is sclicked');
const getAdvice = fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    return data.slip;
  });

const randomAdvice = () => {
    getAdvice.then((e) =>{
        adviceNumber.innerHTML = "advice #" + e.id ;
        advice.innerHTML = '"'+ e.advice + '"';
        console.log('advice is',e.id);
        console.log('advice text is',e.advice);
    });
};
randomAdvice();
}

generateAdvice.addEventListener("click",getApiAdvice);
