import React, {useState} from "react";
import Header from "./components/Header";
import Note from "./components/notes/Note";
import Footer from "./components/Footer";
import "./css/style.css";
import CreateNote from  "./components/notes/CreateNote";
import initialNote from "./components/notes/notes";

function App() {

    const [notes, setNote] = useState([]);
    const [initNote, setInitNote] = useState(false);

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

    function remNote() {
        setInitNote(true);
    }

    function removeInitNote(id) {
       if (id === 0) {
           setInitNote(true);
       }
    }


    return ( 
    <div>
    <Header />
    <CreateNote addNote={addNewNote} removeNote={remNote}  />
    {initNote ? null : initialNote.map(note => (
        <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
            deleteNote = {removeInitNote}
         />
    ))}
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