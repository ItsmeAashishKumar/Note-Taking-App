import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
export default function NoteList({notes,handleAddNote,deleteButton}){
    return(
        <div className="notes-list">
            {notes.map((note)=>(
                <Note id={note.id} 
                date={note.date}
                 text={note.text} 
                 deleteButton={deleteButton}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}