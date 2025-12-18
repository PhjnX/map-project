import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import userRoutes from "./routes/userRoutes"; 

function App() {
  const element = useRoutes([userRoutes]);

  return (
    <AuthProvider>{element}</AuthProvider>
  );
}

export default App;
