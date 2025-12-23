import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "首页", href: "#hero" },
    { label: "服务介绍", href: "#services" },
    { label: "产品优惠", href: "#products" },
    { label: "合作品牌", href: "#partners" },
    { label: "客户案例", href: "#clients" },
    { label: "关于我们", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-amber-500 flex items-center justify-center shadow-glow">
                <span className="text-brand-navy font-bold text-lg">城</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg tracking-tight ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                  城星卡
                </span>
                <span className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                  企业权益服务专家
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="gold" size="lg" onClick={() => setIsContactOpen(true)}>
                联系我们
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground font-medium py-2 hover:text-brand-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4" onClick={() => {
                setIsContactOpen(true);
                setIsMobileMenuOpen(false);
              }}>
                联系我们
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default Header;
