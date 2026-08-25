import WindowProvider from "./context/WindowProvider";
import Desktop from "./desktop/Desktop";

const App = () => {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <WindowProvider>
        <Desktop />
      </WindowProvider>
    </div>
  );
};

export default App;
