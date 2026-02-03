import { Home, FolderOpen, Settings, Users, BookOpen, Phone } from "lucide-react";

/** Nav items for header pill + floating nav (href without # = section id) */
export const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Services", href: "#services", icon: Settings },
  { label: "About", href: "#about", icon: Users },
  { label: "Blog", href: "#blog", icon: BookOpen },
];

export const CONTACT_NAV = { label: "Contact", href: "#contact", icon: Phone };
export const CONTACT_HREF = "#contact";
export const HERO_SCROLL_THRESHOLD = 250;
export const SECTION_VIEW_OFFSET = 150;
export const SCROLL_OFFSET = 80;
