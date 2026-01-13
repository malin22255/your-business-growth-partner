import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Coffee, UtensilsCrossed, Home, Plane, Heart, Tv } from "lucide-react";

const ProductsSection = () => {
  // Brand logos for fallback
  const brandLogos: Record<string, string> = {
    "星巴克": "https://logo.clearbit.com/starbucks.com",
    "Mstand": "https://logo.clearbit.com/mstand.com",
    "麦当劳": "https://logo.clearbit.com/mcdonalds.com",
    "肯德基": "https://logo.clearbit.com/kfc.com",
    "轻喜到家": "https://logo.clearbit.com/qingxidaojia.com",
    "京东洗衣": "https://logo.clearbit.com/jd.com",
    "京东到家": "https://logo.clearbit.com/jd.com",
    "爱康国宾": "https://logo.clearbit.com/ikang.com",
    "瑞尔/瑞泰": "https://logo.clearbit.com/arrail-dental.com",
    "爱奇艺": "https://logo.clearbit.com/iqiyi.com",
    "腾讯视频": "https://logo.clearbit.com/v.qq.com",
    "优酷": "https://logo.clearbit.com/youku.com",
    "bilibili": "https://logo.clearbit.com/bilibili.com",
    "芒果TV": "https://logo.clearbit.com/mgtv.com",
    "网易云": "https://logo.clearbit.com/music.163.com",
    "WPS": "https://logo.clearbit.com/wps.com",
    "百度网盘": "https://logo.clearbit.com/pan.baidu.com",
    "全国机场": "https://logo.clearbit.com/caac.gov.cn",
    "全国高铁站": "https://logo.clearbit.com/12306.cn",
    "专车服务": "https://logo.clearbit.com/didi.com",
    "航空服务": "https://logo.clearbit.com/ctrip.com",
    "400-500家": "https://logo.clearbit.com/marriott.com",
    "AI+酒旅专家": "https://logo.clearbit.com/ctrip.com",
  };

  const categories = [
    {
      id: "coffee",
      label: "咖啡甜点",
      icon: Coffee,
      products: [
        { name: "馥芮白中杯", price: 23.98, original: 35, brand: "星巴克" },
        { name: "椰子丝绒燕麦拿铁", price: 23.98, original: 36, brand: "星巴克" },
        { name: "榛果风味巴旦木拿铁", price: 23.98, original: 33, brand: "星巴克" },
        { name: "红茶拿铁", price: 19.81, original: 26, brand: "星巴克" },
        { name: "黄油巴斯克拿铁", price: 18.98, original: 38, brand: "Mstand" },
        { name: "咸芝士拿铁", price: 18.98, original: 38, brand: "Mstand" },
        { name: "美式咖啡", price: 14.88, original: 30, brand: "Mstand" },
        { name: "卡布奇诺", price: 17.98, original: 36, brand: "Mstand" },
      ],
    },
    {
      id: "fastfood",
      label: "快餐美食",
      icon: UtensilsCrossed,
      products: [
        { name: "大堡口福三件套（双层脆鸡堡）", price: 21.53, original: 40, brand: "麦当劳" },
        { name: "巨无霸四件套", price: 32.68, original: 59, brand: "麦当劳" },
        { name: "超值麦辣鸡腿堡四件套", price: 29.68, original: 57, brand: "麦当劳" },
        { name: "超值巨无霸吉士双人餐", price: 48.68, original: 90.5, brand: "麦当劳" },
        { name: "汁汁双层嫩牛堡超满足三件套", price: 15.88, original: 22.9, brand: "肯德基" },
        { name: "汉堡小食五件套", price: 46.68, original: 63, brand: "肯德基" },
        { name: "葡式蛋挞+五块黄金鸡块", price: 14.68, original: 20.5, brand: "肯德基" },
        { name: "超值OK三件套", price: 10.68, original: 19.9, brand: "肯德基" },
      ],
    },
    {
      id: "home",
      label: "家政服务",
      icon: Home,
      products: [
        { name: "2小时日常保洁", price: 30, original: 60, unit: "/h", brand: "轻喜到家" },
        { name: "3小时日常保洁", price: 30, original: 50, unit: "/h", brand: "轻喜到家" },
        { name: "衣鞋任洗2件", price: 18, original: 52, brand: "京东洗衣" },
        { name: "布艺沙发清洗", price: 15, original: 43, unit: "/h/座", brand: "轻喜到家" },
        { name: "冰箱/抽油烟机清洗", price: 55, original: 90, unit: "/台", brand: "轻喜到家" },
        { name: "家电深度清洗", price: 88, original: 150, brand: "京东到家" },
      ],
    },
    {
      id: "travel",
      label: "出行贵宾",
      icon: Plane,
      products: [
        { name: "全国机场接送机专车 60公里以内", price: 139, original: 350, brand: "专车服务" },
        { name: "机场贵宾厅", price: 145, original: 200, brand: "全国机场" },
        { name: "高铁贵宾厅", price: 60, original: 100, brand: "全国高铁站" },
        { name: "机场快速通道", price: 50, original: 70, brand: "全国机场" },
        { name: "高端酒店优惠", price: "优惠50-600", original: null, brand: "400-500家" },
        { name: "酒店专属顾问", price: "免费咨询", original: null, brand: "AI+酒旅专家" },
      ],
    },
    {
      id: "health",
      label: "健康医疗",
      icon: Heart,
      products: [
        { name: "成人悦享体检", price: 588, original: 1299, unit: "/次", brand: "爱康国宾" },
        { name: "专业洁牙服务", price: 180, original: 368, unit: "/次", brand: "瑞尔/瑞泰" },
        { name: "深度口腔检查", price: 99, original: 200, brand: "瑞尔/瑞泰" },
        { name: "精英体检套餐", price: 888, original: 1999, brand: "爱康国宾" },
        { name: "女性专属体检", price: 699, original: 1599, brand: "爱康国宾" },
        { name: "儿童健康检查", price: 388, original: 800, brand: "爱康国宾" },
      ],
    },
    {
      id: "entertainment",
      label: "娱乐会员",
      icon: Tv,
      products: [
        { name: "爱奇艺周卡", price: 7.9, original: 15, brand: "爱奇艺" },
        { name: "腾讯视频周卡", price: 8.8, original: 15, brand: "腾讯视频" },
        { name: "优酷周卡", price: 6.5, original: 15, brand: "优酷" },
        { name: "B站大会员月卡", price: 13.59, original: 25, brand: "bilibili" },
        { name: "芒果TV年卡", price: "2-5折", original: null, brand: "芒果TV" },
        { name: "网易云音乐会员", price: "2-5折", original: null, brand: "网易云" },
      ],
    },
  ];

  const calculateDiscount = (price: number, original: number) => {
    return Math.round((1 - price / original) * 100);
  };

  const getBrandLogo = (brand: string) => {
    return brandLogos[brand] || "https://logo.clearbit.com/example.com";
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide">
            超值优惠
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            精选<span className="text-gradient-gold">权益产品</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            为企业员工提供超值优惠，品质生活触手可及，低至2折起
          </p>
        </div>

        {/* Products tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent h-auto mb-16 p-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="group px-6 py-4 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cat.products.map((product) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2"
                  >
                    {/* Product image - using brand logo */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center p-4">
                        <img 
                          src={getBrandLogo(product.brand)} 
                          alt={product.brand}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-2xl font-bold text-primary">${product.brand.slice(0, 2)}</span>`;
                          }}
                        />
                      </div>
                      
                      {/* Brand badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                        {product.brand}
                      </span>
                      
                      {/* Discount badge */}
                      {typeof product.price === "number" && product.original && (
                        <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-bold shadow-lg">
                          <TrendingDown className="w-3 h-3 mr-1" />
                          省{calculateDiscount(product.price, product.original)}%
                        </Badge>
                      )}
                    </div>

                    {/* Product info */}
                    <div className="p-6">
                      {/* Product name */}
                      <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors min-h-[56px]">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-end justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-primary">
                            {typeof product.price === "number" ? `¥${product.price}` : product.price}
                          </span>
                          {product.original && (
                            <span className="text-sm text-muted-foreground line-through">
                              ¥{product.original}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;