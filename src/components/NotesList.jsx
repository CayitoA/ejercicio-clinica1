import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-white">Informaciones y noveades</h2>
      <div className="row">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div className="col-md-4" key={note.id}>
              <NoteCard note={note} deleteNote={deleteNote} />
            </div>
          ))
        ) : (
          <p className="text-center">Aún no hay notas</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;
