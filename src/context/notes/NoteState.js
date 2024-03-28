import { useState } from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";

// const NoteState = (props) => {
//   const s1 = {
//     name: "Harry",
//     class: "5b",
//   };
//   const [state, setState] = useState(s1);

// const update = () => {
//   setTimeout(() => {
//     setState({
//       name: "Jane",
//       class: "10b",
//     });
//   }, 1000);
// };
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Gel all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmN2Q1Y2NkYTFhMGI5YjliOTY4M2JjIn0sImlhdCI6MTcxMDc3MDI0NH0.eEd3i0sybiOZUHVVjVYbcYwkcyUvwbLmCtaMRmayJdo",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API call
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmN2Q1Y2NkYTFhMGI5YjliOTY4M2JjIn0sImlhdCI6MTcxMDc3MDI0NH0.eEd3i0sybiOZUHVVjVYbcYwkcyUvwbLmCtaMRmayJdo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log("Adding new note");
    const note = {
      _id: "65f92bc2954e27bcc4dfb3e2",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: title,
      description: description,
      tag: tag,
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = (id) => {
    // TODO: API call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmN2Q1Y2NkYTFhMGI5YjliOTY4M2JjIn0sImlhdCI6MTcxMDc3MDI0NH0.eEd3i0sybiOZUHVVjVYbcYwkcyUvwbLmCtaMRmayJdo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
