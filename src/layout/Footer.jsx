import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook, FaGithub } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ChunMengHor", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/chun-menghor-141316445/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8zaUtIlHTqyHBYbs6HxGqA%3D%3D", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/1F2ebzwYAV/", label: "FaFacebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              CHUN MENGHOR<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} CHUN MENGHOR. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};