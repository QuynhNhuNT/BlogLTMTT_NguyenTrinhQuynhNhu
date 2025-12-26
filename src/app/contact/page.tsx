"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Liên hệ với mình
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed">
                Hãy để lại thông tin, mình sẽ phản hồi sớm nhất có thể!
              </p>
            </div>

            <div className="space-y-10">
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  📧 Email
                </h3>
                <a
                  href="mailto:nguyentrinhquynhnhu.2004@gmail.com"
                  className="text-xl lg:text-2xl text-gray-700 hover:text-primary transition-colors break-all"
                >
                  nguyentrinhquynhnhu.2004@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  📱 Số điện thoại
                </h3>
                <a
                  href="tel:0357292518"
                  className="text-xl lg:text-2xl text-gray-700 hover:text-primary transition-colors"
                >
                  0357292518
                </a>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  🌐 Mạng xã hội
                </h3>
                <div className="flex items-center space-x-6">
                  {SOCIALS.map((social) => (
                    <Link
                      key={social.label}
                      href={social.path}
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
                      aria-label={social.label}
                    >
                      <social.icon className="size-8 lg:size-10" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] transition-shadow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  👤 Thông tin cá nhân
                </h3>
                <p className="text-xl lg:text-2xl text-gray-700 mb-2">{siteConfig.author}</p>
                <p className="text-xl lg:text-2xl text-gray-700">Kỹ sư Mạng Máy tính</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-10 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Gửi tin nhắn
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl lg:text-2xl font-semibold text-gray-900 mb-3"
                >
                  Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-lg lg:text-xl border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl lg:text-2xl font-semibold text-gray-900 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-lg lg:text-xl border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Nhập email của bạn"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xl lg:text-2xl font-semibold text-gray-900 mb-3"
                >
                  Chủ đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-lg lg:text-xl border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Nhập chủ đề"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xl lg:text-2xl font-semibold text-gray-900 mb-3"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-6 py-4 text-lg lg:text-xl border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="Nhập nội dung tin nhắn"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-5 rounded-xl text-xl lg:text-2xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi"}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <p className="text-green-800 text-center text-lg lg:text-xl font-medium">
                    Cảm ơn bạn đã để lại thông tin, mình sẽ trả lời sớm nhất có thể !
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

