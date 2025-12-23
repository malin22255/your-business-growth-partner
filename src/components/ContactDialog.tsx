import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QrCode, Phone, Mail, MapPin } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            联系我们
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-6">
          {/* QR Code Placeholder */}
          <div className="w-48 h-48 bg-secondary rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-border">
            <QrCode className="w-16 h-16 text-muted-foreground mb-2" />
            <span className="text-sm text-muted-foreground text-center px-4">
              扫描企业微信二维码
            </span>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            扫描上方二维码，添加专属顾问<br />
            获取定制化企业权益方案
          </p>

          <div className="w-full border-t border-border pt-6 space-y-4">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">服务热线</p>
                <p className="font-medium">400-XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">商务邮箱</p>
                <p className="font-medium">business@chengxingcard.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">公司地址</p>
                <p className="font-medium">浙江省杭州市</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
