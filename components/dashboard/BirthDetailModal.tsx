"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BirthDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export function BirthDetailModal({
  isOpen,
  onClose,
  onConfirm,
  title,
}: BirthDetailModalProps) {
  const { t } = useI18n();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card rounded-[32px] p-10 border-none shadow-2xl overflow-hidden">
        <DialogHeader className="items-center text-center space-y-4">
          <DialogTitle className="text-3xl font-black tracking-tight text-foreground">
            {title}
          </DialogTitle>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We use these details to create your personalized report. Update
            anything that's not correct.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-6 font-medium">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
              Place of birth *
            </Label>
            <Select defaultValue="china">
              <SelectTrigger className="h-14 rounded-2xl border-2 border-border bg-muted/50 px-5 text-lg font-bold text-foreground focus:ring-primary/20 focus:border-primary transition-all">
                <SelectValue placeholder="Select place" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-border shadow-xl">
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Date of birth *
              </Label>
              <Input
                type="text"
                defaultValue="01 / 24 / 1984"
                className="h-14 rounded-2xl border-2 border-border bg-muted/50 px-5 text-lg font-bold text-foreground focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Time of birth *
              </Label>
              <Input
                type="text"
                defaultValue="09 : 57 AM"
                className="h-14 rounded-2xl border-2 border-border bg-muted/50 px-5 text-lg font-bold text-foreground focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-2xl border border-border">
            <span className="text-muted-foreground font-bold text-sm">
              I don't know my exact time
            </span>
            <Switch className="data-[state=checked]:bg-primary" />
          </div>
        </div>

        <DialogFooter className="sm:justify-start gap-3 pt-4">
          <Button
            type="button"
            className="h-14 flex-1 rounded-2xl bg-primary text-primary-foreground font-black text-lg hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95"
            onClick={onConfirm}
          >
            {t("common.confirm")}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-14 flex-1 rounded-2xl font-bold border-2"
            onClick={onClose}
          >
            {t("common.cancel")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
