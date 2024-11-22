import { RiLogoutCircleRLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ManageLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    { name: "Quản lý bài viết", path: "/admin/bai-viet" },
    { name: "Quản lý quỹ từ thiện", path: "/admin/quy-tu-thien" },
    { name: "Quản lý audio", path: "/admin/audio" },
  ];
  const handleLogout = () => {
    navigate("/dang-nhap");
    localStorage.removeItem("access_token");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="w-full py-4 flex justify-end items-center px-6">
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-gray-200 transition-colors flex justify-center items-center"
            title="Đăng xuất"
          >
            <RiLogoutCircleRLine className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {" "}
        {/* Add top padding to account for fixed header */}
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md fixed left-0 top-16 bottom-0 overflow-y-auto">
          <nav className="mt-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <span
                    onClick={() => navigate(item.path)}
                    className={`block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 ${
                      pathname === item.path
                        ? "bg-indigo-100 text-indigo-700 border-r-4 border-indigo-700"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Main Content Area */}
        <div className="flex-1 ml-64 p-8">
          {" "}
          {/* Add left margin to account for sidebar width */}
          <div className="bg-white rounded-lg shadow p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLayout;
