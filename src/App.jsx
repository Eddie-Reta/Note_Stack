import React, {useState} from "react";
import Header from "./components/Header";
import Note from "./components/notes/Note";
import Footer from "./components/Footer";
import "./css/style.css";
import CreateNote from  "./components/notes/CreateNote";



function App() {

    const [notes, setNote] = useState([]);

    function addNewNote(newNote) {       
        setNote(prevNote => {
            return [...prevNote, newNote];
        });
    };

    function deleNote(id) {
        setNote(prevNote => {
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return ( 
    <div>
    <Header />
    <CreateNote addNote={addNewNote} />
    {notes.map((note, index) => (
        <Note 
            key={index}
            id={index}
            title={note.title}
            content= {note.content}
            deleteNote = {deleNote}
        />
    ))}
    <Footer />
    </div>
    );
};

export default App;