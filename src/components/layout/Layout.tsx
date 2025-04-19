
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const location = useLocation();
  
  // Don't show sidebar on login/signup page
  const isAuthPage = location.pathname === "/" || location.pathname === "/signup";
  
  if (isAuthPage) {
    return <Outlet />;
  }
  
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar currentPath={location.pathname} className="w-64 shrink-0" />
      <main className="flex flex-1 flex-col overflow-auto">
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
