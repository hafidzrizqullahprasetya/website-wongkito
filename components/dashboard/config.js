import { Bell, ChefHat, CheckCircle2, Check, XCircle } from "lucide-react";

export const API_BASE =
  process.env.NEXT_PUBLIC_ORDER_HUB_URL || "http://localhost:8000";
export const API_KEY =
  process.env.NEXT_PUBLIC_ORDER_HUB_KEY ||
  "whub_eo1WPn-sYVUHTR4qPFJjR-V_EBSHKaW_";
export const DEVICE_KEY =
  process.env.NEXT_PUBLIC_ORDER_HUB_DEVICE_KEY ||
  "wdev_R4Sj8AC5V6f8wG3IdHYCKCSuPb3wAuHR";

export const fmtIDR = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

export const fmtTime = (s) =>
  s
    ? new Date(s).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

export const PLATFORM_CONFIG = {
  shopee_food: {
    label: "ShopeeFood",
    bg: "bg-[#EE4D2D]/10",
    text: "text-[#EE4D2D]",
    border: "border-[#EE4D2D]/30",
    dot: "bg-[#EE4D2D]",
  },
  gofood: {
    label: "GoFood",
    bg: "bg-[#00AA13]/10",
    text: "text-[#00AA13]",
    border: "border-[#00AA13]/30",
    dot: "bg-[#00AA13]",
  },
  grabfood: {
    label: "GrabFood",
    bg: "bg-[#00B14F]/10",
    text: "text-[#00B14F]",
    border: "border-[#00B14F]/30",
    dot: "bg-[#00B14F]",
  },
  offline: {
    label: "Kasir Offline",
    bg: "bg-amber-100",
    text: "text-amber-800",
    border: "border-amber-300",
    dot: "bg-amber-600",
  },
};

export const STATUS_CONFIG = {
  new: { label: "Pesanan Baru", color: "bg-blue-600 text-white", icon: Bell },
  preparing: {
    label: "Sedang Dimasak",
    color: "bg-amber-500 text-white",
    icon: ChefHat,
  },
  ready: {
    label: "Siap Diambil/Antar",
    color: "bg-emerald-600 text-white",
    icon: CheckCircle2,
  },
  completed: {
    label: "Selesai",
    color: "bg-slate-200 text-slate-700",
    icon: Check,
  },
  cancelled: {
    label: "Dibatalkan",
    color: "bg-rose-100 text-rose-700",
    icon: XCircle,
  },
};
