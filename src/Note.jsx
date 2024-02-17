import React from "react"

export default function Note({id,date,text,deleteButton}){
    const handleDelete = () => {
        deleteButton(id); // Call deleteButton with the note's id
    };

    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <img src="./public/dustbin.png" onClick={handleDelete} className="delete-icon" />
            </div>
        </div>
    )
}