const listItem = document.querySelector('input');
const sendButton = document.querySelector('.send');
const clearButton = document.querySelector('.clear');

sendButton.addEventListener('click', (e) => {

    const newDiv = document.createElement('div');
    const newContent = document.createTextNode(listItem.value);
    const currentDiv = document.querySelector(".icons");
    const parentDiv = document.querySelector('.container');

    // Style the newDiv
    newDiv.style.margin = '0px 0px 15px 0px';
    newDiv.style.fontSize = '25px';
    
    //Adding images in the newDiv
    const checkButton = document.createElement('img');
    const exitButton = document.createElement('img');
    const clearButton = document.createElement('img');

    checkButton.src = "/icons/checked.svg";



    // Adding to HTML
    newDiv.appendChild(newContent);
    parentDiv.insertBefore(newDiv, currentDiv);
    newDiv.insertBefore()

    // Reset the value to none
    document.querySelector('input').value = "";
})

