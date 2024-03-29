import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import RightSidebar from "@/components/shared/RightSidebar";
import Leftsidebar from "@/components/shared/Leftsidebar";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}
        <Topbar/>
<main>
  <Leftsidebar />
  <section className="main-container">
    <div className="w-full max-w-4xl">
      {children}
    </div>
  </section>
  <RightSidebar />
</main>
        <Bottombar/>
        
        </body>
      </html>
    </ClerkProvider>
  );
}
