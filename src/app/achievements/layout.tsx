import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thành tích & Kinh nghiệm",
  description: "Thành tích, chứng chỉ và kinh nghiệm của Nguyễn Trình Quỳnh Như",
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

