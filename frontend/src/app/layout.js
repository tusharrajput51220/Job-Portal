"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/redux-provider";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
// import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Job Portal App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider store={store}>
          <ProtectedRoute>
            <Navbar /> {children} <Toaster />
          </ProtectedRoute>
        </ReduxProvider>
      </body>
    </html>
  );
}
