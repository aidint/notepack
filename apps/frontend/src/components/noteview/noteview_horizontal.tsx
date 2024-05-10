import { useState } from 'react';
import { Note } from './note';

export function NoteViewHorizontal() {
  const [noteNumber, setNoteNumber] = useState(1);

  return (
    <div className="block">
      {[...Array(noteNumber)].map(() => (
        <Note />
      ))}
      <button
        className="bg-gray-100 hover:bg-gray-200 font-semibold py-2 px-4 rounded shadow"
        onClick={() => setNoteNumber(noteNumber + 1)}
      >
        Click Me!
      </button>
    </div>
  );
}

export default NoteViewHorizontal;
