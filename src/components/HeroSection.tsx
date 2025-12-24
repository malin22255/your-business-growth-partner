import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const stats = [
    { icon: Users, value: "500+", label: "服务企业" },
    { icon: TrendingUp, value: "30%+", label: "流水提升" },
    { icon: Zap, value: "1000万+", label: "权益发放" },
  ];

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-hero overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl" />
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/80 border border-brand-gold/30 backdrop-blur-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold-light text-sm font-medium">
                杭州城际网信息科技有限公司
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight mb-6 animate-slide-up">
              企业会员权益中台
              <span className="block mt-2 text-gradient-gold">城星卡</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-brand-brown/80 max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              专注于打造<span className="text-primary font-semibold">高频、专属、高感知</span>的会员权益中台，
              <br />
              助力中小企业低成本高效率地提升用户粘性与终身价值，
              <br />
              将用户关系转化为<span className="text-primary font-semibold">持续增值的会员资产</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="gold" size="xl" onClick={() => setIsContactOpen(true)}>
                立即咨询
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-brand-dark/30 text-brand-dark hover:bg-brand-dark/5" asChild>
                <a href="#products">查看权益</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-card/80 border border-brand-gold/20 backdrop-blur-sm hover:border-brand-gold/40 transition-all duration-300 shadow-card"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default HeroSection;