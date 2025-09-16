import "./globals.css";
import { ReactNode } from "react";
import { DashboardProvider } from "./context/DashboardContext"; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>{children}</DashboardProvider>
      </body>
    </html>
  );
}