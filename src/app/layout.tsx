
import "./globals.css";

import { DashboardProvider } from "./context/DashboardContext"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>{children}</DashboardProvider>
      </body>
    </html>
  );
}
