"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-[32px] p-10 border-none shadow-2xl overflow-hidden">
        <DialogHeader className="items-center text-center space-y-4">
          <DialogTitle className="text-3xl font-black tracking-tight text-zinc-900">
            {title}
          </DialogTitle>
          <p className="text-zinc-500 text-lg leading-relaxed">
            We use these details to create your personalized report. Update
            anything that's not correct.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-6 font-medium">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-1">
              Place of birth *
            </Label>
            <Select defaultValue="china">
              <SelectTrigger className="h-14 rounded-2xl border-2 border-zinc-100 bg-zinc-50/50 px-5 text-lg font-bold text-zinc-900 focus:ring-primary/20 focus:border-primary transition-all">
                <SelectValue placeholder="Select place" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-zinc-100 shadow-xl">
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-1">
                Date of birth *
              </Label>
              <Input
                type="text"
                defaultValue="01 / 24 / 1984"
                className="h-14 rounded-2xl border-2 border-zinc-100 bg-zinc-50/50 px-5 text-lg font-bold text-zinc-900 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-1">
                Time of birth *
              </Label>
              <Input
                type="text"
                defaultValue="09 : 57 AM"
                className="h-14 rounded-2xl border-2 border-zinc-100 bg-zinc-50/50 px-5 text-lg font-bold text-zinc-900 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
            <span className="text-zinc-600 font-bold text-sm">
              "I don't know my exact time"
            </span>
            <Switch className="data-[state=checked]:bg-primary" />
          </div>
        </div>

        <Button
          onClick={onConfirm}
          className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
        >
          Confirm Details
        </Button>
      </DialogContent>
    </Dialog>
  );
}
