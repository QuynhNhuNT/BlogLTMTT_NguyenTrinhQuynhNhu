import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
        {/* Left Side - Image with Gradient Background (40%) */}
        <div className="relative w-full h-screen lg:h-auto bg-gradient-to-b from-orange-200 via-pink-200 to-pink-200 order-1 lg:order-1">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300/50 via-pink-300/50 to-pink-300/50 backdrop-blur-sm"></div>
          
          {/* Content on Left Side */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8">
            {/* Top Left - Name and Title */}
            <div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                QUỲNH NHƯ | KỸ SƯ MẠNG MÁY TÍNH
              </p>
            </div>

            {/* Center - Avatar Image */}
            <div className="flex items-center justify-center flex-1">
              <div className="relative w-80 h-[32rem] lg:w-96 lg:h-[36rem] xl:w-[28rem] xl:h-[40rem] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-avatar.jpg"
                  alt={siteConfig.author}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom Left - Privacy Policy */}
            <div>
              <p className="text-sm text-gray-900">Chính sách Quyền riêng tư</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content with Pink Background (60%) */}
        <div className="bg-pink-50 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-2">
          <div className="max-w-2xl w-full space-y-10">
            {/* Top Right - Homepage Label */}
            <div className="text-right">
              <p className="text-base lg:text-lg font-semibold text-gray-900">TRANG CHỦ</p>
            </div>

            {/* Welcome Message */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                Xin chào, mình là Quỳnh Như.
              </h1>
            </div>

            {/* Slogan */}
            <div>
              <p className="text-xl lg:text-2xl text-gray-900 leading-relaxed">
                Hành động thay lời nói, thành công thay minh chứng. Kỹ sư Mạng Máy tính đam mê với hạ tầng mạng, quản trị hệ thống và điện toán đám mây.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-5 pt-6">
              <Link
                href="/blog"
                className="block w-full bg-white border-2 border-gray-300 rounded-lg px-8 py-5 text-center text-gray-900 font-semibold text-lg lg:text-xl hover:bg-gray-50 transition-colors"
              >
                BLOG
              </Link>
              <Link
                href="/about"
                className="block w-full bg-white border-2 border-gray-300 rounded-lg px-8 py-5 text-center text-gray-900 font-semibold text-lg lg:text-xl hover:bg-gray-50 transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/achievements"
                className="block w-full bg-white border-2 border-gray-300 rounded-lg px-8 py-5 text-center text-gray-900 font-semibold text-lg lg:text-xl hover:bg-gray-50 transition-colors"
              >
                KINH NGHIỆM VÀ THÀNH TÍCH
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-white border-2 border-gray-300 rounded-lg px-8 py-5 text-center text-gray-900 font-semibold text-lg lg:text-xl hover:bg-gray-50 transition-colors"
              >
                KẾT NỐI VỚI MÌNH
              </Link>
            </div>

            {/* Social Media Icons - Centered */}
            <div className="flex items-center justify-center space-x-6 pt-8">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-900 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="size-8 lg:size-10" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-300">
              <p className="text-xs text-gray-700 text-center">
                © 2025 bản quyền của {siteConfig.author}. Tự hào tạo ra với Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
