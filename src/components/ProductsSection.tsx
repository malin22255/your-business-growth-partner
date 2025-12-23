import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Coffee, UtensilsCrossed, Home, Plane, Heart, Tv } from "lucide-react";

const ProductsSection = () => {
  const categories = [
    {
      id: "coffee",
      label: "咖啡甜点",
      icon: Coffee,
      products: [
        { 
          name: "馥芮白中杯", 
          price: 23.98, 
          original: 35, 
          brand: "星巴克",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
        },
        { 
          name: "黄油巴斯克拿铁", 
          price: 18.5, 
          original: 38, 
          brand: "Mstand",
          image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop"
        },
        { 
          name: "环游世界(1磅)", 
          price: 188, 
          original: 258, 
          brand: "诺心蛋糕",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
        },
        { 
          name: "深爱(1磅)", 
          price: 168, 
          original: 208, 
          brand: "21cake",
          image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "fastfood",
      label: "快餐美食",
      icon: UtensilsCrossed,
      products: [
        { 
          name: "双层嫩牛堡三件套", 
          price: 23.88, 
          original: 44.5, 
          brand: "肯德基",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
        },
        { 
          name: "汉堡可乐小食三件套", 
          price: 15.98, 
          original: 42, 
          brand: "麦当劳",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "home",
      label: "家政服务",
      icon: Home,
      products: [
        { 
          name: "2小时日常保洁", 
          price: 30, 
          original: 60, 
          unit: "/h", 
          brand: "轻喜到家",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
        },
        { 
          name: "3小时日常保洁", 
          price: 30, 
          original: 50, 
          unit: "/h", 
          brand: "轻喜到家",
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop"
        },
        { 
          name: "衣鞋任洗2件", 
          price: 18, 
          original: 52, 
          brand: "京东洗衣",
          image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&h=300&fit=crop"
        },
        { 
          name: "布艺沙发清洗", 
          price: 15, 
          original: 43, 
          unit: "/h/座", 
          brand: "轻喜到家",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
        },
        { 
          name: "冰箱/抽油烟机清洗", 
          price: 55, 
          original: 90, 
          unit: "/台", 
          brand: "轻喜到家",
          image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "travel",
      label: "出行贵宾",
      icon: Plane,
      products: [
        { 
          name: "机场贵宾厅", 
          price: 145, 
          original: 200, 
          brand: "全国机场",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
        },
        { 
          name: "高铁贵宾厅", 
          price: 60, 
          original: 100, 
          brand: "全国高铁站",
          image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=400&h=300&fit=crop"
        },
        { 
          name: "机场快速通道", 
          price: 50, 
          original: 70, 
          brand: "全国机场",
          image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "health",
      label: "健康医疗",
      icon: Heart,
      products: [
        { 
          name: "成人悦享体检", 
          price: 588, 
          original: 1299, 
          unit: "/次", 
          brand: "爱康国宾",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
        },
        { 
          name: "成人洁牙", 
          price: 80, 
          original: 169, 
          unit: "/次", 
          brand: "瑞尔/瑞泰",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "entertainment",
      label: "娱乐会员",
      icon: Tv,
      products: [
        { 
          name: "爱奇艺年卡", 
          price: "2-5折", 
          original: null, 
          brand: "爱奇艺",
          image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop"
        },
        { 
          name: "优酷年卡", 
          price: "2-5折", 
          original: null, 
          brand: "优酷",
          image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop"
        },
        { 
          name: "腾讯视频年卡", 
          price: "2-5折", 
          original: null, 
          brand: "腾讯",
          image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop"
        },
        { 
          name: "芒果TV年卡", 
          price: "2-5折", 
          original: null, 
          brand: "芒果TV",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop"
        },
        { 
          name: "B站大会员", 
          price: "2-5折", 
          original: null, 
          brand: "B站",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
        },
        { 
          name: "网易云音乐", 
          price: "2-5折", 
          original: null, 
          brand: "网易云",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
        },
        { 
          name: "WPS会员", 
          price: "2-5折", 
          original: null, 
          brand: "WPS",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
        },
        { 
          name: "百度网盘", 
          price: "2-5折", 
          original: null, 
          brand: "百度网盘",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop"
        },
      ],
    },
  ];

  const calculateDiscount = (price: number, original: number) => {
    return Math.round((1 - price / original) * 100);
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-brand-gold/10 to-primary/10 border border-brand-gold/20 text-brand-gold text-sm font-semibold mb-6 tracking-wide">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.products.map((product, idx) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-brand-gold/30 hover:-translate-y-2"
                  >
                    {/* Product image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Brand badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
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
                      <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-brand-gold transition-colors min-h-[56px]">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-end justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-primary">
                            {typeof product.price === "number" ? (
                              <>
                                ¥{product.price}
                                {product.unit && <span className="text-sm font-normal text-muted-foreground">{product.unit}</span>}
                              </>
                            ) : (
                              <span className="text-brand-gold">{product.price}</span>
                            )}
                          </span>
                        </div>
                        {product.original && (
                          <span className="text-muted-foreground line-through text-sm">
                            ¥{product.original}
                            {product.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-16 px-4 py-4 rounded-2xl bg-secondary/30 max-w-2xl mx-auto">
          * 以上价格仅供参考，实际价格以咨询为准。酒店权益优惠50-600元不等，实时报价。
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
