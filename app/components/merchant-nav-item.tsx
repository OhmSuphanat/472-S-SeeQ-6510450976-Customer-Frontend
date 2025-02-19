import { Link, useLocation } from "@remix-run/react";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  path: string;
}

export function NavItem({ icon, label, path }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  console.log(location.pathname);

  return (
    <Link to={path}>
      <div
        className={`flex flex-row gap-4 mx-4 py-2 px-6 rounded-md transform duration-200 
          ${
            isActive
              ? "bg-[#3A57E8] text-white scale-105"
              : "hover:scale-105 hover:bg-[#3A57E8] hover:text-white"
          }
        `}
      >
        {icon}
        <h1 className="text-[16px]">{label}</h1>
      </div>
    </Link>
  );
}
