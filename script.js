const notesCard=(inputValue,inputColor)=>{
    const noteSpan=document.createElement("span");
    noteSpan.innerText=inputValue;

    const closeButton=document.createElement("span");
    closeButton.innerText="X";
    closeButton.addEventListener("click",(event)=>{
        event.target.parentElement.remove();
    });

   const noteDiv=document.createElement("div");
   noteDiv.style.backgroundColor=inputColor;

   noteDiv.classList.add("note");

   noteDiv.append(noteSpan);
   noteDiv.append(closeButton);

   return noteDiv;
}

const notesButton=document.getElementById("add-button");
notesButton.addEventListener("click",()=>{

const inputValue=document.getElementById("inputArea");
const inputColor=document.getElementById("color-selector");

const notesCardResult=document.getElementById("notes-div");
if(inputValue.value.trim()===""){
    alert("A Note Can't be empty..Add notes to proceed")
}
else{
const result=notesCard(inputValue.value,inputColor.value);
notesCardResult.append(result);
inputValue.value="";
}
});

