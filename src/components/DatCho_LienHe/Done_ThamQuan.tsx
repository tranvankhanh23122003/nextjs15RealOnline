import React from "react";

type DoneProps = {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  appointmentText: string; // formatted: "HH:mm, ngày dd/MM/yyyy"
};

const Done_ThamQuan: React.FC<DoneProps> = ({ isOpen, onClose, customerName, appointmentText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Đặt lịch tham quan thành công</h3>
        <p className="text-base text-gray-600 mb-7">
          Hẹn gặp Quý Khách hàng <span className="text-blue-600 font-medium">{customerName || "Khách hàng"}</span> vào lúc
          <br />
          <span className="font-medium">{appointmentText}</span>
        </p>

        <div className="flex items-center justify-between">
          <button
            className="text-base text-blue-600 hover:underline"
            onClick={onClose}
          >
            ← Về danh sách yêu cầu
          </button>
          <button
            className="rounded-lg bg-gray-100 px-5 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Done_ThamQuan;