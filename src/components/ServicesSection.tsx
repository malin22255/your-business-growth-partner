import { 
  Coffee, 
  Plane, 
  Home, 
  Heart, 
  Film, 
  Star,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Coffee,
      title: "餐饮美食",
      description: "星巴克、肯德基、麦当劳等知名品牌，低至5折优惠",
      brands: ["星巴克", "肯德基", "麦当劳", "Mstand", "诺心蛋糕", "21cake"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Plane,
      title: "出行贵宾",
      description: "机场、高铁贵宾厅及快速通道，尊享出行体验",
      brands: ["机场贵宾厅", "高铁贵宾厅", "机场快速通道"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Home,
      title: "生活服务",
      description: "家政保洁、洗衣洗护、家电清洗，品质生活无忧",
      brands: ["京东家政", "轻喜到家", "京东洗衣"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "健康医疗",
      description: "专业体检、口腔护理，守护您和员工的健康",
      brands: ["爱康国宾体检", "瑞尔/瑞泰洁牙"],
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Star,
      title: "酒店出行",
      description: "400-500家高端酒店资源，专属顾问1对1服务",
      brands: ["热门高端酒店", "酒店专属顾问", "AI+酒旅专家"],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Film,
      title: "娱乐会员",
      description: "主流视频平台、音乐平台、办公软件会员，2-5折起",
      brands: ["爱奇艺", "优酷", "腾讯", "芒果TV", "B站", "网易云"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            服务介绍
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            六大核心服务领域
          </h2>
          <p className="text-muted-foreground text-lg">
            覆盖企业员工日常生活方方面面，提供全方位权益解决方案
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-brand-gold/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Brands */}
              <div className="flex flex-wrap gap-2">
                {service.brands.slice(0, 4).map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {brand}
                  </span>
                ))}
                {service.brands.length > 4 && (
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    +{service.brands.length - 4}
                  </span>
                )}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
