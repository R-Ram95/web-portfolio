import RightPanel from "./components/right-panel";
import LeftPanel from "./components/left-panel";

function App() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
