import "./App.css";
import AppRouter from "./router/AppRouter";
import BlogContextProvider from "./contexts/BlogContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
