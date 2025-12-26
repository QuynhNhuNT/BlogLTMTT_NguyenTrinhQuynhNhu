"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { Network, Server, Shield, Code, Database, Cloud, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container relative max-w-[1600px] py-4 lg:py-6">
        <PageHeader 
          title="Giới thiệu" 
          description="Tìm hiểu thêm về tôi và công việc của một kỹ sư mạng máy tính" 
        />
        <hr className="my-6 border-2" />

        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:items-start lg:space-x-6 lg:space-y-0">
          {/* Bên trái: Card thông tin cá nhân và Định hướng */}
          <div className="mx-auto w-full max-w-[500px] space-y-4">
            {/* Card thông tin cá nhân */}
            <div className="relative flex flex-col items-center gap-3 rounded-xl bg-secondary px-5 py-6 shadow-xl">
              <Image
                src={siteConfig.authorImage}
                width={100}
                height={100}
                alt="Nguyễn Trình Quỳnh Như"
                className="absolute -top-10 mb-4 rounded-full border-[3px] border-primary bg-primary object-cover aspect-square"
                style={{ borderRadius: '50%' }}
              />
              <div className="mt-10 text-center">
                <h3 className="mt-3 text-xl font-bold">Nguyễn Trình Quỳnh Như</h3>
                <p className="mt-2 text-center text-base font-semibold text-primary">
                  Kỹ sư Mạng Máy tính
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <p className="font-semibold text-sm text-foreground">Sinh viên Đại học</p>
                  <p>Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)</p>
                  <p>Lớp: 22DTHE4</p>
                </div>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  {SOCIALS.map((social) => (
                    <Link
                      key={social.label}
                      href={social.path}
                      rel="noreferrer"
                      target="_blank"
                      className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full p-2 size-9 bg-primary/10 flex items-center justify-center"
                    >
                      <social.icon className="size-4" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Định hướng & Mục tiêu nghề nghiệp - Khung 3D */}
            <div className="space-y-3 rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
              <h2 className="text-lg lg:text-xl font-bold">🌱 Định hướng & Mục tiêu nghề nghiệp</h2>
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Mục tiêu của tôi là không ngừng trau dồi kiến thức chuyên môn và kỹ năng thực hành để trở thành một 
                <strong className="text-gray-900"> Kỹ sư Mạng Máy Tính chuyên nghiệp</strong>, có khả năng tham gia thiết kế, triển khai, 
                giám sát và vận hành các hệ thống mạng và hạ tầng CNTT. Trong tương lai, tôi mong muốn phát triển sâu hơn trong các vị trí như 
                <strong className="text-gray-900"> Network Engineer</strong>, <strong className="text-gray-900">System Administrator</strong> hoặc 
                <strong className="text-gray-900"> Cloud Engineer</strong>, đóng góp vào việc xây dựng các hệ thống ổn định, an toàn và hiệu quả cho doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Bên phải: Nội dung giới thiệu */}
          <div className="flex-1 space-y-4">
            {/* Giới thiệu bản thân - Khung 3D */}
            <div className="space-y-3 rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
              <h2 className="text-lg lg:text-xl font-bold">🎯 Giới thiệu bản thân</h2>
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Tôi là <strong className="text-gray-900">Nguyễn Trình Quỳnh Như</strong>, sinh viên ngành Công nghệ thông tin tại 
                Đại học Công nghệ TP. Hồ Chí Minh, có niềm đam mê với lĩnh vực hạ tầng mạng, quản trị hệ thống và điện toán đám mây. 
                Trong quá trình học tập, tôi được trang bị nền tảng kiến thức về mạng máy tính, nguyên lý hoạt động của các hệ thống mạng doanh nghiệp, 
                cũng như các mô hình triển khai dịch vụ CNTT hiện đại.
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
                Tôi có khả năng tiếp cận và làm việc với các môi trường mạng nội bộ (LAN), mạng diện rộng (WAN), hệ thống Client–Server, 
                và các dịch vụ mạng cơ bản. Bên cạnh đó, tôi luôn chủ động tìm hiểu và thực hành với các nền tảng Cloud Computing, 
                nhằm nâng cao khả năng triển khai, vận hành và tối ưu hệ thống trong môi trường thực tế.
              </p>
            </div>

            {/* Kỹ năng chuyên môn - Khung 3D */}
            <div className="space-y-6 rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
              <h2 className="text-2xl lg:text-3xl font-bold">🛠️ Kỹ năng chuyên môn</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-center space-x-4 rounded-xl bg-gray-50 p-6 border-2 border-gray-200">
                  <Network className="size-8 text-primary flex-shrink-0" />
                  <h3 className="text-2xl lg:text-3xl font-semibold">Kiến thức nền tảng Mạng máy tính</h3>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-4 border-2 border-gray-200">
                  <Server className="size-6 text-primary shrink-0" />
                  <h3 className="text-lg lg:text-xl font-semibold">Quản trị Hệ thống</h3>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-4 border-2 border-gray-200">
                  <Database className="size-6 text-primary shrink-0" />
                  <h3 className="text-lg lg:text-xl font-semibold">Dịch vụ Mạng cơ bản</h3>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-4 border-2 border-gray-200">
                  <Cloud className="size-6 text-primary shrink-0" />
                  <h3 className="text-lg lg:text-xl font-semibold">Ảo hóa & Điện toán đám mây</h3>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-4 border-2 border-gray-200">
                  <Shield className="size-6 text-primary shrink-0" />
                  <h3 className="text-lg lg:text-xl font-semibold">Bảo mật Mạng</h3>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-4 border-2 border-gray-200">
                  <Code className="size-6 text-primary shrink-0" />
                  <h3 className="text-lg lg:text-xl font-semibold">Kỹ năng mềm</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quá trình học tập - Timeline Horizontal (Full width) */}
        <div className="mt-6 w-full">
          <div className="space-y-3 rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
            <h2 className="text-lg lg:text-xl font-bold flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              Quá trình học tập
            </h2>
            <div className="relative py-6">
              {/* Timeline line horizontal */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary transform -translate-y-1/2"></div>
              
              {/* Timeline items horizontal */}
              <div className="relative flex justify-between items-center">
                {[
                  { year: "2022", title: "Nhập học", main: "Bắt đầu hành trình học tập", detail: "Nhập học ngành Công nghệ thông tin tại Đại học Công nghệ TP. Hồ Chí Minh (HUTECH). Lớp: 22DTHE4" },
                  { year: "2023", title: "Nền tảng Mạng", main: "Học TCP/IP & OSI", detail: "Học các môn chuyên ngành về mạng máy tính, TCP/IP, mô hình OSI. Bắt đầu thực hành với Windows Server và Linux" },
                  { year: "2024", title: "Quản trị Hệ thống", main: "DNS, DHCP, Web Server", detail: "Học sâu về quản trị hệ thống, dịch vụ mạng (DNS, DHCP, Web Server). Thực hành với ảo hóa và Cloud Computing" },
                  { year: "2025", title: "Chuyên ngành Mạng", main: "Bảo mật & Thiết kế mạng", detail: "Học chuyên về chuyên ngành Mạng Máy tính - các môn nâng cao về bảo mật mạng, thiết kế mạng doanh nghiệp. Làm đồ án tốt nghiệp và thực tập tại doanh nghiệp" },
                  { year: "2026", title: "Tốt nghiệp", main: "Kỹ sư Mạng Máy tính", detail: "Hoàn thành chương trình đại học, nhận bằng Kỹ sư Mạng Máy tính. Sẵn sàng bước vào thị trường lao động" }
                ].map((item, index) => (
                  <div key={item.year} className="relative flex-1 group">
                    {/* Tooltip - Xen kẽ trên dưới */}
                    <div className={`absolute ${index % 2 === 0 ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}>
                      <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-xl p-6 shadow-2xl max-w-md w-80 border-2 border-pink-500/30">
                        <h4 className="font-bold text-2xl lg:text-3xl mb-3">{item.title}</h4>
                        <p className="text-base lg:text-lg leading-relaxed">{item.detail}</p>
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-[4px] border-transparent"
                          style={index % 2 === 0 
                            ? { top: '100%', borderTopColor: 'rgb(219 39 119)' } 
                            : { bottom: '100%', borderBottomColor: 'rgb(219 39 119)' }
                          }
                        ></div>
                      </div>
                    </div>
                    
                    {/* Year circle */}
                    <div className="relative z-20 mx-auto w-20 h-20 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    
                    {/* Main content below circle */}
                    <div className="mt-4 text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-base lg:text-lg text-gray-600 mt-1">{item.main}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Liên hệ - Khung 3D (Full width, dưới cùng) */}
        <div className="mt-12 w-full">
          <div className="space-y-6 rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
            <h2 className="text-2xl lg:text-3xl font-bold text-center">📞 Liên hệ với tôi</h2>
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 text-center">
              Nếu bạn có câu hỏi hoặc muốn kết nối, đừng ngần ngại liên hệ với tôi qua các kênh mạng xã hội. 
              Tôi luôn sẵn sàng trò chuyện và chia sẻ kinh nghiệm!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
