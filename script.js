
const container= document.querySelector('.container');
let square;
   for (i=0;i<256;i++){
        
        square=document.createElement(`div`);
        square.classList.add('div');
        container.appendChild(square);
       
    } 

const divs= document.querySelectorAll(".div");

divs.forEach( (div) =>
{ 
    div.addEventListener('mouseover', () => 
    { 
       
        div.style.cssText = `background-color: rgb( ${Math.random()*219+16},${Math.random()*219+16} ,${Math.random()*219+16} );`;
       console.log(div.target);
        
    });
});


const button = document.querySelector('button');
button.onclick= () => {
    const allDivs= document.querySelectorAll('.div');
    const number =prompt("how large do u want your grid ? from 1 to 100");
    if (number>=100 || number<=0){alert("number higher than 100 or lower than 1, please eneter correct number ");return };
    allDivs.forEach ( (divs)=> { divs.remove();} );
    container.style.cssText=`grid-template-columns: repeat(${number}, 1fr);grid-template-rows: repeat(${number}, 1fr);`;
    for (i=0;i<(number*number);i++){
        
        square=document.createElement(`div`);
        square.classList.add('div');
        container.appendChild(square);
       


        const divs= document.querySelectorAll(".div");
        divs.forEach( (div) =>{ div.addEventListener('mouseover', () => { div.classList.add("display");});}  )
      
        
    } 
    
};
function ChangeRGB()  {
    let Rgb = document.querySelector('.div');
    let getRgbValue= getComputedStyle(Rgb).getPropertyValue('background-color');
    console.log(getRgbValue);
    }
    ChangeRGB();