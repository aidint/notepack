import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const extensions = [StarterKit];

interface NoteProps {
  id: string;
};

export function Note(props: NoteProps) {
  const { id } = props;
  console.log(`Note ${id}`);
  return (
    <div className="w-[var(--note-size-x)] h-[var(--note-size-y)] border border-black border-dashed" draggable={true}>
      <EditorProvider extensions={extensions} content={'Note'}></EditorProvider>
    </div>
  );
}

export default Note;
