"use client";
import "@/styles/duan.css";


export default function DuAnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <div className="duan-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
