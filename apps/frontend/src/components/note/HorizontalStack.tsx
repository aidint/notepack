import { useState } from 'react';
import { Note } from './Note';

interface HorizontalStackProps {
  rowNumber: number;
}
export function HorizontalStack(props: HorizontalStackProps) {
  const [noteNumber, setNoteNumber] = useState(1);

  return (
    <div className="block">
      {[...Array(noteNumber).keys()].map(columnNumber => (
        <Note key={`Note${props.rowNumber}-${columnNumber}`}/>
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

export default HorizontalStack;
