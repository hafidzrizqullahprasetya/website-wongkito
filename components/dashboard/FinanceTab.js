"use client";

import { Building2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fmtIDR } from "./config";

export default function FinanceTab({
  financeData,
  payoutLoading,
  payoutSuccess,
  setPayoutSuccess,
  onTriggerPayout,
}) {
  if (!financeData) return null;

  return (
    <div className="space-y-8">
      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ready to Payout Card */}
        <div className="bg-gradient-to-br from-wk-dark-maroon to-wk-maroon rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-wk-beige/80">
                Saldo Siap Ditarik
              </span>
              <Building2 className="w-6 h-6 text-wk-gold" />
            </div>
            <p className="text-3xl font-black text-wk-gold font-mono">
              {fmtIDR(financeData.total_available_payout)}
            </p>
            <p className="text-xs text-wk-beige/70 mt-2">
              Rekening Tujuan: {financeData.bank_destination.bank} •{" "}
              {financeData.bank_destination.account_no}
            </p>
          </div>

          <Button
            variant="gold"
            size="lg"
            onClick={onTriggerPayout}
            disabled={payoutLoading}
            className="mt-6 w-full gap-2 shadow-lg"
          >
            <ArrowUpRight className="w-5 h-5" />
            {payoutLoading
              ? "Memproses BI-FAST..."
              : "Tarik Saldo Instan ke Rekening"}
          </Button>
        </div>

        {/* ShopeePay Merchant Balance */}
        <Card className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Saldo ShopeePay Partner
              </span>
              <span className="w-3 h-3 rounded-full bg-[#EE4D2D]" />
            </div>
            <p className="text-2xl font-black text-slate-900 font-mono">
              {fmtIDR(financeData.shopee_pay_balance)}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Penyelesaian harian otomatis
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
            <span>Status: Aktif & Sinkron</span>
            <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
              Terverifikasi
            </Badge>
          </div>
        </Card>

        {/* GoPay Merchant Balance */}
        <Card className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Saldo GoBiz (GoPay)
              </span>
              <span className="w-3 h-3 rounded-full bg-[#00AA13]" />
            </div>
            <p className="text-2xl font-black text-slate-900 font-mono">
              {fmtIDR(financeData.gopay_merchant_balance)}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Penyelesaian transaksi GoFood
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
            <span>Status: Aktif & Sinkron</span>
            <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
              Terverifikasi
            </Badge>
          </div>
        </Card>
      </div>

      {/* Payout Success Notice */}
      {payoutSuccess && (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-base">{payoutSuccess.message}</h4>
            <p className="text-xs text-emerald-700 mt-0.5">
              ID Transaksi: {payoutSuccess.payout_id} • Waktu:{" "}
              {payoutSuccess.processed_at}
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => setPayoutSuccess(null)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white"
          >
            Tutup
          </Button>
        </div>
      )}

      {/* Payout History */}
      <Card className="p-6">
        <CardTitle className="text-base mb-4">
          Riwayat Penarikan Dana (Auto Payouts)
        </CardTitle>
        <div className="divide-y divide-slate-100">
          {financeData.recent_payouts?.map((p) => (
            <div
              key={p.id}
              className="py-3.5 flex justify-between items-center text-sm"
            >
              <div>
                <p className="font-bold text-slate-900">
                  {p.id} • Transfer ke {p.bank}
                </p>
                <p className="text-xs text-slate-400">{p.date}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-slate-900 font-mono">
                  {fmtIDR(p.amount)}
                </p>
                <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
                  {p.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
