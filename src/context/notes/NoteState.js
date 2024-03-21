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
      _id: "65f927a1954e27bcc4dfb3dc",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-03-19T05:50:25.896Z",
      __v: 0,
    },
    {
      _id: "65f927a2954e27bcc4dfb3de",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-03-19T05:50:26.108Z",
      __v: 0,
    },
    {
      _id: "65f92bc2954e27bcc4dfb3e2",
      user: "65f7d5ccda1a0b9b9b9683bc",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-03-19T06:08:02.244Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
