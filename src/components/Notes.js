// import React from "react";
import React, { useContext } from "react"; //rafc
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note.id} note={note} />;
      })}
    </div>
  );
};

export default Notes;