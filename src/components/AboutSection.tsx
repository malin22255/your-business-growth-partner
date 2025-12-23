import { Target, Award, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "精准拉新",
      description: "通过丰富的权益资源，助力企业快速获取目标用户，降低获客成本",
    },
    {
      icon: Zap,
      title: "高效促活",
      description: "多元化权益激励，有效提升用户活跃度与黏性，增强用户留存",
    },
    {
      icon: Award,
      title: "提升流水",
      description: "为政企客户提供专业解决方案，助力业务增长与流水提升",
    },
    {
      icon: Users,
      title: "专属服务",
      description: "一对一专属顾问，量身定制权益方案，全程跟踪服务保障",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-medium mb-4">
              关于我们
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              杭州城际网<br />
              <span className="text-gradient-gold">信息科技有限公司</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              城星卡是杭州城际网信息科技有限公司旗下核心产品，专注为企业提供一站式权益服务解决方案。
              我们整合餐饮、出行、生活、健康、娱乐等多元权益资源，助力企业实现高效拉新促活，
              赋能政企客户提升业务流水。
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              凭借专业的服务团队和丰富的行业经验，我们已服务超过500家企业客户，
              累计发放权益价值超过1000万，成为众多企业信赖的权益服务合作伙伴。
            </p>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "服务企业" },
            { value: "1000万+", label: "权益发放" },
            { value: "30%+", label: "平均流水提升" },
            { value: "99%", label: "客户满意度" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-card border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
