const PartnersSection = () => {
  const brandCategories = [
    {
      category: "咖啡茶饮",
      brands: [
        { name: "星巴克", logo: "https://logo.clearbit.com/starbucks.com" },
        { name: "Mstand", logo: "https://logo.clearbit.com/mstand.com" },
        { name: "瑞幸咖啡", logo: "https://logo.clearbit.com/luckincoffee.com" },
      ]
    },
    {
      category: "蛋糕甜点",
      brands: [
        { name: "诺心蛋糕", logo: "https://lecake.com/favicon.ico" },
        { name: "21cake", logo: "https://www.21cake.com/favicon.ico" },
      ]
    },
    {
      category: "快餐美食",
      brands: [
        { name: "肯德基", logo: "https://logo.clearbit.com/kfc.com" },
        { name: "麦当劳", logo: "https://logo.clearbit.com/mcdonalds.com" },
        { name: "必胜客", logo: "https://logo.clearbit.com/pizzahut.com" },
      ]
    },
    {
      category: "家政服务",
      brands: [
        { name: "京东到家", logo: "https://logo.clearbit.com/jd.com" },
        { name: "轻喜到家", logo: "https://logo.clearbit.com/qingxidaojia.com" },
      ]
    },
    {
      category: "健康医疗",
      brands: [
        { name: "爱康国宾", logo: "https://logo.clearbit.com/ikang.com" },
        { name: "瑞尔齿科", logo: "https://logo.clearbit.com/arrail-dental.com" },
      ]
    },
    {
      category: "视频娱乐",
      brands: [
        { name: "爱奇艺", logo: "https://logo.clearbit.com/iqiyi.com" },
        { name: "优酷", logo: "https://logo.clearbit.com/youku.com" },
        { name: "腾讯视频", logo: "https://logo.clearbit.com/v.qq.com" },
        { name: "芒果TV", logo: "https://logo.clearbit.com/mgtv.com" },
        { name: "bilibili", logo: "https://logo.clearbit.com/bilibili.com" },
      ]
    },
    {
      category: "办公工具",
      brands: [
        { name: "网易云音乐", logo: "https://logo.clearbit.com/music.163.com" },
        { name: "WPS", logo: "https://logo.clearbit.com/wps.com" },
        { name: "百度网盘", logo: "https://logo.clearbit.com/pan.baidu.com" },
      ]
    },
  ];

  const allBrands = brandCategories.flatMap(cat => cat.brands);

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-brand-gold/10 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide">
            战略合作伙伴
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            携手<span className="text-gradient-gold">行业领先品牌</span>
            <br />共创权益生态
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            与数百家知名品牌建立深度战略合作，覆盖餐饮、出行、娱乐、健康等多元生活场景
          </p>
        </div>

        {/* Scrolling brand logos */}
        <div className="relative mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...allBrands, ...allBrands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-32 h-32 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:border-brand-gold/30 backdrop-blur-sm">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-xl font-bold text-primary">${brand.name.slice(0, 2)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-brand-gold transition-colors">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {brandCategories.slice(0, 4).map((cat) => (
            <div
              key={cat.category}
              className="group relative bg-card rounded-3xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-6 pb-4 border-b border-border/50">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.brands.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md overflow-hidden bg-white flex items-center justify-center">
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-xs font-bold text-primary">${brand.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hotel partners highlight */}
        <div className="relative rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-primary to-brand-navy" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-primary/80 to-brand-navy/90" />
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-semibold">酒店资源</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              400-500家<span className="text-brand-gold">高端酒店</span>资源
            </h3>
            <p className="text-primary-foreground/70 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              涵盖国际连锁及精品酒店，配备专属酒店顾问与AI+酒旅专家，为您提供最优惠的入住方案
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["万豪集团", "希尔顿", "洲际酒店", "凯悦酒店", "香格里拉", "四季酒店", "更多..."].map((hotel) => (
                <span
                  key={hotel}
                  className="px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  {hotel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;