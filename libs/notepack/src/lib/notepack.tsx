import { NoteProps, NoteFunction } from './note';

export type NotepackFunction = (params: {
  notes: NoteProps[];
  config?: {
    [key: string]: any;
  };
}) => JSX.Element;

export interface Pack {
  [key: string]: {
    noteFunction: NoteFunction;
    config?: { [key: string]: any };
  };
}

export interface NotepackProps {
  scope: string;
  notepackFunction: NotepackFunction;
  notes: Pack;
  config?: { [key: string]: any };
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
      config: props.notes[key].config,
    };
  });


  return (
    <div className={props.config?.className || ''}>
      {props.notepackFunction({ notes: notes, config: props.config})}
    </div>
  );
}

export default Notepack;
