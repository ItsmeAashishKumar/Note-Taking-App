import React, { useEffect, useState } from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import { nanoid } from "nanoid";
import Search from "./Search";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is the First Note",
            date: "21/08/2024"
        },
        {
            id: nanoid(),
            text: "This is the Second Note",
            date: "24/08/2024"
        },
        {
            id: nanoid(),
            text: "This is the Third Note",
            date: "26/08/2024"
        }
    ]);

    const [searchText, setSearchText] = useState("");

    function addNote(text) {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            date: date.toLocaleDateString(),
            text: text
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const remainingNotes = notes.filter((note) => note.id !== id);
        setNotes(remainingNotes);
    };

    const filteredNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchText.toLowerCase())
    );
    useEffect(()=>{
        const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))

        if(savedNotes){
            setNotes(savedNotes)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    },[notes])

    return (
        <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Search handleSearch={setSearchText} />
            <NoteList 
                notes={filteredNotes} 
                handleAddNote={addNote}
                deleteButton={deleteNote}
            />
        </div>
    );
}

export default App;
