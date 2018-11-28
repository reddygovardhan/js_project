//const para = document.querySelector('p');
//
//para.addEventListener('click', updateName);
//
//function updateName(){
//    let name = prompt('Enter Your Name');
//    para.textContent = 'Player Name : ' + name;
//}

/*
document.addEventListener("DOMContent Loaded",function(){
    function createParagraph(){
        let para = document.createElement('p');
        para.textContent = "You clicked the button";
        document.body.appendChild(para);
    }
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', createParagraph);
    }
});
*/

    function createParagraph(){
        let para = document.createElement('p');
        para.textContent = "You clicked the button";
        document.body.appendChild(para);
    }
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', createParagraph);
    }