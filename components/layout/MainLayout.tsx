import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type Props = {
  children: React.ReactNode;
  showSidebar?: boolean;
  showChat?: boolean;
};

export function MainLayout({
  children,
  showSidebar = true,
  showChat = false
}: Props) {
  return (
    <div className="flex h-screen flex-col bg-[#0E0E10]">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar />}

        <main className="flex-1 overflow-auto">
          {children}
        </main>

        {showChat && (
          <div className="flex-shrink-0">
            {/* ChatPanel will be imported here when needed */}
          </div>
        )}
      </div>
    </div>
  );
}
