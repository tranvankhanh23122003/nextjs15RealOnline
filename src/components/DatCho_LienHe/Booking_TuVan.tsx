import React, { useState } from "react";

type BookingTuVanProps = {
  isOpen: boolean;
  onClose: () => void;
};

const projects = [
  { id: "p1", name: "Bình Dương NewCity Shophouse" },
  { id: "p2", name: "Khu đô thị Smart City" },
  { id: "p3", name: "Chung cư cao cấp Riverside" },
];

const BookingTuVan: React.FC<BookingTuVanProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 ${
      hasError ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
    }`;

  const handleSubmitForm = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
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
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep("otp");
    }
  };

  const handleVerifyOtp = () => {
    // TODO: Replace with real API call when available
    // For now, any OTP will be accepted for UI testing
    if (otp.length < 6) {
      setOtpError("Vui lòng nhập đủ 6 số");
      return;
    }
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setName("");
    setPhone("");
    setEmail("");
    setOtp("");
    setErrors({});
    setOtpError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40" onClick={handleClose}>
      <div
        className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {step === "form" && (
          <>
            <div className="flex items-center justify-between border-b px-8 py-5">
              <h2 className="text-2xl font-semibold text-gray-800">Gửi yêu cầu tư vấn</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 transition hover:text-gray-700 cursor-pointer text-2xl"
              >
                ×
              </button>
            </div>

            <div className="px-8 py-6 space-y-6">
              <div>
                <div className="text-base font-medium text-gray-800 mb-2">Dự án quan tâm</div>
                <select className="w-full rounded-lg border border-gray-300 px-5 py-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option value="" disabled>Dự án*</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
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
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      className={inputClass(!!errors.phone)}
                      placeholder="Số điện thoại*"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      className={inputClass(!!errors.email)}
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Bằng việc tiếp tục, bạn đã đồng ý với <a className="underline" href="#">Chính sách bảo mật</a> của TDC.
              </p>
            </div>

            <div className="border-t px-8 py-5">
              <button
                className="w-full rounded-lg bg-slate-800 py-4 text-lg font-semibold text-white transition hover:bg-slate-900"
                onClick={handleSubmitForm}
              >
                Gửi yêu cầu
              </button>
            </div>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="flex items-center justify-between border-b px-8 py-5">
              <h2 className="text-2xl font-semibold text-gray-800">Xác thực số điện thoại</h2>
              <button onClick={handleClose} className="text-gray-500 transition hover:text-gray-700 cursor-pointer text-2xl">
                ×
              </button>
            </div>

            <div className="px-8 py-8 text-center">
              <div className="mb-6">
                <button
                  onClick={() => setStep("form")}
                  className="flex items-center text-blue-600 hover:underline mb-4"
                >
                  ← Xác thực số điện thoại
                </button>
                <p className="text-gray-600 mb-2">
                  Để việc gửi yêu cầu tư vấn được hoàn tất, vui lòng điền mã OTP vừa được gửi đến số điện thoại!
                </p>
                <p className="font-semibold text-lg">{phone}</p>
              </div>

              <div className="mb-6">
                <input
                  className={`w-full text-center text-2xl font-mono tracking-widest rounded-lg border px-5 py-4 focus:outline-none focus:ring-2 ${
                    otpError ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  }`}
                  placeholder="- - - - - -"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setOtpError("");
                  }}
                  maxLength={6}
                />
                {otpError && <p className="mt-2 text-sm text-red-600">{otpError}</p>}
                <p className="mt-2 text-sm text-gray-500">Gửi OTP sau: 3:20</p>
              </div>

              <button
                className="w-full rounded-lg bg-slate-800 py-4 text-lg font-semibold text-white transition hover:bg-slate-900"
                onClick={handleVerifyOtp}
              >
                Tiếp tục
              </button>

              <p className="mt-4 text-sm text-gray-500">
                Sau khi xác thực thành công, số điện thoại này được dùng để đăng nhập trên hệ thống Vinhomes Market
              </p>
            </div>
          </>
        )}

        {step === "success" && (
          <>
            <div className="px-8 py-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Đặt lịch hẹn tư vấn thành công</h3>
              <p className="text-base text-gray-600 mb-7">
                Chúng tôi sẽ liên hệ lại với Quý Khách hàng vào khung giờ<br />
                Quý Khách hàng đã chọn
              </p>

              <div className="flex items-center justify-between">
                <button
                  className="text-base text-blue-600 hover:underline"
                  onClick={handleClose}
                >
                  ← Về danh sách yêu cầu
                </button>
                <button
                  className="rounded-lg bg-gray-100 px-5 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-200"
                  onClick={handleClose}
                >
                  Đóng
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingTuVan;