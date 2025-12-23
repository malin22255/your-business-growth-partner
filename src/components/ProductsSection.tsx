import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown } from "lucide-react";

const ProductsSection = () => {
  const categories = [
    {
      id: "coffee",
      label: "咖啡甜点",
      products: [
        { name: "馥芮白中杯", price: 23.98, original: 35, brand: "星巴克" },
        { name: "黄油巴斯克拿铁", price: 18.5, original: 38, brand: "Mstand" },
        { name: "环游世界(1磅)", price: 188, original: 258, brand: "诺心蛋糕" },
        { name: "深爱(1磅)", price: 168, original: 208, brand: "21cake" },
      ],
    },
    {
      id: "fastfood",
      label: "快餐美食",
      products: [
        { name: "双层嫩牛堡三件套", price: 23.88, original: 44.5, brand: "肯德基" },
        { name: "汉堡可乐小食三件套", price: 15.98, original: 42, brand: "麦当劳" },
      ],
    },
    {
      id: "home",
      label: "家政服务",
      products: [
        { name: "2小时日常保洁", price: 30, original: 60, unit: "/h", brand: "轻喜到家" },
        { name: "3小时日常保洁", price: 30, original: 50, unit: "/h", brand: "轻喜到家" },
        { name: "衣鞋任洗2件", price: 18, original: 52, brand: "京东洗衣" },
        { name: "布艺沙发清洗", price: 15, original: 43, unit: "/h/座", brand: "轻喜到家" },
        { name: "冰箱/抽油烟机清洗", price: 55, original: 90, unit: "/台", brand: "轻喜到家" },
      ],
    },
    {
      id: "travel",
      label: "出行贵宾",
      products: [
        { name: "机场贵宾厅", price: 145, original: 200, brand: "全国机场" },
        { name: "高铁贵宾厅", price: 60, original: 100, brand: "全国高铁站" },
        { name: "机场快速通道", price: 50, original: 70, brand: "全国机场" },
      ],
    },
    {
      id: "health",
      label: "健康医疗",
      products: [
        { name: "成人悦享体检", price: 588, original: 1299, unit: "/次", brand: "爱康国宾" },
        { name: "成人洁牙", price: 80, original: 169, unit: "/次", brand: "瑞尔/瑞泰" },
      ],
    },
    {
      id: "entertainment",
      label: "娱乐会员",
      products: [
        { name: "爱奇艺年卡", price: "2-5折", original: null, brand: "爱奇艺" },
        { name: "优酷年卡", price: "2-5折", original: null, brand: "优酷" },
        { name: "腾讯视频年卡", price: "2-5折", original: null, brand: "腾讯" },
        { name: "芒果TV年卡", price: "2-5折", original: null, brand: "芒果TV" },
        { name: "B站大会员", price: "2-5折", original: null, brand: "B站" },
        { name: "网易云音乐", price: "2-5折", original: null, brand: "网易云" },
        { name: "WPS会员", price: "2-5折", original: null, brand: "WPS" },
        { name: "百度网盘", price: "2-5折", original: null, brand: "百度网盘" },
      ],
    },
  ];

  const calculateDiscount = (price: number, original: number) => {
    return Math.round((1 - price / original) * 100);
  };

  return (
    <section id="products" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-medium mb-4">
            产品优惠
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            精选权益产品
          </h2>
          <p className="text-muted-foreground text-lg">
            为企业员工提供超值优惠，低至2折起
          </p>
        </div>

        {/* Products tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border shadow-sm"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.products.map((product, idx) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-brand-gold/30 relative overflow-hidden"
                  >
                    {/* Discount badge */}
                    {typeof product.price === "number" && product.original && (
                      <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-bold">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        省{calculateDiscount(product.price, product.original)}%
                      </Badge>
                    )}

                    {/* Brand */}
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {product.brand}
                    </span>

                    {/* Product name */}
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-4 line-clamp-2 group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {typeof product.price === "number" ? (
                          <>
                            ¥{product.price}
                            {product.unit && <span className="text-sm font-normal">{product.unit}</span>}
                          </>
                        ) : (
                          product.price
                        )}
                      </span>
                      {product.original && (
                        <span className="text-muted-foreground line-through text-sm mb-1">
                          ¥{product.original}
                          {product.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          * 以上价格仅供参考，实际价格以咨询为准。酒店权益优惠50-600元不等，实时报价。
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
