// import React from "react";
import React, { useContext } from "react"; //rafc
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
