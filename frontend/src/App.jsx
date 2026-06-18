import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PlaylistDetails from "./pages/PlaylistDetails";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/playlist/:id"
        element={
          <ProtectedRoute>
            <PlaylistDetails />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <h1 className="text-6xl font-bold text-green-400">
//         Tailwind Working 🚀
//       </h1>
//     </div>
//   );
// }

// export default App;