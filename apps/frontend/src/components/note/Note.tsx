import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const extensions = [StarterKit];

export function Note() {
  return (
    <div className="w-[var(--note-size-x)] h-[var(--note-size-y)] mx-[10px] my-[10px] border border-black border-dashed inline-block">
      <EditorProvider extensions={extensions} content={'Note'}></EditorProvider>
    </div>
  );
}

export default Note;
