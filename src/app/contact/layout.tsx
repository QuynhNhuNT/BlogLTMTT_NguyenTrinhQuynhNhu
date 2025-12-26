import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | " + "Nguyễn Trình Quỳnh Như",
  description: "Liên hệ với Nguyễn Trình Quỳnh Như - Kỹ sư Mạng Máy tính",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

