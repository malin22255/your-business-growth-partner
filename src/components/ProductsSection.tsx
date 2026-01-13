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
          image: "https://www.starbucks.com.cn/images/products/flat-white.jpg"
        },
        { 
          name: "椰子丝绒燕麦拿铁", 
          price: 23.98, 
          original: 36, 
          brand: "星巴克",
          image: "https://www.starbucks.com.cn/images/products/oat-latte.jpg"
        },
        { 
          name: "榛果风味巴旦木拿铁", 
          price: 23.98, 
          original: 33, 
          brand: "星巴克",
          image: "https://www.starbucks.com.cn/images/products/hazelnut-latte.jpg"
        },
        { 
          name: "红茶拿铁", 
          price: 19.81, 
          original: 26, 
          brand: "星巴克",
          image: "https://www.starbucks.com.cn/images/products/tea-latte.jpg"
        },
        { 
          name: "黄油巴斯克拿铁", 
          price: 18.98, 
          original: 38, 
          brand: "Mstand",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
        },
        { 
          name: "咸芝士拿铁", 
          price: 18.98, 
          original: 38, 
          brand: "Mstand",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
        },
        { 
          name: "美式咖啡", 
          price: 14.88, 
          original: 30, 
          brand: "Mstand",
          image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
        },
        { 
          name: "卡布奇诺", 
          price: 17.98, 
          original: 36, 
          brand: "Mstand",
          image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "fastfood",
      label: "快餐美食",
      icon: UtensilsCrossed,
      products: [
        { 
          name: "大堡口福三件套（双层脆鸡堡）", 
          price: 21.53, 
          original: 40, 
          brand: "麦当劳",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
        },
        { 
          name: "巨无霸四件套", 
          price: 32.68, 
          original: 59, 
          brand: "麦当劳",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop"
        },
        { 
          name: "超值麦辣鸡腿堡四件套", 
          price: 29.68, 
          original: 57, 
          brand: "麦当劳",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
        },
        { 
          name: "超值巨无霸吉士双人餐", 
          price: 48.68, 
          original: 90.5, 
          brand: "麦当劳",
          image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop"
        },
        { 
          name: "汁汁双层嫩牛堡超满足三件套", 
          price: 15.88, 
          original: 22.9, 
          brand: "肯德基",
          image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop"
        },
        { 
          name: "汉堡小食五件套", 
          price: 46.68, 
          original: 63, 
          brand: "肯德基",
          image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop"
        },
        { 
          name: "葡式蛋挞+五块黄金鸡块", 
          price: 14.68, 
          original: 20.5, 
          brand: "肯德基",
          image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop"
        },
        { 
          name: "超值OK三件套", 
          price: 10.68, 
          original: 19.9, 
          brand: "肯德基",
          image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop"
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
        { 
          name: "家电深度清洗", 
          price: 88, 
          original: 150, 
          brand: "京东到家",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        { 
          name: "全屋大扫除", 
          price: 199, 
          original: 380, 
          brand: "轻喜到家",
          image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop"
        },
        { 
          name: "窗帘清洗服务", 
          price: 25, 
          original: 50, 
          unit: "/幅", 
          brand: "京东洗衣",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "travel",
      label: "出行贵宾",
      icon: Plane,
      products: [
        { 
          name: "全国机场接送机专车 60公里以内", 
          price: 139, 
          original: 350, 
          brand: "专车服务",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop"
        },
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
        { 
          name: "高端酒店优惠", 
          price: "优惠50-600", 
          original: null, 
          brand: "400-500家",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
        },
        { 
          name: "酒店专属顾问", 
          price: "免费咨询", 
          original: null, 
          brand: "AI+酒旅专家",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop"
        },
        { 
          name: "商务舱升舱服务", 
          price: "专属优惠", 
          original: null, 
          brand: "航空服务",
          image: "https://images.unsplash.com/photo-1540339832862-474599807836?w=400&h=300&fit=crop"
        },
        { 
          name: "京东到家家政服务", 
          price: "专属价", 
          original: null, 
          brand: "京东到家",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
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
          name: "专业洁牙服务", 
          price: 180, 
          original: 368, 
          unit: "/次", 
          brand: "瑞尔/瑞泰",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
        },
        { 
          name: "深度口腔检查", 
          price: 99, 
          original: 200, 
          brand: "瑞尔/瑞泰",
          image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
        },
        { 
          name: "精英体检套餐", 
          price: 888, 
          original: 1999, 
          brand: "爱康国宾",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop"
        },
        { 
          name: "女性专属体检", 
          price: 699, 
          original: 1599, 
          brand: "爱康国宾",
          image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
        },
        { 
          name: "儿童健康检查", 
          price: 388, 
          original: 800, 
          brand: "爱康国宾",
          image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop"
        },
        { 
          name: "口腔美白护理", 
          price: 299, 
          original: 600, 
          brand: "瑞尔/瑞泰",
          image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400&h=300&fit=crop"
        },
        { 
          name: "牙齿矫正咨询", 
          price: "免费", 
          original: null, 
          brand: "瑞尔/瑞泰",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      id: "entertainment",
      label: "娱乐会员",
      icon: Tv,
      products: [
        { 
          name: "爱奇艺周卡", 
          price: 7.9, 
          original: 15, 
          brand: "爱奇艺",
          image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop"
        },
        { 
          name: "腾讯视频周卡", 
          price: 8.8, 
          original: 15, 
          brand: "腾讯视频",
          image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop"
        },
        { 
          name: "优酷周卡", 
          price: 6.5, 
          original: 15, 
          brand: "优酷",
          image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop"
        },
        { 
          name: "B站大会员月卡", 
          price: 13.59, 
          original: 25, 
          brand: "bilibili",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
        },
        { 
          name: "芒果TV年卡", 
          price: "2-5折", 
          original: null, 
          brand: "芒果TV",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop"
        },
        { 
          name: "网易云音乐会员", 
          price: "2-5折", 
          original: null, 
          brand: "网易云",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
        },
        { 
          name: "WPS超级会员", 
          price: "2-5折", 
          original: null, 
          brand: "WPS",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
        },
        { 
          name: "百度网盘超级会员", 
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
                    {/* Product image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                      
                      {/* Brand badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground/40 backdrop-blur-sm text-card text-xs font-medium">
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
                            {typeof product.price === "number" ? (
                              <>
                                ¥{product.price}
                                {product.unit && <span className="text-sm font-normal text-muted-foreground">{product.unit}</span>}
                              </>
                            ) : (
                              <span className="text-primary text-xl">{product.price}</span>
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
