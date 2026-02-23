import { BankStatementData } from "../../data/mockData";

interface BankStatementTemplateProps {
  data: BankStatementData;
}

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

export default function Template1({ data }: BankStatementTemplateProps) {
  return (
    <article className="min-h-[257mm] bg-white px-[14mm] py-[16mm] text-[#11243d]">
      <header className="flex items-start justify-between gap-4 rounded-xl bg-gradient-to-r from-[#153b79] to-[#1a5b9e] p-3 text-white">
        <div>
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-white/85">
            Customer Statement
          </p>
          <h3 className="my-1 text-xl font-semibold">{data.bankName}</h3>
          <p className="m-0 text-sm text-white/85">Statement Period: {data.statementPeriod}</p>
        </div>
        <div className="text-[0.82rem] text-white/90">
          <p className="my-0.5">Issue Date: {data.issueDate}</p>
        </div>
      </header>

      <section className="mt-3.5 grid grid-cols-2 gap-3.5 max-[700px]:grid-cols-1">
        <div>
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">
            Account Holder
          </p>
          <p className="mt-1 font-semibold">{data.accountHolderName}</p>
        </div>
        <div>
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">
            Account Number
          </p>
          <p className="mt-1 font-semibold">{data.accountNumber}</p>
        </div>
      </section>

      <section className="mt-3.5">
        <table className="w-full border-collapse border border-[#d7deea]">
          <tbody>
            <tr>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px]">Opening Balance</td>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px] text-right">
                {currency.format(data.openingBalance)}
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px]">Total Credits</td>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px] text-right">
                {currency.format(data.totalCredits)}
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px]">Total Debits</td>
              <td className="border-b border-[#d7deea] px-2.5 py-[9px] text-right">
                {currency.format(data.totalDebits)}
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#d7deea] bg-[#eef7f1] px-2.5 py-[9px] font-bold">
                Closing Balance
              </td>
              <td className="border-b border-[#d7deea] bg-[#eef7f1] px-2.5 py-[9px] text-right font-bold">
                {currency.format(data.closingBalance)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
