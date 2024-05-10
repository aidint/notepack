import { useState } from 'react';
import { NoteViewHorizontal } from './noteview_horizontal';

export function NoteView() {
  const [noteNumber, setNoteNumber] = useState(0)
  return (
    <div>
    {[...Array(noteNumber)].map(()=> <NoteViewHorizontal />)
    }
      <button className="bg-yellow-100 hover:bg-yellow-200 font-semibold py-2 px-4 rounded shadow block" onClick={() => setNoteNumber(noteNumber + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default NoteView;

