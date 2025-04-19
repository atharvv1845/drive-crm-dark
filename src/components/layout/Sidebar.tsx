
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  FileTextIcon,
  ListIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

type SidebarItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
};

const SidebarItem = ({ title, icon, href, isActive }: SidebarItem) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:text-white",
        isActive
          ? "bg-drive-primary text-white"
          : "text-drive-subtext hover:bg-drive-border"
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center">
        {icon}
      </div>
      <span>{title}</span>
    </Link>
  );
};

interface SidebarProps {
  className?: string;
  currentPath: string;
}

export function Sidebar({ className, currentPath }: SidebarProps) {
  const navigation = [
    {
      title: "Dashboard",
      icon: <BarChart className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      title: "Contacts",
      icon: <UsersIcon className="h-5 w-5" />,
      href: "/contacts",
    },
    {
      title: "Companies",
      icon: <BriefcaseIcon className="h-5 w-5" />,
      href: "/companies",
    },
    {
      title: "Deals",
      icon: <FileTextIcon className="h-5 w-5" />,
      href: "/deals",
    },
    {
      title: "Tasks",
      icon: <CheckIcon className="h-5 w-5" />,
      href: "/tasks",
    },
    {
      title: "Calendar",
      icon: <CalendarIcon className="h-5 w-5" />,
      href: "/calendar",
    },
    {
      title: "Reports",
      icon: <ListIcon className="h-5 w-5" />,
      href: "/reports",
    },
    {
      title: "Settings",
      icon: <SettingsIcon className="h-5 w-5" />,
      href: "/settings",
    },
  ];

  return (
    <div className={cn("flex h-screen flex-col border-r border-drive-border bg-drive-dark", className)}>
      <div className="p-6">
        <div className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="text-drive-primary">Drive</span>CRM
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-3">
        {navigation.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            href={item.href}
            isActive={currentPath === item.href}
          />
        ))}
      </nav>
      <div className="border-t border-drive-border p-4">
        <div className="flex items-center gap-3 rounded-md px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-drive-primary">
            <span className="text-sm font-medium text-white">JD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">John Doe</span>
            <span className="text-xs text-drive-subtext">Sales Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
