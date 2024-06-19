export type NoteFunction = (identifier: string, ...args: any[]) => JSX.Element;

export interface NoteProps {
  identifier: string;
  noteFunction: NoteFunction;
  noteArgs?: { [key: string]: any };
  className?: string;
}

interface Note {
  [key: string]: {
    fn: NoteFunction;
    noteArgs?: { [key: string]: any };
    className?: string;
  };
}

