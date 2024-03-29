// import React from "react";
import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";

const Noteitem = (props) => {
  // eslint-disable-next-line
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      {/* {note.title}
      {note.description} */}
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
