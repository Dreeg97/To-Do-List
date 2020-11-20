const listItem = document.querySelector('input');
const sendButton = document.querySelector('.send');
const clearButton = document.querySelector('.clear');

sendButton.addEventListener('click', (e) => {

    // Error
    const errorDiv = document.querySelector(".error-div");
    try{
        if(listItem.value === "") throw "Please write a task!";
    }
    catch(err){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = err;

        function hidingError(){
            errorDiv.style.display = "none";
        }
        setTimeout(hidingError, 3000);
        
        return;
    }

    const newDiv = document.createElement('div');
    const newContent = document.createTextNode(listItem.value);
    const currentDiv = document.querySelector(".ph");
    const parentDiv = document.querySelector('.list-elements');

    // Style the newDiv
    newDiv.style.margin = '0px 0px 15px 0px';
    newDiv.style.fontSize = '25px';

    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "space-between";
    
    //Adding images in the newDiv
    const checkButton = document.createElement('img');
    const editButton = document.createElement('img');
    const deleteButton = document.createElement('img');

    checkButton.src = "/icons/checked.svg";
    editButton.src = "/icons/edit.svg";
    deleteButton.src = "/icons/delete.svg";

    checkButton.style.width = "20px";
    editButton.style.width = "20px";
    deleteButton.style.width = "20px";

    checkButton.style.margin = "2.5px";
    editButton.style.margin = "2.5px";
    deleteButton.style.margin = "2.5px";

    checkButton.style.cursor = "pointer";
    editButton.style.cursor = "pointer";
    deleteButton.style.cursor = "pointer";

    // Creating a div for images
    const imgDiv = document.createElement('div');

    // Adding to HTML
    newDiv.appendChild(newContent);
    parentDiv.insertBefore(newDiv, currentDiv);
    newDiv.appendChild(imgDiv);
    imgDiv.insertAdjacentElement('afterbegin',deleteButton);
    imgDiv.insertAdjacentElement('afterbegin',editButton);
    imgDiv.insertAdjacentElement('afterbegin',checkButton);

    // Reset the value to none
    document.querySelector('input').value = "";

    // Events for each svg buttons
    checkButton.addEventListener('click', (e) => {
        e.preventDefault();
        newDiv.style.color = "rgb(161, 224, 155)";
        newDiv.style.textDecoration = "line-through";
    })

    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('input').value = newContent.nodeValue;
        newDiv.remove();
    })

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        newDiv.remove();
    })

    // Clear button
    clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        newDiv.remove();
    })
})

