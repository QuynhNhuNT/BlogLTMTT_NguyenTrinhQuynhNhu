import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Về Nguyễn Trình Quỳnh Như - Kỹ sư Mạng Máy tính",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

