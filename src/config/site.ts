import authorAvatar from "../../public/images/author/avatar.jpg";
export const siteConfig = {
  name: "Như Tech Diary",
  description:
    "Blog cá nhân về mạng máy tính, công nghệ và lập trình. Chia sẻ kiến thức và kinh nghiệm từ một kỹ sư mạng máy tính.",
  author: "Nguyễn Trình Quỳnh Như",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/QuynhNhuNT",
    linkedin: "https://www.linkedin.com/in/nh%C6%B0-nguy%E1%BB%85n-tr%C3%ACnh-qu%E1%BB%B3nh-5957783a1/",
    facebook: "https://www.facebook.com/ng.trinh.quynhnhu",
  },
};

export type SiteConfig = typeof siteConfig;
