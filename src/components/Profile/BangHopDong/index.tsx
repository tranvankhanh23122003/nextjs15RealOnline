import React from "react";
import "./style.css";

interface Contract {
  id: string;
  type: string;
  file: string;
  date: string;
  status: string;
}

interface PaymentProgress {
  phase: string;
  dueDate: string;
  amountDue: string;
  paymentPercentage: string;
  amountPaid: string;
  status: string;
  remainingDebt: string;
}

interface PaymentHistory {
  id: string;
  content: string;
  amount: string;
  transactionTime: string;
  confirmationLink: string;
  status: string;
  paymentMethod: string;
}

interface ContractTablesProps {
  selectedButton: string | null;
  contractData: Contract[];
  paymentProgressData: PaymentProgress[];
  paymentHistoryData: PaymentHistory[];
}

const ContractTables: React.FC<ContractTablesProps> = ({
  selectedButton,
  contractData,
  paymentProgressData,
  paymentHistoryData,
}) => {
  return (
    <div>
      {selectedButton === "Hợp đồng liên quan" && (
        <div className="profile-contract-table profile-table">
          <div className="profile-table-header profile-contract-table-header">
            <span>Mã HĐ</span>
            <span>Loại hợp đồng</span>
            <span>File hợp đồng (PDF)</span>
            <span>Ngày ký</span>
            <span>Trạng thái</span>
          </div>
          {contractData.map((contract) => (
            <div key={contract.id} className="profile-table-row profile-contract-table-row">
              <span>{contract.id}</span>
              <span>{contract.type}</span>
              <span>
                <a href={`/files/${contract.file}`} target="_blank" rel="noopener noreferrer">
                  {contract.file}
                </a>
              </span>
              <span>{contract.date}</span>
              <span className={`profile-contract-status profile-contract-status-${contract.status.replace(/\s+/g, '-')}`}>
                {contract.status}
              </span>
            </div>
          ))}
        </div>
      )}
      {selectedButton === "Tiến độ thanh toán" && (
        <div className="profile-payment-progress-table profile-table">
          <div className="profile-table-header profile-payment-progress-table-header">
            <span>Đợt</span>
            <span>Ngày đến hạn</span>
            <span>Tiền phải trả</span>
            <span>% thanh toán</span>
            <span>Tiền đã trả</span>
            <span>Trạng thái</span>
            <span>Dư nợ còn</span>
          </div>
          {paymentProgressData.map((payment, index) => (
            <div key={index} className="profile-table-row profile-payment-progress-table-row">
              <span>{payment.phase}</span>
              <span>{payment.dueDate}</span>
              <span>{payment.amountDue}</span>
              <span>{payment.paymentPercentage}</span>
              <span>{payment.amountPaid}</span>
              <span className={`profile-contract-status profile-contract-status-${payment.status.replace(/\s+/g, '-')}`}>
                {payment.status}
              </span>
              <span>{payment.remainingDebt}</span>
            </div>
          ))}
        </div>
      )}
      {selectedButton === "Lịch sử thanh toán" && (
        <div className="profile-payment-history-table profile-table">
          <div className="profile-table-header profile-payment-history-table-header">
            <span>Mã thanh toán</span>
            <span>Nội dung</span>
            <span>Số tiền</span>
            <span>Thời gian giao dịch</span>
            <span>Xem xác nhận</span>
            <span>Tình trạng</span>
            <span>Hình thức thanh toán</span>
          </div>
          {paymentHistoryData.map((payment) => (
            <div key={payment.id} className="profile-table-row profile-payment-history-table-row">
              <span>{payment.id}</span>
              <span>{payment.content}</span>
              <span>{payment.amount}</span>
              <span>{payment.transactionTime}</span>
              <span>
                <a href={`/files/${payment.confirmationLink}`} target="_blank" rel="noopener noreferrer">
                  {payment.confirmationLink}
                </a>
              </span>
              <span className={`profile-contract-status profile-contract-status-${payment.status.replace(/\s+/g, '-')}`}>
                {payment.status}
              </span>
              <span>{payment.paymentMethod}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContractTables;