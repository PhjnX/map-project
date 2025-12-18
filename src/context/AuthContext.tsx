// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Định nghĩa kiểu dữ liệu User
interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Khi F5, kiểm tra xem trong localStorage có lưu user chưa
  useEffect(() => {
    const storedUser = localStorage.getItem("webie_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Hàm giả lập Login
  const login = async (email: string, pass: string): Promise<boolean> => {
    setIsLoading(true);

    // Giả vờ đợi 1.5 giây như đang gọi API thật
    return new Promise((resolve) => {
      setTimeout(() => {
        // KIỂM TRA MẬT KHẨU CỨNG (Hardcode)
        if (email === "webie_user@gmail.com" && pass === "123123123") {
          const fakeUser = {
            name: "Mr. Webie",
            email: email,
            avatar:
              "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=200&auto=format&fit=crop",
          };
          setUser(fakeUser);
          localStorage.setItem("webie_user", JSON.stringify(fakeUser)); // Lưu vào browser
          resolve(true); // Login thành công
        } else {
          resolve(false); // Login thất bại
        }
        setIsLoading(false);
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("webie_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook để dùng nhanh ở các component khác
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
