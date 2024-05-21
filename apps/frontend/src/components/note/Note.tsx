import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useContext } from 'react';
import { AppContext } from '../../app/AppContext';

const extensions = [StarterKit];

interface NoteProps {
  id: string;
}

export function Note(props: NoteProps) {
  const { id } = props;
  const appConext = useContext(AppContext);
  return (
    <div
      className="w-[var(--note-size-x)] h-[var(--note-size-y)] border border-black border-dashed"
      draggable={true}
      onDragStart={() => {
        appConext.setDraggedElement(id);
      }}
    >
      <EditorProvider extensions={extensions} content={'Note'}></EditorProvider>
    </div>
  );
}

export default Note;
