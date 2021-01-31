import React, {useState} from "react";

//Create a constant that keeps of track of tiltle and content
//pass new note to the app compenent
//add new note to an array
//take array and render seperte noite components

function CreateArea(props) {

const [textInput, setInput] = useState({
  title: "",
  content: ""
});

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

  return (
    <div>
      <form>
      <input value={textInput.title} name="title" placeholder="Title" onChange={handleChange} />
        <textarea value={textInput.content} name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={(event) => {
          props.addNote(textInput);
          setInput({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}>Add</button>
      </form>
      
    </div>
  );
}

export default CreateArea;
