
const container= document.querySelector('.container');
const button = document.querySelector('button');
let square;

   for (i=0;i<256;i++){
        
        square=document.createElement(`div`);
        square.classList.add('div');
        container.appendChild(square);
       
    } 

const divs= document.querySelectorAll(".div");

divs.forEach( (div) =>
{     div.count = 0;
   
       div.addEventListener('mouseover', (e) => 
    { 
        let selectColor= document.querySelector('#color').value;

        let color=document.querySelector('#color');
        color.addEventListener ('change', ()=> {e.target.count =0 ;});
        
        e.target.style.backgroundColor = `${selectColor}`;
       e.target.count += 0.5;
       e.target.style.opacity = 0.2 * e.target.count;
        
       
        
    });
});



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
    }


        const divs= document.querySelectorAll(".div");
        divs.forEach( (div) =>
{     div.count = 0;

    div.addEventListener('mouseover', (e) => 
    { let selectColor= document.querySelector('#color').value;
    

        let color=document.querySelector('#color');
        color.addEventListener ('change', ()=> {e.target.count =0 ;});
        e.target.style.backgroundColor = `${selectColor}`;
       e.target.count += 0.5;
       e.target.style.opacity = 0.2 * e.target.count;
        
       
        
    });
});
      
        
    } ;
function listenForChange(){

}