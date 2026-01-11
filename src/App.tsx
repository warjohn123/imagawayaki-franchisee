import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import OrdersPage from "./pages/orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
