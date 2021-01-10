import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./css/style.css";
import notes from "./components/notes/notes";

function App() {
    return ( 
    <div>
    <Header />
    {notes.map((note) => (
        <Note 
            key={note.key}
            id={note.key}
            title={note.title}
            content= {note.content}

        />
    ))}
    <Footer />
    </div>
    );
};

export default App;