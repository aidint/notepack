import { DragEvent, useContext, useState } from 'react';
import { Note } from './Note';
import { AppContext } from '../../app/AppContext';

interface HorizontalStackProps {
  rowNumber: number;
}
export function HorizontalStack(props: HorizontalStackProps) {
  const [noteNumber, setNoteNumber] = useState(1);
  const appContext = useContext(AppContext)
  const handleDragEnter = (e: DragEvent) => {
    console.log(appContext.getDraggedElement())
  }

  return (
    <div className="flex flex-row gap-3" onDragEnterCapture={handleDragEnter}>
      {[...Array(noteNumber).keys()].map(columnNumber => (
        <Note key={`Note${props.rowNumber}-${columnNumber}`} id={`Note${props.rowNumber}-${columnNumber}`}/>
      ))}
      <button
        className="bg-gray-100 hover:bg-gray-200 font-semibold gap-1 rounded shadow"
        onClick={() => setNoteNumber(noteNumber + 1)}
      >
        Click Me!
      </button>
    </div>
  );
}

export default HorizontalStack;
