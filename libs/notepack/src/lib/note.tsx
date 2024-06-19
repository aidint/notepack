export type NoteFunction = (params: {
  identifier: string;
  config: {
    [key: string]: any;
  };
}) => JSX.Element;

export interface NoteProps {
  identifier: string;
  noteFunction: NoteFunction;
  config?: { [key: string]: any };
}
