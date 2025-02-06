/* eslint-disable*/
import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/app/_components/commons/SessionProvider";

export const metadata: Metadata = {
  title: "Nội Thất House.com - Nội Thất Cao Cấp, Giá Tốt Nhất",
  description:
    "Nội Thất House.com cung cấp bàn ghế, giường tủ, sofa, kệ trang trí cao cấp. Đảm bảo chất lượng và giá tốt nhất thị trường!",
  icons: {
    icon: "/favicon.ico", // Đảm bảo có favicon
  },
  openGraph: {
    title: "Nội Thất House.com - Mua Nội Thất Online Uy Tín",
    description:
      "Mua sắm nội thất cao cấp tại Nội Thất House.com. Đa dạng mẫu mã, giá tốt, giao hàng tận nơi.",
    url: "https://noithatxyz.com",
    siteName: "Nội Thất House.com",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCpfX_DKKK1pSsnwFARacv-E2gfbZ5flpwg&s", // Cập nhật ảnh đại diện khi share
        width: 1200,
        height: 630,
        alt: "Nội Thất House.com - Sản phẩm nội thất cao cấp",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session?: any;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://noithatxyz.com" />
      </head>
      <body>
        <SessionProvider session={session}>
          <div id="root">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
