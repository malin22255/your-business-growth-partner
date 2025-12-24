import { Smartphone, Globe, CreditCard, MessageSquare } from "lucide-react";

const CooperationSection = () => {
  const methods = [
    {
      icon: Smartphone,
      title: "小程序对接",
      description: "无缝嵌入微信小程序，用户一键获取权益",
      features: ["快速集成", "微信生态", "便捷体验"]
    },
    {
      icon: MessageSquare,
      title: "公众号对接",
      description: "公众号菜单直达权益中心，提升粉丝价值",
      features: ["菜单集成", "消息推送", "粉丝运营"]
    },
    {
      icon: Globe,
      title: "H5页面对接",
      description: "独立H5页面，支持任意渠道分发推广",
      features: ["多渠道分发", "品牌定制", "灵活配置"]
    },
    {
      icon: CreditCard,
      title: "会员卡售卖",
      description: "直接售卖会员卡产品，开箱即用的权益方案",
      features: ["开箱即用", "标准化产品", "快速上线"]
    },
  ];

  return (
    <section id="cooperation" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-brand-gold-light/10 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide">
            灵活接入
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            多种<span className="text-gradient-gold">合作方式</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            支持多种对接方式，满足不同场景需求，快速接入无忧
          </p>
        </div>

        {/* Methods grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-primary/30 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-brand-gold-dark flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <method.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {method.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 justify-center">
                {method.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-border shadow-card">
            <span className="text-muted-foreground">不确定哪种方式适合您？</span>
            <a href="#hero" className="text-primary font-semibold hover:underline">
              联系我们咨询 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;