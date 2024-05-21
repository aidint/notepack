import { VerticalStack } from '../components/note/VerticalStack';
import { AppContext } from './AppContext';

interface AppInfo {
  draggedElement?: string;
}

export function App() {
  const appInfo: AppInfo = {};
  const setDraggedElement = (noteId: string) => {
    appInfo.draggedElement = noteId;
  };
  return (
    <AppContext.Provider
      value={{
        setDraggedElement: setDraggedElement,
        getDraggedElement: () => appInfo.draggedElement || 'none',
      }}
    >
      <div className="w-max p-5">
        <VerticalStack />
      </div>
    </AppContext.Provider>
  );
}

export default App;
