import { NoteProps, NoteFunction } from './note';


export type NotepackFunction = (input: {
  notes: NoteProps[], configs?: {
    [key: string]: any
  }
}) => JSX.Element;

export interface Notes {
  [key: string]: {
    noteFunction: NoteFunction;
    noteArgs?: { [key: string]: any };
    className?: string;
  };
}

export interface NotepackProps {
  scope: string;
  notepackFunction: (notes: NoteProps[], ...args: any) => JSX.Element;
  notes: Notes;
  className?: string;
  args?: { [key: string]: any };
}

export function Notepack(props: NotepackProps) {
  const notes: NoteProps[] = Object.keys(props.notes).map((key) => {

    // identifier of a note can not contain '/'
    if (key.includes('/')) {
      throw new Error(`Note identifier can not contain '/': ${key}`);
    }

    return {
      identifier: `${props.scope}/${key}`,
      noteFunction: props.notes[key].noteFunction,
      noteArgs: props.notes[key].noteArgs,
      className: props.notes[key].className,
    };
  });

  return (<div className={props.className ? props.className : ''}>
    {props.notepackFunction({...notes})}
  </div>);
}

export default Notepack;
