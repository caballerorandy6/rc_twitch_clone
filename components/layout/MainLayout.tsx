import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div>
      {/*
        Grid principal de la aplicación:
        - Header (top)
        - Sidebar (left)
        - Main content (center)
        - ChatPanel (right) [opcional según la página]
      */}
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
