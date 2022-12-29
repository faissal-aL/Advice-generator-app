const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice');
const generateAdvice = document.getElementById('generate-advice');


function getApiAdvice(){
const getAdvice = fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    return data.slip;
  });

const randomAdvice = () => {
    getAdvice.then((e) =>{
        if(Number(adviceNumber.innerHTML) == e.id) getApiAdvice();
        adviceNumber.innerHTML = e.id ;
        advice.innerHTML = '"'+ e.advice + '"';
    });
};
randomAdvice();
}

generateAdvice.addEventListener("click",getApiAdvice);
