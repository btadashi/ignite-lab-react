import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { SidebarDrawerProvider, useSidebarDrawer } from "../contexts/SidebarDrawerContext";

interface Params {
  slug: string;
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const { isSidebarDrawerOpen } = useSidebarDrawer();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isSidebarDrawerOpen ? (
        <main className="flex flex-1 lg:flex-row flex-col">
          <Sidebar />
        </main>
      ) : (
        <main className="flex flex-1 lg:flex-row flex-col">
          {slug
            ? <Video lessonSlug={slug} />
            : <div className="flex-1"
            />}
          <Sidebar />
        </main>
      )}
    </div>
  );
}