"use client";
import "@/styles/duan.css";

export default function DuAnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="duan-layout">
      {children}
    </div>
  );
}
