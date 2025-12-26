# BÁO CÁO ĐỒ ÁN
## XÂY DỰNG WEBSITE BLOG CÁ NHÂN "NHƯ TECH DIARY"

**Sinh viên thực hiện:** Nguyễn Trình Quỳnh Như  
**Lớp:** 22DTHE4  
**Ngành:** Công nghệ thông tin - Chuyên ngành Mạng máy tính  
**Trường:** Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)

---

## MỤC LỤC

1. [CHƯƠNG 1: TỔNG QUAN VỀ DỰ ÁN](#chương-1-tổng-quan-về-dự-án)
2. [CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ SỬ DỤNG](#chương-2-cơ-sở-lý-thuyết-và-công-nghệ-sử-dụng)
3. [CHƯƠNG 3: THIẾT KẾ VÀ TRIỂN KHAI HỆ THỐNG](#chương-3-thiết-kế-và-triển-khai-hệ-thống)
4. [CHƯƠNG 4: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN](#chương-4-kết-luận-và-hướng-phát-triển)

---

## CHƯƠNG 1: TỔNG QUAN VỀ DỰ ÁN

### 1.1. Giới thiệu dự án

**Như Tech Diary** là một website blog cá nhân được xây dựng nhằm mục đích chia sẻ kiến thức về mạng máy tính, công nghệ và lập trình. Website được phát triển như một portfolio cá nhân, giúp giới thiệu bản thân, trình bày các thành tích học tập, kinh nghiệm làm việc và các bài viết kỹ thuật.

### 1.2. Mục tiêu dự án

- **Mục tiêu chính:**
  - Xây dựng một website blog cá nhân chuyên nghiệp, hiện đại và dễ sử dụng
  - Tạo nền tảng chia sẻ kiến thức về JavaScript, mạng máy tính và công nghệ
  - Giới thiệu portfolio cá nhân với các thành tích, kinh nghiệm và kỹ năng
  - Tạo kênh liên hệ và kết nối với cộng đồng

- **Mục tiêu kỹ thuật:**
  - Áp dụng các công nghệ web hiện đại (Next.js, React, TypeScript)
  - Đảm bảo hiệu suất cao với Static Site Generation (SSG)
  - Thiết kế responsive, tối ưu cho nhiều thiết bị
  - Tạo trải nghiệm người dùng tốt với giao diện đẹp mắt và dễ sử dụng

### 1.3. Phạm vi dự án

Dự án bao gồm các thành phần chính:

1. **Trang chủ (Homepage):** Giới thiệu tổng quan về cá nhân với slogan và hình ảnh
2. **Trang Blog:** Hiển thị danh sách bài viết được phân loại theo chủ đề, có chức năng tìm kiếm
3. **Trang About:** Giới thiệu chi tiết về bản thân, kỹ năng, định hướng và quá trình học tập
4. **Trang Achievements:** Trình bày học vấn, chứng chỉ, kỹ năng và kinh nghiệm làm việc
5. **Trang Contact:** Form liên hệ và thông tin liên lạc

### 1.4. Đối tượng sử dụng

- **Đối tượng chính:** Cộng đồng lập trình viên, sinh viên công nghệ thông tin
- **Đối tượng phụ:** Nhà tuyển dụng, người quan tâm đến lĩnh vực mạng máy tính và công nghệ

---

## CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ SỬ DỤNG

### 2.1. Cơ sở lý thuyết

#### 2.1.1. Web Development và Frontend Framework

**React.js** là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook, sử dụng component-based architecture để xây dựng giao diện người dùng. React sử dụng Virtual DOM để tối ưu hóa hiệu suất render.

**Next.js** là một framework React được xây dựng trên nền tảng React, cung cấp các tính năng như:
- **Server-Side Rendering (SSR):** Render trang trên server trước khi gửi đến client
- **Static Site Generation (SSG):** Tạo các trang tĩnh tại thời điểm build
- **API Routes:** Tạo API endpoints trong ứng dụng Next.js
- **File-based Routing:** Định tuyến dựa trên cấu trúc thư mục
- **Image Optimization:** Tối ưu hóa hình ảnh tự động

#### 2.1.2. TypeScript

**TypeScript** là một superset của JavaScript, thêm static typing vào ngôn ngữ. TypeScript giúp:
- Phát hiện lỗi sớm trong quá trình phát triển
- Cải thiện khả năng bảo trì code
- Tăng trải nghiệm phát triển với IntelliSense và autocomplete
- Đảm bảo type safety

#### 2.1.3. MDX (Markdown + JSX)

**MDX** là một định dạng cho phép viết JSX trong Markdown. MDX cho phép:
- Viết nội dung bằng Markdown (dễ đọc, dễ viết)
- Nhúng các React components vào nội dung
- Tạo các bài viết blog động và tương tác

#### 2.1.4. CSS Framework và Styling

**Tailwind CSS** là một utility-first CSS framework, cho phép:
- Xây dựng giao diện nhanh chóng với các utility classes
- Responsive design dễ dàng với breakpoints
- Tùy biến theme và màu sắc linh hoạt
- Giảm kích thước file CSS cuối cùng với tree-shaking

### 2.2. Công nghệ và công cụ sử dụng

#### 2.2.1. Core Technologies

| Công nghệ | Phiên bản | Mục đích sử dụng |
|----------|----------|------------------|
| **Next.js** | 14.2.3 | Framework React chính, xử lý routing và SSG |
| **React** | ^18 | Thư viện UI, xây dựng components |
| **TypeScript** | ^5 | Ngôn ngữ lập trình, type safety |
| **Node.js** | - | Runtime environment |

#### 2.2.2. Styling và UI

| Công nghệ | Phiên bản | Mục đích sử dụng |
|----------|----------|------------------|
| **Tailwind CSS** | ^3.4.1 | Utility-first CSS framework |
| **tailwindcss-animate** | ^1.0.7 | Animation utilities cho Tailwind |
| **lucide-react** | ^0.379.0 | Icon library |

#### 2.2.3. Content Management

| Công nghệ | Phiên bản | Mục đích sử dụng |
|----------|----------|------------------|
| **Velite** | 0.1.0-rc.3 | Content collection, chuyển đổi MDX thành data layer |
| **rehype-pretty-code** | ^0.13.2 | Syntax highlighting cho code blocks |
| **rehype-slug** | ^6.0.0 | Tạo slug cho headings |
| **rehype-autolink-headings** | ^7.1.0 | Tự động tạo links cho headings |
| **shiki** | ^1.6.0 | Syntax highlighter engine |

#### 2.2.4. Utilities và Helpers

| Công nghệ | Phiên bản | Mục đích sử dụng |
|----------|----------|------------------|
| **clsx** | ^2.1.1 | Utility để kết hợp class names |
| **tailwind-merge** | ^2.3.0 | Merge Tailwind classes |
| **class-variance-authority** | ^0.7.0 | Quản lý component variants |

#### 2.2.5. Development Tools

| Công cụ | Phiên bản | Mục đích sử dụng |
|---------|----------|------------------|
| **ESLint** | ^8 | Linter cho JavaScript/TypeScript |
| **Prettier** | ^3.2.5 | Code formatter |
| **Git** | - | Version control |

### 2.3. Kiến trúc hệ thống

#### 2.3.1. Kiến trúc tổng quan

Website được xây dựng theo kiến trúc **JAMstack** (JavaScript, APIs, Markup):
- **Static Generation:** Các trang được generate tại build time
- **Client-side Navigation:** Sử dụng Next.js routing để điều hướng mượt mà
- **Content Management:** Sử dụng MDX files để quản lý nội dung blog

#### 2.3.2. Cấu trúc thư mục

```
next-mdx-blog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Trang chủ
│   │   ├── blog/              # Trang blog và chi tiết bài viết
│   │   ├── about/             # Trang giới thiệu
│   │   ├── achievements/      # Trang thành tích
│   │   └── contact/           # Trang liên hệ
│   ├── components/            # React components
│   ├── config/                # Cấu hình site
│   ├── constants/             # Constants và navigation
│   ├── content/               # MDX blog posts
│   ├── lib/                   # Utilities và helpers
│   └── styles/                # Global CSS
├── public/                    # Static assets
│   └── images/                # Hình ảnh
├── velite.config.ts           # Cấu hình Velite
└── package.json               # Dependencies
```

---

## CHƯƠNG 3: THIẾT KẾ VÀ TRIỂN KHAI HỆ THỐNG

### 3.1. Thiết kế giao diện

#### 3.1.1. Design System

**Màu sắc chủ đạo:**
- **Background:** Màu hồng nhạt (#FDF2F8 - pink-50) cho các trang
- **Primary Color:** Màu hồng đậm (#C2185B - HSL: 335 55% 45%) cho các elements chính
- **Text:** Màu xám đậm (#1F2937) cho nội dung chính
- **Borders:** Màu xám nhạt (#E5E7EB) với hiệu ứng 3D shadow

**Typography:**
- Font system: System fonts (sans-serif)
- Heading sizes: Từ text-2xl đến text-7xl tùy theo mức độ quan trọng
- Body text: text-lg đến text-2xl cho nội dung chính

**Spacing và Layout:**
- Container max-width: 1600px
- Padding: 2rem cho container
- Gap spacing: Sử dụng Tailwind spacing scale (4, 6, 8, 10, 12...)

#### 3.1.2. Responsive Design

Website được thiết kế responsive với các breakpoints:
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** > 1024px (xl, 2xl)
- **Large Desktop:** > 1920px (3xl)

### 3.2. Các trang chính và chức năng

#### 3.2.1. Trang chủ (Homepage)

**Thiết kế:**
- Layout 2 cột: 40% hình ảnh bên trái, 60% nội dung bên phải
- Background gradient: Từ cam nhạt đến hồng nhạt
- Hình ảnh avatar: Hình chữ nhật đứng, kích thước responsive

**Nội dung:**
- Welcome message: "Xin chào, mình là Quỳnh Như" (nổi bật nhất)
- Slogan: "Hành động thay lời nói, thành công thay minh chứng"
- Tên: "QUỲNH NHƯ" (nhỏ, góc dưới phải của slogan)
- Title: "Kỹ sư Mạng Máy tính"
- Social media icons: GitHub, Facebook, LinkedIn
- Navigation buttons: Blog, About, Kinh nghiệm & Thành tích, Kết nối

**Công nghệ sử dụng:**
- Next.js Image component cho tối ưu hình ảnh
- CSS Grid cho layout 2 cột
- Tailwind CSS cho styling

#### 3.2.2. Trang Blog

**Chức năng chính:**
- Hiển thị danh sách bài viết được phân loại theo chủ đề
- Tìm kiếm bài viết theo từ khóa (tên, mô tả, slug)
- Hiển thị bài viết theo categories: Cơ bản, ES6+ Features, Functions, Data Structures, Advanced Concepts, Storage & API

**Thiết kế:**
- Mỗi bài viết hiển thị trong card với:
  - Hình ảnh thumbnail (aspect-video)
  - Ngày đăng (màu primary)
  - Tiêu đề (hover effect)
  - Mô tả (line-clamp-5)
  - Link "Đọc thêm" với arrow animation

**Tính năng:**
- Search bar với icon Search
- Category grouping với divider line
- Responsive grid: 1 cột (mobile), 2 cột (tablet), 3 cột (desktop)
- Hover effects: Shadow, border color change, translate-y

**Công nghệ:**
- `useState` và `useMemo` cho search functionality
- Client Component ("use client")
- Dynamic routing với `[...slug]` cho chi tiết bài viết

#### 3.2.3. Trang About

**Cấu trúc:**

1. **Card thông tin cá nhân:**
   - Avatar hình tròn (border primary color)
   - Tên và chức danh
   - Thông tin trường học và lớp
   - Social media links

2. **Định hướng & Mục tiêu nghề nghiệp:**
   - Khung 3D với shadow effect
   - Nội dung về mục tiêu nghề nghiệp

3. **Giới thiệu bản thân:**
   - Khung 3D
   - Nội dung về bản thân và kinh nghiệm

4. **Kỹ năng chuyên môn:**
   - Grid 2 cột
   - 6 nhóm kỹ năng với icons
   - Tooltip hiển thị chi tiết khi hover

5. **Quá trình học tập (Timeline):**
   - Timeline ngang từ 2022 đến 2026
   - Mỗi năm có circle với tooltip
   - Tooltip xen kẽ trên/dưới
   - Gradient line connecting các năm

6. **Liên hệ với tôi:**
   - Khung 3D full width
   - Nội dung ngắn gọn

**Công nghệ:**
- Client Component với state management
- Tooltip với CSS positioning
- Timeline với flexbox và absolute positioning

#### 3.2.4. Trang Achievements

**Các section:**

1. **Học vấn:**
   - Icon GraduationCap
   - Khung nổi bật với hover effect
   - Thông tin: Trường, ngành, chuyên ngành
   - GPA: 3.0 và Ngoại ngữ: B1

2. **Chứng chỉ & Bằng cấp:**
   - Grid 2 cột
   - Mỗi chứng chỉ có hình ảnh
   - Click để mở modal hiển thị:
     - Tên chứng chỉ
     - Kỹ năng có được (với checkmark xanh)
     - Nút đóng (X)

3. **Kỹ năng:**
   - Grid 3 cột
   - 6 categories: Kiến thức Mạng, Hệ thống, Cloud & Ảo hóa, Bảo mật, Công cụ, Kỹ năng mềm
   - Mỗi skill có tooltip khi hover

4. **Kinh nghiệm - Project & Đồ án:**
   - Danh sách các project
   - Mỗi project có:
     - Tiêu đề và tổ chức
     - Thời gian và địa điểm
     - Vai trò (nếu có)
     - Mô tả chi tiết với "//" prefix

**Công nghệ:**
- Modal với backdrop blur
- State management cho modal visibility
- Tooltip tương tự trang About

#### 3.2.5. Trang Contact

**Layout 2 cột:**

**Cột trái - Thông tin liên hệ:**
- Tiêu đề và mô tả
- Email: nguyentrinhquynhnhu.2004@gmail.com
- Điện thoại: 0357 292 518 (với icon Phone)
- Mạng xã hội: GitHub, Facebook, LinkedIn
- Thông tin cá nhân

**Cột phải - Form liên hệ:**
- Input fields: Tên, Email, Chủ đề, Nội dung
- Submit button với loading state
- Success message sau khi submit

**Công nghệ:**
- Form handling với `useState`
- Client-side validation
- Simulated form submission

### 3.3. Components và Utilities

#### 3.3.1. Site Header

**Chức năng:**
- Logo và tên site ("Như Tech Diary")
- Navigation menu: Blog, About, Thành tích, Liên hệ
- Mobile menu với hamburger icon
- Sticky header

**Công nghệ:**
- Next.js Image cho logo
- Mobile responsive với state management

#### 3.3.2. Page Header

Component tái sử dụng cho tiêu đề trang:
- Title (large, bold)
- Description (muted color)

#### 3.3.3. Blog Post Components

- **BlogCard:** Hiển thị preview bài viết
- **MDXContent:** Render nội dung MDX với syntax highlighting
- **TableOfContents:** Tự động tạo từ headings

### 3.4. Content Management

#### 3.4.1. Velite Configuration

Velite được cấu hình để:
- Đọc MDX files từ `src/content/blog/`
- Parse metadata (title, description, date, image, etc.)
- Generate type-safe data layer
- Output vào `.velite/` directory

**Schema:**
```typescript
{
  slug: string,
  title: string (max 99),
  description: string (max 999),
  date: ISO date,
  published: boolean,
  image: string,
  author: string,
  body: MDX content
}
```

#### 3.4.2. MDX Processing

MDX được xử lý với các rehype plugins:
- **rehype-slug:** Tạo slug cho headings
- **rehype-pretty-code:** Syntax highlighting với theme "dracula"
- **rehype-autolink-headings:** Tự động tạo anchor links

### 3.5. Tối ưu hóa hiệu suất

#### 3.5.1. Image Optimization

- Sử dụng Next.js Image component
- Lazy loading cho images không priority
- Priority loading cho images trên fold
- Responsive images với srcset

#### 3.5.2. Code Splitting

- Next.js tự động code splitting theo route
- Dynamic imports cho components lớn

#### 3.5.3. Static Generation

- Tất cả blog posts được generate tại build time
- `generateStaticParams` cho dynamic routes
- Pre-rendered HTML cho SEO tốt hơn

### 3.6. Tính năng đặc biệt

#### 3.6.1. Search Functionality

- Real-time search với `useState` và `useMemo`
- Tìm kiếm trong: title, description, slug
- Case-insensitive search

#### 3.6.2. Category Grouping

- Tự động phân loại bài viết theo slug patterns
- Hiển thị theo nhóm với tiêu đề category
- Sắp xếp theo số lượng bài viết

#### 3.6.3. Interactive Elements

- **Tooltips:** Hiển thị thông tin chi tiết khi hover
- **Modals:** Hiển thị thông tin chứng chỉ khi click
- **Hover Effects:** Shadow, translate, color transitions
- **Animations:** Smooth transitions với Tailwind

---

## CHƯƠNG 4: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 4.1. Kết quả đạt được

#### 4.1.1. Về mặt chức năng

✅ **Hoàn thành các trang chính:**
- Trang chủ với layout chuyên nghiệp
- Trang Blog với phân loại và tìm kiếm
- Trang About với timeline học tập
- Trang Achievements với modal và tooltips
- Trang Contact với form liên hệ

✅ **Tính năng nổi bật:**
- Phân loại bài viết tự động
- Tìm kiếm real-time
- Responsive design hoàn chỉnh
- Interactive elements (tooltips, modals)
- SEO-friendly với SSG

#### 4.1.2. Về mặt kỹ thuật

✅ **Công nghệ hiện đại:**
- Next.js 14 với App Router
- TypeScript cho type safety
- MDX cho content management
- Tailwind CSS cho styling

✅ **Hiệu suất:**
- Static Site Generation
- Image optimization
- Code splitting tự động
- Fast page loads

✅ **Code quality:**
- Type-safe với TypeScript
- Component-based architecture
- Reusable components
- Clean code structure

### 4.2. Những khó khăn và giải pháp

#### 4.2.1. Khó khăn gặp phải

1. **Layout phức tạp:**
   - Vấn đề: Thiết kế 2 cột với responsive, timeline ngang
   - Giải pháp: Sử dụng CSS Grid và Flexbox, media queries

2. **State management:**
   - Vấn đề: Quản lý state cho modals, tooltips, search
   - Giải pháp: Sử dụng React hooks (useState, useMemo)

3. **Image optimization:**
   - Vấn đề: Kích thước và format ảnh không đồng nhất
   - Giải pháp: Sử dụng Next.js Image component với optimization

4. **Content organization:**
   - Vấn đề: Phân loại và tìm kiếm bài viết
   - Giải pháp: Tạo category mapping và search algorithm

#### 4.2.2. Bài học kinh nghiệm

- Hiểu rõ về Next.js App Router và SSG
- Làm việc với MDX và content management
- Thiết kế responsive với Tailwind CSS
- Quản lý state và interactive UI elements
- Tối ưu hóa hiệu suất website

### 4.3. Hạn chế của dự án

1. **Backend:**
   - Chưa có backend server
   - Form contact chỉ simulate submission
   - Chưa có authentication system

2. **Content Management:**
   - Phải edit MDX files trực tiếp
   - Chưa có admin panel
   - Chưa có CMS integration

3. **Tính năng:**
   - Chưa có comment system
   - Chưa có RSS feed
   - Chưa có dark mode
   - Chưa có multi-language support

### 4.4. Hướng phát triển

#### 4.4.1. Ngắn hạn (1-3 tháng)

1. **Backend Integration:**
   - Tích hợp API cho form contact
   - Thêm email notification
   - Analytics tracking

2. **Content Features:**
   - RSS feed generation
   - Sitemap.xml
   - SEO optimization (meta tags, Open Graph)

3. **UI/UX Improvements:**
   - Dark mode toggle
   - Loading states
   - Error boundaries
   - Accessibility improvements

#### 4.4.2. Trung hạn (3-6 tháng)

1. **CMS Integration:**
   - Tích hợp Headless CMS (Contentful, Strapi)
   - Admin panel để quản lý content
   - Media library management

2. **Advanced Features:**
   - Comment system (Disqus hoặc custom)
   - Newsletter subscription
   - Social sharing buttons
   - Reading time estimation

3. **Performance:**
   - Service Worker cho offline support
   - Caching strategy
   - CDN integration

#### 4.4.3. Dài hạn (6-12 tháng)

1. **Multi-language:**
   - i18n support
   - Vietnamese và English
   - Language switcher

2. **Advanced Blog Features:**
   - Tag system
   - Related posts
   - Author pages
   - Archive pages

3. **Community Features:**
   - User accounts
   - Bookmarking
   - Reading history
   - Personalization

### 4.5. Kết luận

Dự án **"Như Tech Diary"** đã được hoàn thành với các mục tiêu ban đầu:

✅ Xây dựng thành công website blog cá nhân chuyên nghiệp  
✅ Áp dụng các công nghệ web hiện đại (Next.js, React, TypeScript)  
✅ Thiết kế responsive và tối ưu hiệu suất  
✅ Tạo trải nghiệm người dùng tốt với giao diện đẹp mắt  

Dự án không chỉ là một website blog đơn giản mà còn là một portfolio cá nhân hoàn chỉnh, thể hiện được kỹ năng lập trình web và khả năng áp dụng công nghệ vào thực tế. Với kiến trúc mở rộng được và code base sạch, dự án có thể phát triển thêm nhiều tính năng trong tương lai.

---

## TÀI LIỆU THAM KHẢO

1. Next.js Documentation. (2024). *Next.js 14 Documentation*. https://nextjs.org/docs

2. React Documentation. (2024). *React Documentation*. https://react.dev

3. Tailwind CSS Documentation. (2024). *Tailwind CSS Documentation*. https://tailwindcss.com/docs

4. MDX Documentation. (2024). *MDX Documentation*. https://mdxjs.com

5. Velite Documentation. (2024). *Velite Documentation*. https://velite.js.org

6. TypeScript Documentation. (2024). *TypeScript Handbook*. https://www.typescriptlang.org/docs

---

**Ngày hoàn thành:** Tháng 1, 2025  
**Phiên bản:** 1.0.0

