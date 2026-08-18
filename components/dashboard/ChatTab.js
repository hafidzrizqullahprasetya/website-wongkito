"use client";

import { Send } from "lucide-react";
import { PLATFORM_CONFIG } from "./config";

export default function ChatTab({
  channels = [],
  selectedChannel,
  onSelectChannel,
  chatInput,
  setChatInput,
  onSendMessage,
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
      {/* Channel List (Sidebar) */}
      <div className="border-r border-slate-100 p-4 space-y-3 bg-slate-50/50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-black text-slate-900 text-base">
            Kotak Masuk Chat
          </h3>
          <span className="text-[10px] font-bold bg-wk-maroon text-white px-2 py-0.5 rounded-full">
            {channels.length} Percakapan
          </span>
        </div>

        <div className="space-y-2">
          {channels.map((c) => {
            const isSelected = selectedChannel?.id === c.id;
            const platform =
              PLATFORM_CONFIG[c.platform] || PLATFORM_CONFIG.offline;
            return (
              <div
                key={c.id}
                onClick={() => onSelectChannel(c)}
                className={`p-3.5 rounded-2xl cursor-pointer transition border ${
                  isSelected
                    ? "bg-white border-wk-gold shadow-md ring-2 ring-wk-gold/20"
                    : "bg-white/80 border-slate-200/70 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${platform.bg} ${platform.text}`}
                  >
                    {platform.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {c.updated_at}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {c.driver_name || c.customer_name}
                </h4>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {c.last_message}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Conversation & Reply Area */}
      <div className="md:col-span-2 flex flex-col h-[600px] bg-white">
        {selectedChannel ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
              <div>
                <h4 className="font-bold text-slate-900">
                  {selectedChannel.driver_name}
                </h4>
                <p className="text-xs text-slate-500">
                  Order {selectedChannel.order_id} • Pemesan:{" "}
                  {selectedChannel.customer_name}
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Live Chat Terhubung
              </span>
            </div>

            {/* Message Bubble List */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#FAF9F6]">
              {selectedChannel.messages?.map((m, idx) => {
                const isMe = m.sender === "merchant";
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-md px-4 py-2.5 rounded-2xl text-sm font-medium shadow-sm ${
                        isMe
                          ? "bg-gradient-to-r from-wk-dark-maroon to-wk-maroon text-white rounded-br-none"
                          : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {m.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Tulis balasan cepat ke driver/customer..."
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-wk-maroon focus:ring-2 focus:ring-wk-maroon/20"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-wk-maroon hover:bg-wk-dark-maroon text-white font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Kirim</span>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
            Pilih salah satu percakapan di sebelah kiri
          </div>
        )}
      </div>
    </div>
  );
}
