import { List, X } from "phosphor-react";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";

export function Header() {
  const { isSidebarDrawerOpen, toggleSidebarDrawer } = useSidebarDrawer();

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 sm:justify-between sm:px-4">
      <Logo />
      <button
        className="lg:hidden"
        onClick={() => toggleSidebarDrawer(isSidebarDrawerOpen)}
      >
        {isSidebarDrawerOpen ? <X size={24} /> : <List size={24} />}
      </button>
    </header >
  );
}