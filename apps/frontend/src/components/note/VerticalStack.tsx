import { useState } from 'react';
import { HorizontalStack } from './HorizontalStack';

export function VerticalStack() {
  const [noteNumber, setNoteNumber] = useState(0)
  return (
    <div className='flex flex-col'>
    {[...Array(noteNumber).keys()].map(number => <HorizontalStack rowNumber={number} key={`HS-${number}`}/>)
    }
      <button className="bg-yellow-100 hover:bg-yellow-200 font-semibold py-2 px-4 rounded shadow block w-[100px]" onClick={() => setNoteNumber(noteNumber + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default VerticalStack;

