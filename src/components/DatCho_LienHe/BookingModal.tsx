"use client";

import React, { useEffect, useState } from "react";
import Done_ThamQuan from "./Done_ThamQuan";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
// Keep success state inside the component
const projects = [
  { id: "p1", name: "Bình Dương NewCity Shophouse" },
  { id: "p2", name: "Khu đô thị Smart City" },
  { id: "p3", name: "Chung cư cao cấp Riverside" },
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isDoneThamQuanOpen, setIsDoneThamQuanOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; datetime?: string }>({});

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 ${
      hasError ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
    }`;
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen && !isDoneThamQuanOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
      onClick={() => {
        if (!isDoneThamQuanOpen) onClose();
      }}
    >
      <div
        className={`w-full max-w-2xl rounded-2xl bg-white shadow-2xl ${isDoneThamQuanOpen ? "hidden" : "block"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-5">
          <h2 className="text-2xl font-semibold text-gray-800">Đặt lịch tham quan</h2>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="text-gray-500 transition hover:text-gray-700 cursor-pointer text-2xl"
          >
            ×
          </button>
        </div>

        <div className="px-8 py-6 space-y-6">
          <div>
            <div className="text-base font-medium text-gray-800 mb-2">Dự án quan tâm</div>
            <div className="relative">
              <select
                className="w-full rounded-lg border border-gray-300 px-5 py-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Dự án*
                </option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="text-base font-medium text-gray-800 mb-3">Thông tin liên hệ</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <input
                  className={inputClass(!!errors.name)}
                  placeholder="Họ tên*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "booking-name-error" : undefined}
                />
                {errors.name && (
                  <p id="booking-name-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClass(!!errors.phone)}
                  placeholder="Số điện thoại*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                  inputMode="numeric"
                />
                {errors.phone && (
                  <p id="booking-phone-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClass(!!errors.email)}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "booking-email-error" : undefined}
                />
                {errors.email && (
                  <p id="booking-email-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClass(!!errors.datetime)}
                  placeholder="Lịch hẹn tư vấn*"
                  type="datetime-local"
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                  aria-invalid={!!errors.datetime}
                  aria-describedby={errors.datetime ? "booking-datetime-error" : undefined}
                />
                {errors.datetime && (
                  <p id="booking-datetime-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.datetime}
                  </p>
                )}
              </div>
            </div>
            {/* Screen reader live region */}
            <div aria-live="assertive" className="sr-only">
              {Object.values(errors)
                .filter(Boolean)
                .join(". ")}
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Bằng việc tiếp tục, bạn đã đồng ý với <a className="underline" href="#">Chính sách bảo mật</a> của TDC.
          </p>
        </div>
        <div className="border-t px-8 py-5">
          <button
            className="w-full rounded-lg bg-slate-800 py-4 text-lg font-semibold text-white transition hover:bg-slate-900"
            onClick={() => {
              const newErrors: { name?: string; phone?: string; email?: string; datetime?: string } = {};
              if (!name.trim()) newErrors.name = "Vui lòng nhập họ tên";
              if (!phone.trim()) {
                newErrors.phone = "Vui lòng nhập số điện thoại";
              } else if (!/^0\d{9,10}$/.test(phone.trim())) {
                newErrors.phone = "Số điện thoại không hợp lệ";
              }
              if (email.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.trim())) newErrors.email = "Email không hợp lệ";
              }
              if (!datetime) {
                newErrors.datetime = "Vui lòng chọn thời gian hẹn";
              }
              setErrors(newErrors);
              if (Object.keys(newErrors).length === 0) {
                setIsDoneThamQuanOpen(true);
              }
            }}
          >
            Gửi yêu cầu
          </button>
        </div>
      </div>
      <Done_ThamQuan
        isOpen={isDoneThamQuanOpen}
        onClose={() => {
          setIsDoneThamQuanOpen(false);
          onClose();
        }}
        customerName={name}
        appointmentText={(() => {
          if (!datetime) return "";
          const d = new Date(datetime);
          const pad = (n: number) => n.toString().padStart(2, "0");
          const hh = pad(d.getHours());
          const mm = pad(d.getMinutes());
          const dd = pad(d.getDate());
          const mm2 = pad(d.getMonth() + 1);
          const yyyy = d.getFullYear();
          return `${hh}:${mm}, ngày ${dd}/${mm2}/${yyyy}`;
        })()}
      />
    </div>
  );
};

export default BookingModal;


