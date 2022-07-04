import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

interface SidebarDrawerContextDataProps {
  isSidebarDrawerOpen: boolean;
  toggleSidebarDrawer: (isSidebarDrawerOpen: boolean) => void;
}

interface SidebarDrawerContextData {
  isSidebarDrawerOpen: false;
  toggleSidebarDrawer: (isSidebarDrawerOpen: boolean) => {}
}

const SidebarDrawerContext = createContext<SidebarDrawerContextDataProps>({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useState(false);

  function toggleSidebarDrawer(isSidebarDrawerOpen: boolean) {
    setIsSidebarDrawerOpen(!isSidebarDrawerOpen);
  }

  return (
    <SidebarDrawerContext.Provider value={{ isSidebarDrawerOpen, toggleSidebarDrawer }}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);