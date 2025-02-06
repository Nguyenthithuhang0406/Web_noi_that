import Layout from "@/app/_components/commons/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nội Thất House.com - Sản Phẩm Cao Cấp",
  description:
    "Khám phá các mẫu nội thất đẹp, hiện đại với giá tốt nhất tại Nội Thất House.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  );
}
