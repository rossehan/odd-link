import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://odd-link.vercel.app"),
  title: "예영 X ODD. 공구",
  description: "예영 X ODD. 공구 제품 바로가기",
  openGraph: {
    title: "예영 X ODD. 공구",
    description: "예영 X ODD. 공구 제품 바로가기",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
