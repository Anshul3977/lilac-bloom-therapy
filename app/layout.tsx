import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout",
  description: "Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA. Dr. Maya Reynolds offers evidence-based therapy including CBT, EMDR, and mindfulness.",
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout",
    description: "Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
