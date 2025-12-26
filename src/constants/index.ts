import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Rss, Award, Mail } from "lucide-react";

export const NAV_LIST = [
  { label: "Blog", path: "/blog", icon: Rss },
  { label: "About", path: "/about", icon: Bot },
  { label: "Thành tích", path: "/achievements", icon: Award },
  { label: "Liên hệ", path: "/contact", icon: Mail },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "LinkedIn", path: siteConfig.social.linkedin, icon: Icons.linkedin },
];
