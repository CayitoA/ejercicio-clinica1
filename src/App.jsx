import { useState } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Noticia medico", content: "Información respecto a un novedades de la clinica" },
    { id: 2, title: "Agregar nuevomedico", content: "Información respecto a una nueva especialidad." },
    { id: 3, title: "Agregar nueva especialidad", content: "Información respecto a una nueva especialidad." },
  ]);

  // Función para agregar una nueva nota
  const addNote = (title, content) => {
    const newNote = { id: Date.now(), title, content };
    setNotes([newNote, ...notes]);
  };

  // Función para eliminar una nota
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <h1 className="text-center">Novedades clinica</h1>
        <NoteForm addNote={addNote} />
        <NotesList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;