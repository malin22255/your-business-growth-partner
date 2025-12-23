const PartnersSection = () => {
  const partners = [
    { name: "星巴克", category: "咖啡" },
    { name: "Mstand", category: "咖啡" },
    { name: "肯德基", category: "快餐" },
    { name: "麦当劳", category: "快餐" },
    { name: "诺心蛋糕", category: "甜点" },
    { name: "21cake", category: "甜点" },
    { name: "爱康国宾", category: "体检" },
    { name: "瑞尔齿科", category: "口腔" },
    { name: "京东家政", category: "家政" },
    { name: "轻喜到家", category: "家政" },
    { name: "爱奇艺", category: "视频" },
    { name: "优酷", category: "视频" },
    { name: "腾讯视频", category: "视频" },
    { name: "芒果TV", category: "视频" },
    { name: "B站", category: "视频" },
    { name: "网易云音乐", category: "音乐" },
    { name: "WPS", category: "办公" },
    { name: "百度网盘", category: "存储" },
  ];

  return (
    <section id="partners" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            合作品牌
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            与行业领先品牌深度合作
          </h2>
          <p className="text-muted-foreground text-lg">
            我们与数百家知名品牌建立战略合作，为企业提供优质权益资源
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group aspect-square bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-brand-gold/30 flex flex-col items-center justify-center cursor-pointer hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground text-center line-clamp-1 group-hover:text-brand-gold transition-colors">
                {partner.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1">{partner.category}</span>
            </div>
          ))}
        </div>

        {/* Hotel partners highlight */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy to-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            400-500家高端酒店资源
          </h3>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-6">
            涵盖国际连锁及精品酒店，配备专属酒店顾问与AI+酒旅专家，为您提供最优惠的入住方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["万豪", "希尔顿", "洲际", "凯悦", "香格里拉", "更多..."].map((hotel) => (
              <span
                key={hotel}
                className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm"
              >
                {hotel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
