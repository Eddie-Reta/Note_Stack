import React, {useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {Fab, Zoom} from '@material-ui/core';
//Create a constant that keeps of track of tiltle and content
//pass new note to the app compenent
//add new note to an array
//take array and render seperte noite components

function CreateArea(props) {

const [textInput, setInput] = useState({
  title: "",
  content: ""
});

const [textAreaEx, setTextAreaEx] = useState(false);

const [missingText, setMissingText] = useState(false);

const [placeholder, setPlaceholder] = useState({
  title: "Title",
  content: "Take a note ..."
})

//Create values that populate 
function handleChange(event) {

  //object destructuring 
    const {value, name} = event.target;
    
    setInput((prevValue) => {
      return {
        //With the spread operator im reaching back to all the previous values of the title and content.
        ...prevValue,
        //with es6 im using the [] to get the actual value of the variable. 
        //the bracket will let it know its an object and not the string "name"
        [name] : value
      }
    });
    
};

function addText(event) {
  if (textInput.title === "") {
    setPlaceholder({
      title: "Please add Title.",
      content: textInput.content
    }); 
  } else if (textInput.content === "") {
    setPlaceholder({
      title: textInput.title,
      content: "Please add Note."})
  } else {
    return props.addNote(textInput);
  };
};

function accessNote() {
  setTextAreaEx(true);
};

  return (
    <div>
      <form className="create-note">
      {textAreaEx && <input value={textInput.title} name='title' placeholder={placeholder.title} onChange={handleChange} />}
        <textarea value={textInput.content} name="content" placeholder={placeholder.content} rows={textAreaEx ? "3" : "1"} onChange={handleChange} onClick={accessNote} />
        <Zoom in={textAreaEx}>
        <Fab onClick={(event) => {
          event.preventDefault();
          addText();
        }}><NoteAddIcon  />
        </Fab>
        </Zoom>
      </form>
      
    </div>
  );
}

export default CreateArea;
