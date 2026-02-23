import { SalarySlipData } from "../../data/mockData";

interface SalarySlipTemplate2Props {
  data: SalarySlipData;
}

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

export default function Template2({ data }: SalarySlipTemplate2Props) {
  const grossSalary = data.basicSalary + data.allowances;
  const netSalary = grossSalary - data.deductions;

  return (
    <article className="min-h-[257mm] bg-white px-[14mm] py-[16mm] text-[#11243d]">
      <header className="rounded-xl border border-[#b8decf] bg-gradient-to-r from-[#e9f6f0] to-[#f4fcf8] p-3">
        <h3 className="m-0 text-xl font-semibold">{data.companyName}</h3>
        <p className="mt-1.5 text-sm text-[#436257]">Monthly Compensation Statement</p>
      </header>

      <section className="mt-3.5 grid grid-cols-2 gap-3.5 max-[700px]:grid-cols-1">
        <div>
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Employee</p>
          <p className="mt-1 font-semibold">{data.employeeName}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Employee ID</p>
          <p className="mt-1 font-semibold">{data.employeeId}</p>
        </div>
        <div>
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Month</p>
          <p className="mt-1 font-semibold">{data.month}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Issue Date</p>
          <p className="mt-1 font-semibold">{data.issueDate}</p>
        </div>
      </section>

      <section className="mt-3.5 grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
        <div className="rounded-[10px] border border-[#d7deea] bg-[#f8fbff] p-2.5">
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Basic</p>
          <p className="mt-1 font-semibold">{currency.format(data.basicSalary)}</p>
        </div>
        <div className="rounded-[10px] border border-[#d7deea] bg-[#f8fbff] p-2.5">
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Allowances</p>
          <p className="mt-1 font-semibold">{currency.format(data.allowances)}</p>
        </div>
        <div className="rounded-[10px] border border-[#d7deea] bg-[#f8fbff] p-2.5">
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Deductions</p>
          <p className="mt-1 font-semibold">{currency.format(data.deductions)}</p>
        </div>
        <div className="rounded-[10px] border border-[#9cd0b7] bg-[#eef7f1] p-2.5">
          <p className="m-0 text-xs uppercase tracking-[0.02em] text-[#697f9d]">Net Salary</p>
          <p className="mt-1 font-semibold">{currency.format(netSalary)}</p>
        </div>
      </section>

      <section className="mt-3.5">
        <table className="w-full border-collapse border border-[#d7deea]">
          <tbody>
            <tr>
              <td className="border-b border-[#d7deea] px-2.5 py-2.5">Gross Salary</td>
              <td className="border-b border-[#d7deea] px-2.5 py-2.5 text-right">
                {currency.format(grossSalary)}
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#d7deea] px-2.5 py-2.5">Total Deductions</td>
              <td className="border-b border-[#d7deea] px-2.5 py-2.5 text-right">
                {currency.format(data.deductions)}
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#d7deea] bg-[#eef7f1] px-2.5 py-2.5 font-bold">
                Final Net Pay
              </td>
              <td className="border-b border-[#d7deea] bg-[#eef7f1] px-2.5 py-2.5 text-right font-bold">
                {currency.format(netSalary)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
