import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useAuthContext } from './hooks/useAuthContext';

const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
            <Route
              path="/"
              element={<RequireAuth><Home /></RequireAuth>}
            />
            <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
