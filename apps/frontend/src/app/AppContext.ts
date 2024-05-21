import { createContext } from 'react';

interface AppContext {
  setDraggedElement: (noteId: string) => void;
  getDraggedElement: () => string
}
export const AppContext = createContext<AppContext>({
  setDraggedElement: () => {},
  getDraggedElement: () => 'none'
})
