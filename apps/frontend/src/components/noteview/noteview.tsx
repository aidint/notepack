import { useState } from 'react';
import Note from '../note/note';

export function NoteView() {
  const [noteNumber, setNoteNumber] = useState(0)
  return (
    <div>
    {[...Array(noteNumber)].map(()=> <Note />)
    }
      <button className="bg-gray-100 hover:bg-gray-200 font-semibold py-2 px-4 rounded shadow" onClick={() => setNoteNumber(noteNumber + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default NoteView;

