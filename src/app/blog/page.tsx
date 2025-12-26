"use client";

import React, { useState, useMemo } from "react";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Search } from "lucide-react";

// Phân loại bài viết theo chủ đề
const categorizeBlogs = (blogs: typeof allBlogs) => {
  const categoryMap: Record<string, string[]> = {
    "Cơ bản": [
      "hoisting-va-scope",
      "this-keyword-trong-javascript",
      "arrow-functions",
      "template-literals"
    ],
    "ES6+ Features": [
      "destructuring-trong-javascript",
      "spread-va-rest-operators",
      "es6-features-hien-dai",
      "modules-va-import-export"
    ],
    "Functions": [
      "closure-trong-javascript",
      "promise-va-async-await",
      "arrow-functions"
    ],
    "Data Structures": [
      "array-methods-map-filter-reduce",
      "set-va-map",
      "json-va-api"
    ],
    "Advanced Concepts": [
      "event-loop-trong-javascript",
      "classes-va-oop-trong-javascript",
      "error-handling-try-catch",
      "regular-expressions"
    ],
    "Storage & API": [
      "localStorage-va-sessionStorage",
      "json-va-api"
    ],
  };

  const categories: Record<string, typeof allBlogs> = {};

  // Khởi tạo categories
  Object.keys(categoryMap).forEach(cat => {
    categories[cat] = [];
  });

  blogs.forEach((blog) => {
    const slug = blog.slugAsParams || blog.slug || "";
    
    // Tìm category phù hợp (ưu tiên category đầu tiên khớp)
    for (const [category, slugs] of Object.entries(categoryMap)) {
      if (slugs.some(s => slug.includes(s))) {
        categories[category].push(blog);
        break; // Chỉ thêm vào một category
      }
    }
  });

  // Loại bỏ các category rỗng và sắp xếp
  return Object.entries(categories)
    .filter(([_, blogs]) => blogs.length > 0)
    .sort((a, b) => b[1].length - a[1].length); // Sắp xếp theo số lượng bài viết
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const allPublishedBlogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Lọc bài viết theo từ khóa tìm kiếm
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) {
      return allPublishedBlogs;
    }
    
    const query = searchQuery.toLowerCase();
    return allPublishedBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description?.toLowerCase().includes(query) ||
        blog.slugAsParams?.toLowerCase().includes(query) ||
        blog.slug?.toLowerCase().includes(query)
    );
  }, [searchQuery, allPublishedBlogs]);

  // Phân loại bài viết đã lọc
  const categorizedBlogs = useMemo(() => {
    return categorizeBlogs(filteredBlogs);
  }, [filteredBlogs]);

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container max-w-[1600px] py-4 lg:py-6">
      <PageHeader
        title="Blog"
        description="Chia sẻ kiến thức về JavaScript, mạng máy tính và công nghệ"
      />
      
      {/* Search Bar */}
      <div className="my-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Tìm kiếm theo từ khóa có trong tên bài viết và chủ đề..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
      </div>

      <hr className="my-8 border-gray-200 border-2" />

      {categorizedBlogs.length > 0 ? (
        <div className="space-y-10">
          {categorizedBlogs.map(([category, blogs]) => (
            <div key={category} className="space-y-6">
              {/* Category Header */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5">
                  {category}
                </h2>
                <div className="h-1 w-16 bg-primary rounded"></div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                {blogs.map((blog) => (
                  <article
                    key={blog.slug}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:shadow-2xl hover:border-pink-500 hover:-translate-y-1"
                  >
                    {blog.image && (
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      {blog.date && (
                        <p className="mb-2 text-xs font-semibold text-pink-600">
                          {formatDate(blog.date)}
                        </p>
                      )}

                      <h2 className="mb-3 text-lg font-bold leading-tight text-gray-900 group-hover:text-pink-600 transition-colors lg:text-xl">
                        {blog.title}
                      </h2>
                      
                      {blog.description && (
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 line-clamp-4 lg:text-base">
                          {blog.description}
                        </p>
                      )}

                      <Link 
                        href={blog.slug} 
                        className="mt-auto inline-flex items-center text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors"
                      >
                        Đọc thêm
                        <span className="ml-2 text-lg transition-transform group-hover:translate-x-2">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <p className="text-center text-base text-gray-500">
          Không tìm thấy bài viết nào với từ khóa &quot;{searchQuery}&quot;
        </p>
      ) : (
        <p className="text-center text-base text-gray-500">Chưa có bài viết nào</p>
      )}
      </div>
    </div>
  );
}
