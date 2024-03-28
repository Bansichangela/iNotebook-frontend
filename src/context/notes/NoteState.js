import { useState } from "react";
import NoteContext from "./noteContext";

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
  const notesInitial = [
    {
      _id: "65f927a1954e27bcc4d3b3dc",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-03-19T05:50:25.896Z",
      __v: 0,
    },
    {
      _id: "65f927a2954e27bcc4dfd6de",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-03-19T05:50:26.108Z",
      __v: 0,
    },
    {
      _id: "65f92bc2954e27bcc4dfb2e2",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    },
    {
      _id: "65f92bc2954e27bcc4dfb3e23",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    },
    {
      _id: "65f92bc2954e27bcc4dfb3e21",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    },
    {
      _id: "65f92bc2954e27bcc4dfb3ef2",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API call
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
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
