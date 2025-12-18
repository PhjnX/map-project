import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import Provider
import userRoutes from "./routes/userRoutes"; // Đường dẫn file routes của bạn

function App() {
  // Lấy ra element từ userRoute
  const element = useRoutes([userRoutes]);

  return (
    // Bọc toàn bộ ứng dụng bằng AuthProvider
    <AuthProvider>{element}</AuthProvider>
  );
}

export default App;
