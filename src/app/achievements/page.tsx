"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, X } from "lucide-react";

interface AchievementItem {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  image?: string;
  description?: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

export default function AchievementsPage() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  
  const awards: AchievementItem[] = [];

  const certifications: CertificationItem[] = [
    {
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
      date: "02 Tháng 12, 2025",
      image: "/images/certificates/javascript-essentials-1.jpg",
      description: [
        "Hiểu cú pháp cốt lõi của JavaScript để làm việc với biến, toán tử, điều khiển luồng và hàm",
        "Hiểu cơ bản về hệ thống kiểu dữ liệu JavaScript, phân biệt giữa kiểu nguyên thủy và phức tạp",
        "Tư duy thuật toán và phân tích vấn đề sử dụng bộ công cụ khái niệm lập trình",
        "Chọn kiểu dữ liệu phù hợp với vấn đề và sử dụng phương tiện điều khiển luồng phù hợp",
        "Thiết kế, phát triển và cải thiện các chương trình JavaScript đơn giản",
        "Giải thích và xử lý các ngoại lệ cơ bản liên quan đến lỗi trong thực thi chương trình",
        "Hiểu công việc của lập trình viên trong quy trình phát triển phần mềm và vai trò của các công cụ phát triển cơ bản",
        "Hiểu cách chương trình được giải thích và thực thi trong môi trường máy tính thực tế, cục bộ hoặc từ xa"
      ]
    },
    {
      name: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy & OpenEDG JavaScript Institute",
      date: "16 Tháng 12, 2025",
      image: "/images/certificates/javascript-essentials-2.jpg",
      description: [
        "Kỹ thuật xây dựng và chỉnh sửa objects, bao gồm sử dụng prototypes và inheritance",
        "Phương pháp định nghĩa và đóng gói class properties, quản lý dữ liệu mảng, bao gồm chuyển đổi JSON",
        "Sử dụng Math object và regular expressions cho các thao tác toán học và chuỗi",
        "Kỹ thuật function nâng cao và lập trình bất đồng bộ, bao gồm callbacks và iterators",
        "Phân tích vấn đề và phát triển chương trình sử dụng tư duy thuật toán và nguyên tắc hướng đối tượng"
      ]
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "20 Tháng 11, 2025",
      image: "/images/certificates/networking-basics.jpg",
      description: [
        "Giải thích các khái niệm quan trọng trong giao tiếp mạng, các loại mạng, thành phần và kết nối",
        "Giải thích tầm quan trọng của tiêu chuẩn và giao thức trong giao tiếp mạng",
        "Giải thích cách giao tiếp diễn ra trên mạng Ethernet",
        "Giải thích các tính năng của địa chỉ IP và cách địa chỉ IPv4 được sử dụng trong giao tiếp mạng",
        "Giải thích các tính năng của địa chỉ IPv6",
        "Giải thích cách router kết nối các mạng với nhau",
        "Sử dụng các công cụ khác nhau để kiểm tra và khắc phục sự cố kết nối mạng",
        "Cấu hình router không dây tích hợp và client không dây để kết nối an toàn với internet"
      ]
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy - HUTECH",
      date: "23 Tháng 11, 2024",
      image: "/images/certificates/introduction-to-cybersecurity.jpg",
      description: [
        "Hiểu các khái niệm cơ bản về bảo mật mạng và an ninh thông tin",
        "Nhận biết các mối đe dọa và lỗ hổng bảo mật phổ biến",
        "Áp dụng các biện pháp bảo vệ cơ bản cho hệ thống và mạng",
        "Hiểu về các nguyên tắc bảo mật và quy trình xử lý sự cố an ninh"
      ]
    }
  ];

  const skills: SkillCategory[] = [
    {
      category: "Kiến thức Mạng",
      skills: ["TCP/IP", "Mô hình OSI", "LAN/WAN", "Routing & Switching"]
    },
    {
      category: "Hệ thống",
      skills: ["Windows Server", "Linux", "DNS", "DHCP", "Web Server"]
    },
    {
      category: "Cloud & Ảo hóa",
      skills: ["Cloud Computing", "Virtualization", "VMware", "Hyper-V"]
    },
    {
      category: "Bảo mật",
      skills: ["Network Security", "Firewall", "VPN", "Access Control"]
    },
    {
      category: "Công cụ",
      skills: ["Wireshark", "Packet Tracer", "Microsoft Office", "Git"]
    },
    {
      category: "Kỹ năng mềm",
      skills: ["Làm việc nhóm", "Phân tích", "Xử lý sự cố", "Giao tiếp"]
    }
  ];

  const experience: AchievementItem[] = [
    {
      title: "Triển khai hệ thống web đảm bảo tính sẵn sàng và khả năng mở rộng trên AWS",
      organization: "HUTECH – Môn học: Đồ án chuyên ngành",
      period: "Học kỳ 1, Năm học 2025–2026",
      location: "TP. Hồ Chí Minh",
      description: [
        "Thiết kế và triển khai ứng dụng web WordPress trên nền tảng AWS nhằm đảm bảo tính sẵn sàng cao",
        "Sử dụng Auto Scaling Group và EC2 để tự động mở rộng hoặc thu hẹp tài nguyên theo lưu lượng truy cập",
        "Triển khai Application Load Balancer để cân bằng tải và đảm bảo truy cập liên tục cho người dùng",
        "Thiết lập Amazon RDS (Single-AZ) kết hợp sao lưu tự động và snapshot để đảm bảo an toàn dữ liệu",
        "Áp dụng các cấu hình bảo mật mạng thông qua Security Group và kiểm soát truy cập dịch vụ"
      ]
    },
    {
      title: "Triển khai hệ thống lưu trữ phi cấu trúc với Amazon DynamoDB",
      organization: "HUTECH – Môn học: Đồ án cơ sở",
      period: "Học kỳ 2, Năm học 2024-2025",
      location: "TP. Hồ Chí Minh",
      description: [
        "Thiết kế và triển khai cơ sở dữ liệu NoSQL trên Amazon DynamoDB để lưu trữ dữ liệu phi cấu trúc",
        "Cấu hình bảng DynamoDB với partition key và sort key phù hợp để tối ưu hiệu suất truy vấn",
        "Thiết lập auto-scaling cho DynamoDB để tự động điều chỉnh capacity theo nhu cầu sử dụng",
        "Tích hợp DynamoDB với các dịch vụ AWS khác như Lambda và API Gateway để xây dựng ứng dụng serverless",
        "Thực hiện backup và restore dữ liệu, đảm bảo tính khả dụng và an toàn của hệ thống"
      ]
    }
  ];

  const education: AchievementItem[] = [
    {
      title: "Ngành Công nghệ thông tin - Chuyên ngành Mạng máy tính",
      organization: "Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)",
      period: "2022 - Hiện tại",
      location: "TP. Hồ Chí Minh",
      description: [
        "Sinh viên lớp 22DTHE4 - Chuyên ngành Mạng máy tính",
        "Học tập chuyên sâu về kiến trúc mạng, giao thức mạng, và quản trị hệ thống",
        "Thực hành với các công nghệ mạng: LAN, WAN, Wireless, Cloud Computing",
        "Nắm vững các nguyên lý bảo mật mạng, firewall, VPN và quản lý truy cập",
        "Phát triển kỹ năng thiết kế, triển khai và vận hành hệ thống mạng doanh nghiệp"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container relative max-w-[1600px] py-3 lg:py-5">
      <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:gap-5">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-6 lg:size-8 text-primary" />
            <h1 className="inline-block text-xl font-bold leading-tight tracking-tight text-primary lg:text-2xl xl:text-3xl">
              Thành tích và kinh nghiệm
            </h1>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground lg:text-sm">
            Hồ sơ chi tiết về học vấn, chứng chỉ và kinh nghiệm làm việc
          </p>
        </div>
      </div>
      
      <div className="my-5 flex items-center justify-between">
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-input bg-background px-6 py-3 text-base font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          ← Quay lại Giới thiệu
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          📥 Tải PDF
        </button>
      </div>

      <hr className="my-5 border-2" />

      <div className="space-y-6">
        {/* EDUCATION */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <h2 className="text-lg font-bold lg:text-xl">HỌC VẤN</h2>
          </div>
          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-1.5">
                  <h3 className="text-base lg:text-lg font-bold text-gray-900">{item.organization}</h3>
                  <div className="space-y-1">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">Ngành: Công nghệ thông tin</p>
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">Chuyên ngành: Mạng máy tính</p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1.5">
                    <div>
                      <span className="text-xs font-semibold text-gray-900">GPA: </span>
                      <span className="text-xs font-bold text-primary">3.0</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-900">Ngoại ngữ: </span>
                      <span className="text-xs font-bold text-primary">B1</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <h2 className="text-lg font-bold lg:text-xl">CHỨNG CHỈ & BẰNG CẤP</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col space-y-1.5 cursor-pointer rounded-2xl border-2 border-gray-200 bg-white p-3 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setSelectedCert(item)}
                >
                  {item.image && (
                    <div className="overflow-hidden rounded-lg border-2 border-gray-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={804}
                        height={452}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-base font-extrabold text-primary">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs font-medium text-primary">
                    {item.issuer}
                  </p>
                  
                  {item.date && (
                    <p className="text-xs text-muted-foreground">
                      📅 {item.date}
                    </p>
                  )}
                </article>
              ))}
            </div>
            
            {/* Modal for Certificate Details */}
            {selectedCert && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedCert(null)}
              >
                  <div
                    className="relative bg-white rounded-2xl p-4 max-w-lg w-full mx-4 shadow-2xl border-2 border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <X className="size-5" />
                    </button>

                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 pr-8">
                      {selectedCert.name}
                    </h3>

                    {selectedCert.description && selectedCert.description.length > 0 && (
                      <div className="mt-3">
                        <h4 className="mb-2 text-sm lg:text-base font-semibold text-gray-900">Kỹ năng có được:</h4>
                        <ul className="space-y-1.5">
                          {selectedCert.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-gray-700">
                              <span className="mt-0.5 text-sm text-green-500 font-bold">✓</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* SKILLS */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">💻</span>
            <h2 className="text-lg font-bold lg:text-xl">KỸ NĂNG</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => (
              <div
                key={index}
                className="rounded-xl border-2 bg-secondary/30 p-4 transition-shadow hover:shadow-xl"
              >
                <h3 className="mb-3 text-sm font-semibold">{category.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => {
                    const skillDescriptions: { [key: string]: string } = {
                      "TCP/IP": "Giao thức truyền tải dữ liệu qua mạng Internet, bao gồm TCP (Transmission Control Protocol) và IP (Internet Protocol). TCP đảm bảo việc truyền dữ liệu đáng tin cậy, trong khi IP định tuyến các gói dữ liệu đến đúng đích.",
                      "Mô hình OSI": "Mô hình 7 tầng (Physical, Data Link, Network, Transport, Session, Presentation, Application) mô tả cách dữ liệu được truyền từ ứng dụng này sang ứng dụng khác qua mạng.",
                      "LAN/WAN": "LAN (Local Area Network) là mạng cục bộ trong phạm vi nhỏ như văn phòng, tòa nhà. WAN (Wide Area Network) là mạng diện rộng kết nối nhiều LAN qua khoảng cách lớn.",
                      "Routing & Switching": "Routing là quá trình định tuyến các gói dữ liệu giữa các mạng khác nhau. Switching là chuyển tiếp các frame trong cùng một mạng LAN.",
                      "Windows Server": "Hệ điều hành server của Microsoft, cung cấp các dịch vụ như Active Directory, DNS, DHCP, File Server, và quản lý tài nguyên mạng.",
                      "Linux": "Hệ điều hành mã nguồn mở, được sử dụng rộng rãi cho server và hệ thống mạng. Hỗ trợ các công cụ quản trị mạng và bảo mật mạnh mẽ.",
                      "DNS": "Domain Name System - dịch vụ chuyển đổi tên miền (như google.com) thành địa chỉ IP (như 8.8.8.8) để máy tính có thể giao tiếp với nhau.",
                      "DHCP": "Dynamic Host Configuration Protocol - tự động cấp phát địa chỉ IP, subnet mask, gateway và DNS server cho các thiết bị trong mạng.",
                      "Web Server": "Máy chủ lưu trữ và phân phối nội dung web đến người dùng qua giao thức HTTP/HTTPS. Ví dụ: Apache, Nginx, IIS.",
                      "Cloud Computing": "Điện toán đám mây - cung cấp tài nguyên máy tính (server, storage, database) qua Internet. Các nhà cung cấp: AWS, Azure, Google Cloud.",
                      "Virtualization": "Ảo hóa - tạo nhiều máy ảo trên một máy vật lý, giúp tận dụng tài nguyên và giảm chi phí phần cứng.",
                      "VMware": "Phần mềm ảo hóa phổ biến, cho phép chạy nhiều hệ điều hành trên cùng một máy tính vật lý.",
                      "Hyper-V": "Công nghệ ảo hóa của Microsoft, tích hợp trong Windows Server và Windows 10/11 Pro.",
                      "Network Security": "Bảo mật mạng - các biện pháp bảo vệ hệ thống mạng khỏi các mối đe dọa như tấn công, virus, và truy cập trái phép.",
                      "Firewall": "Tường lửa - hệ thống bảo mật kiểm soát lưu lượng mạng vào/ra dựa trên các quy tắc được định nghĩa trước.",
                      "VPN": "Virtual Private Network - mạng riêng ảo, tạo kết nối an toàn và mã hóa qua Internet để truy cập mạng từ xa.",
                      "Access Control": "Kiểm soát truy cập - quản lý quyền truy cập của người dùng vào tài nguyên hệ thống và mạng.",
                      "Wireshark": "Công cụ phân tích gói mạng mã nguồn mở, giúp capture và phân tích lưu lượng mạng để khắc phục sự cố.",
                      "Packet Tracer": "Phần mềm mô phỏng mạng của Cisco, dùng để thiết kế, cấu hình và kiểm tra các mạng ảo.",
                      "Microsoft Office": "Bộ ứng dụng văn phòng của Microsoft bao gồm Word, Excel, PowerPoint, Outlook để tạo tài liệu và báo cáo.",
                      "Git": "Hệ thống quản lý phiên bản phân tán, dùng để theo dõi thay đổi mã nguồn và hợp tác trong phát triển phần mềm.",
                      "Làm việc nhóm": "Khả năng hợp tác hiệu quả với các thành viên trong nhóm để đạt mục tiêu chung.",
                      "Phân tích": "Kỹ năng phân tích vấn đề, xác định nguyên nhân và đưa ra giải pháp phù hợp.",
                      "Xử lý sự cố": "Khả năng phát hiện, chẩn đoán và khắc phục các sự cố kỹ thuật trong hệ thống mạng.",
                      "Giao tiếp": "Kỹ năng truyền đạt thông tin rõ ràng, hiệu quả với đồng nghiệp và khách hàng."
                    };
                    const description = skillDescriptions[skill] || `Kỹ năng về ${skill}`;
                    return (
                      <div key={skillIndex} className="relative group">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                          {skill}
                        </span>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                          <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-xl p-4 shadow-2xl max-w-xs w-64 border-2 border-pink-500/30">
                            <h4 className="font-bold text-base lg:text-lg mb-1.5">{skill}</h4>
                            <p className="text-xs lg:text-sm leading-relaxed">{description}</p>
                            <div 
                              className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-[4px] border-transparent border-t-pink-600"
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AWARDS */}
        {awards.length > 0 && (
          <section>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-4xl">⭐</span>
              <h2 className="text-4xl font-bold lg:text-5xl">THÀNH TÍCH & GIẢI THƯỞNG</h2>
            </div>
            <div className="space-y-8">
              {awards.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border-l-4 border-primary bg-secondary/30 p-8 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-lg font-medium text-primary mt-2">{item.organization}</p>
                    </div>
                    {item.period && (
                      <div className="mt-3 flex items-center gap-2 text-base text-muted-foreground sm:mt-0">
                        <span className="text-xl">📅</span>
                        <span>{item.period}</span>
                      </div>
                    )}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                        <span className="mt-2 text-lg text-primary">{'//'}</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">💼</span>
              <h2 className="text-lg font-bold lg:text-xl">KINH NGHIỆM - PROJECT & ĐỒ ÁN</h2>
            </div>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border-l-4 border-primary bg-secondary/30 p-4 lg:p-5 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-xs lg:text-sm font-semibold text-primary mt-0.5">{item.organization}</p>
                    </div>
                    <div className="mt-1.5 flex flex-col gap-1.5 text-xs text-muted-foreground sm:mt-0 sm:items-end">
                      {item.period && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">📅</span>
                          <span className="font-medium">{item.period}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">📍</span>
                          <span className="font-medium">{item.location}</span>
                        </div>
                      )}
                      {item.title.includes("AWS") && (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-sm">👤</span>
                          <span className="font-bold text-gray-900">Vai trò: Leader</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <span className="mt-0.5 text-sm text-primary">{'//'}</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
    </div>
  );
}
