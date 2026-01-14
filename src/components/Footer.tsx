import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import { Button } from "./ui/button";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-secondary text-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold to-amber-500 flex items-center justify-center">
                  <span className="text-brand-navy font-bold text-xl">城</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">城星卡</h3>
                  <p className="text-muted-foreground text-sm">企业权益服务专家</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                杭州城际网信息科技有限公司旗下核心产品，专注为企业提供一站式权益服务解决方案，
                助力企业拉新促活，赋能政企提升流水。
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold mb-6">快速导航</h4>
              <ul className="space-y-3">
                {["首页", "服务介绍", "产品优惠", "合作品牌", "关于我们"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item === "首页" ? "hero" : item === "服务介绍" ? "services" : item === "产品优惠" ? "products" : item === "合作品牌" ? "partners" : "about"}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6">联系我们</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">浙江省杭州市</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-muted-foreground">400-XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-muted-foreground">business@chengxingcard.com</span>
                </li>
              </ul>
              <Button 
                variant="gold" 
                className="mt-6"
                onClick={() => setIsContactOpen(true)}
              >
                扫码联系
              </Button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} 杭州城际网信息科技有限公司 版权所有
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                服务条款
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                浙ICP备XXXXXXXX号
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default Footer;
