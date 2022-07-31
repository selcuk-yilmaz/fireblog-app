import "./App.css";
import AppRouter from "./router/AppRouter";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <>
      <BlogContextProvider>
        <AppRouter />
      </BlogContextProvider>
    </>
  );
}

export default App;
