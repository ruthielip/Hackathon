let codingBox = document.getElementsByClassName("coding-box")[0];
let firstBox = document.getElementsByClassName("first-box")[0];
let firstInput = document.getElementsByClassName("input")[0];
let firstButton = document.getElementsByClassName("run")[0];

let firstSection = document.getElementById("one");
let secondSection = document.getElementById("two");

firstButton.addEventListener("click", showInput);

// section 1(console):
function showInput(event){
    if(firstInput.value.length === 0){
        alert("Don't forget to insert your name!")
    } else {
	let nameInput = document.createElement("p");
	let nameInputText = document.createTextNode(`Hello ${firstInput.value}!`);
	nameInput.appendChild(nameInputText)
	codingBox.appendChild(nameInput);
    nameInput.classList.add("result");

    let oneButton = document.createElement("button");
    let oneButtonText = document.createTextNode("Next");
    oneButton.appendChild(oneButtonText);
    codingBox.appendChild(oneButton)
    oneButton.classList.add("run")

    oneButton.addEventListener("click", function(){
    	firstSection.style.display = "none";
    	oneButton.style.display = "none";
    	nameInput.style.display = "none";
    	secondSection.style.display = "block";
    })
    firstButton.removeEventListener("click", showInput)
}
}

// section 2(alert):
let thirdSection = document.getElementById("three");
let secondInput = document.getElementsByClassName("input")[1];
let secondButton = document.getElementsByClassName("run")[1];
secondButton.addEventListener("click", alertBox)


function alertBox(event){
    if(secondInput.value.length === 0){
        alert("Don't forget to insert your name!")
    } else {
	alert(`Hello ${secondInput.value}!`)
    secondSection.style.display = "none";
    thirdSection.style.display = "block";
 }
}

// section 3(variables):
let fourthSection = document.getElementById("four"); 
let thirdButton = document.getElementsByClassName("run")[2];
thirdButton.addEventListener("click", function(){
    thirdSection.style.display = "none";
    fourthSection.style.display = "block";
})

// section 4(strings):
let fifthSection = document.getElementById("five");
let radioTrueOne = document.getElementById("string-correct");
let fourthButton = document.getElementsByClassName("run")[3];

fourthButton.addEventListener("click", function(){
    if(radioTrueOne.checked){
        alert("Correct!")
        fourthSection.style.display = "none";
        fifthSection.style.display = "block";
    } else {
        alert("Wrong! Try again")
    }
})

// section 5(numbers):
let sixthSection = document.getElementById("six");
let radioTrueTwo = document.getElementById("number-correct");
let fifthButton = document.getElementsByClassName("run")[4];

fifthButton.addEventListener("click", function(){
    if(radioTrueTwo.checked){
        alert("Correct!")
        fifthSection.style.display = "none";
        sixthSection.style.display = "block";
    } else {
        alert("Wrong! Try again")
    }
})

// section 6(booleans):
let seventhSection = document.getElementById("seven");
let radioTrueThree = document.getElementById("boolean-correct");
let sixthButton = document.getElementsByClassName("run")[5];

sixthButton.addEventListener("click", function(){
    if(radioTrueThree.checked){
        alert("Correct!")
        sixthSection.style.display = "none";
        seventhSection.style.display = "block";
    } else {
        alert("Wrong! Try again")
    }
})

// section 7(operators):
let eighthSection = document.getElementById("eight");
let seventhButton = document.getElementsByClassName("run")[6];
seventhButton.addEventListener("click", function(){
    seventhSection.style.display = "none";
    eighthSection.style.display = "block";
})

// section 8(arithmetic operators drag and drop)
let itemTen = document.getElementById("item-ten");
let itemTwo = document.getElementById("item-two");
let itemFive = document.getElementById("item-five");

itemTen.addEventListener("dragstart", startDragging);
itemTwo.addEventListener("dragstart", startDragging);
itemFive.addEventListener("dragstart", startDragging);

function startDragging(event){
    event.target.classList.add("startDragging");
    event.dataTransfer.setData("text/plain",event.target.id)
}

let dropZone = document.getElementById("dropzone");

dropZone.addEventListener("dragover", dragOver);
dropZone.addEventListener("drop", drop);

function dragOver(event) {``
    event.preventDefault();
}

let elementNode;

function drop(event){
    event.preventDefault();

    let elementDrop = event.dataTransfer.getData("text/plain");
    elementNode = document.getElementById(elementDrop);
    event.target.appendChild(elementNode);
}

let ninthSection = document.getElementById("nine");
let eigthButton = document.getElementsByClassName("run")[7];
    eigthButton.addEventListener("click", function(){
    if(elementNode === itemFive){
        alert("Good job!");
        eighthSection.style.display = "none";
        ninthSection.style.display = "block";
    } else {
        alert("Wrong! try again")
        elementNode.remove()
    }
})

// section 9 (comparisons):
let tenthSection = document.getElementById("ten");
let ninthButton = document.getElementsByClassName("run")[8];
ninthButton.addEventListener("click", function(){
    ninthSection.style.display = "none";
    tenthSection.style.display = "block";
})

// section 10 (comparisons 2):
let compOne = document.getElementById("comp-one");
let compTwo = document.getElementById("comp-two");
let tenthButton = document.getElementsByClassName("run")[9];

tenthButton.addEventListener("click", comparisonCheck)
let codingBoxTen = document.getElementsByClassName("coding-box")[9];
let eleventhSection = document.getElementById("eleven");

function comparisonCheck(event){

    if(compOne.value.length === 0 || compTwo.value.length === 0){
        alert("Please enter two numbers")
        return;

    } else if(parseFloat(compOne.value) <= parseFloat(compTwo.value)){
        compOne.value="";
        compTwo.value="";
        let outcomeTrue = document.createElement("p");
        let outcomeTrueText = document.createTextNode("true");
        outcomeTrue.appendChild(outcomeTrueText);
        codingBoxTen.appendChild(outcomeTrue)
        outcomeTrue.classList.add("result");

    } else {
        compOne.value="";
        compTwo.value="";
        let outcomeFalse = document.createElement("p");
        let outcomeFalseText = document.createTextNode("false");
        outcomeFalse.appendChild(outcomeFalseText);
        codingBoxTen.appendChild(outcomeFalse)
        outcomeFalse.classList.add("result");
    }
}

tenthButton.addEventListener("click", nextButton)

function nextButton(){
    let outcomeButton = document.createElement("button")
    let outcomeButtonText = document.createTextNode("Next");
    outcomeButton.appendChild(outcomeButtonText);
    codingBoxTen.appendChild(outcomeButton)
    outcomeButton.classList.add("run")
    tenthButton.removeEventListener("click", nextButton)
    outcomeButton.classList.add("next")

    outcomeButton.addEventListener("click", function(){
        tenthSection.style.display = "none";
        eleventhSection.style.display = "block";
    })
}

// section 11 (arrays):
let sectionTwelve = document.getElementById("twelve");
buttonEleven = document.getElementsByClassName("run")[10];
buttonEleven.addEventListener("click", function(){
    eleventhSection.style.display = "none";
    sectionTwelve.style.display = "block";
})

// section 12 (push method):
sectionThirteen = document.getElementById("thirteen");
pushInput = document.getElementsByClassName("push")[0];
buttonTwelve = document.getElementsByClassName("run")[11];
let codingBoxTwelve = document.getElementsByClassName("coding-box")[11];
let arrayList = document.getElementsByClassName("array-list")[0];

let newItem = document.getElementById("new-item");

buttonTwelve.addEventListener("click", function(){
    newItem.innerHTML = newItem.innerHTML + pushInput.value; 
    arrayList.style.display = "block";

    let pushButton = document.createElement("button");
    let pushButtonText = document.createTextNode("Next");
    pushButton.appendChild(pushButtonText);
    codingBoxTwelve.appendChild(pushButton);
    pushButton.classList.add("run");

    pushButton.addEventListener("click", function(){
        sectionTwelve.style.display = "none";
        sectionThirteen.style.display = "block";
    })
    
    this.removeEventListener('click', arguments.callee);
})

// section 13 (pop method):
sectionFourteen = document.getElementById("fourteen");
buttonThirteen = document.getElementsByClassName("run")[12];
popArray = document.getElementsByClassName("pop")[0];
let codingBoxThirteen = document.getElementsByClassName("coding-box")[12];

buttonThirteen.addEventListener("click", function(){
    popArray.style.display = "block";

    let popButton = document.createElement("button");
    let popButtonText = document.createTextNode("Next");
    popButton.appendChild(popButtonText);
    codingBoxThirteen.appendChild(popButton);
    popButton.classList.add("run");

    popButton.addEventListener("click", function(){
        sectionThirteen.style.display = "none";
        sectionFourteen.style.display = "block";
    })
    
    this.removeEventListener('click', arguments.callee);
})

// section 14 (Array find element by index number):
sectionEnd = document.getElementById("end");
buttonFourteen = document.getElementsByClassName("run")[13];
indexInput = document.getElementsByClassName("fruit")[0];
let codingBoxFourteen = document.getElementsByClassName("coding-box")[13];
let arrayElement = document.getElementById("array-element");

buttonFourteen.addEventListener("click", function(){
    let fruitIndex = document.createElement("p");
    let fruitIndexText;

    if(indexInput.value === "0") {
        fruitIndexText = document.createTextNode(`apple`);
    } else if (indexInput.value === "1") {
        fruitIndexText = document.createTextNode(`banana`);
    } else if (indexInput.value === "2") {
        fruitIndexText = document.createTextNode(`mango`);
    } else if (indexInput.value === "3") {
        fruitIndexText = document.createTextNode(`kiwi`);
    } else if (indexInput.value === "4") {
        fruitIndexText = document.createTextNode(`melon`);
    } else {
        fruitIndexText = document.createTextNode(`undefined`);
    }
    indexInput.value="";

    fruitIndex.appendChild(fruitIndexText);
    codingBoxFourteen.appendChild(fruitIndex)
    fruitIndex.classList.add("result");
})

buttonFourteen.addEventListener("click", nextButtonTwo)

function nextButtonTwo(){
    let outcomeButton = document.createElement("button")
    let outcomeButtonText = document.createTextNode("Next");
    outcomeButton.appendChild(outcomeButtonText);
    codingBoxFourteen.appendChild(outcomeButton)
    outcomeButton.classList.add("run")
    buttonFourteen.removeEventListener("click", nextButton)
    outcomeButton.classList.add("next")

    outcomeButton.addEventListener("click", function(){
        sectionFourteen.style.display = "none";
        sectionEnd.style.display = "block";
    })
}
        
        