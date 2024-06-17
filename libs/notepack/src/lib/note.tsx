export type NoteFunction = (identifier: string, ...args: any[]) => JSX.Element;

export interface NoteProps {
  identifier: string;
  noteFunction: NoteFunction;
  noteArgs:  { [key: string]: any };
}


export function Note(props: NoteProps) {
  const note = props.noteFunction(props.identifier, props.noteArgs);
  return (
    <div>
      {note}
    </div>
  )
}
