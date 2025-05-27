import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import RootComponent from "./Wrappers.tsx";

import { Analytics } from "@vercel/analytics/react";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AAMZ Security Solutions",
  description: "Official AAMZ Security Website",
  keywords:
    "AAMZ Security, Security, Security Solutions, AAMZ SS, top-tier security services, comprehensive security solutions, integrity, honesty, and transparency, Security Lahore, Best Security Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} selection:bg-rose-100 dark:selection:bg-slate-600`}
      >
        <RootComponent>
          {children}
          <Analytics />
        </RootComponent>
      </body>
    </html>
  );
}
