import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Giả lập đã đăng nhập (true). Đổi thành false để test chức năng chặn
  const isAuthenticated = true;

  if (!isAuthenticated) {
    alert("Vui lòng đăng nhập để xem hồ sơ!");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
