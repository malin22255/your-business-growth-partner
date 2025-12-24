import { Building2, TrendingUp, Users, Award } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    {
      name: "宁波银行",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=200&h=200&fit=crop",
      industry: "金融银行",
      description: "为银行客户提供专属权益服务，有效提升客户粘性与活跃度",
      highlight: "提升粘性",
      stats: { users: "50万+", growth: "35%" }
    },
    {
      name: "杭港地铁",
      logo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=200&fit=crop",
      industry: "交通出行",
      description: "为地铁乘客提供餐饮权益，助力消耗饭卡余额，提升用户满意度",
      highlight: "消耗饭卡",
      stats: { users: "100万+", growth: "42%" }
    },
    {
      name: "深圳市龙岗区政府",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
      industry: "政务服务",
      description: "通过权益发放拉动区域消费，助力政府惠民工程落地实施",
      highlight: "拉动区消费",
      stats: { users: "200万+", growth: "28%" }
    },
    {
      name: "舟山普渔乐",
      logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
      industry: "海洋产业",
      description: "为渔业从业者提供专属福利权益，提升行业归属感和满意度",
      highlight: "专属福利",
      stats: { users: "10万+", growth: "45%" }
    },
  ];

  const achievements = [
    { icon: Building2, value: "500+", label: "服务企业" },
    { icon: Users, value: "1000万+", label: "触达用户" },
    { icon: TrendingUp, value: "30%+", label: "平均流水提升" },
    { icon: Award, value: "98%", label: "客户满意度" },
  ];

  return (
    <section id="clients" className="py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-brand-gold-light/10 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide">
            成功案例
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            <span className="text-gradient-gold">政企标杆</span>客户
            <br />信赖之选
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            从金融银行到政府机构，从交通出行到产业平台，我们为各行业头部客户提供专业权益服务
          </p>
        </div>

        {/* Achievements stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 text-center hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{item.value}</div>
                <div className="text-muted-foreground text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-start gap-6 mb-6">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-secondary/50 flex-shrink-0 border border-border/50 shadow-lg">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {client.industry}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
                        {client.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {client.description}
                </p>

                {/* Stats */}
                <div className="flex gap-8 pt-6 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">{client.stats.users}</div>
                    <div className="text-sm text-muted-foreground">服务用户</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">↑{client.stats.growth}</div>
                    <div className="text-sm text-muted-foreground">流水提升</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">更多合作伙伴</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["国有银行", "城市商业银行", "省级政府机构", "大型国企", "上市公司"].map((badge) => (
              <span
                key={badge}
                className="px-6 py-3 rounded-full bg-secondary/50 border border-border/50 text-foreground/80 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;