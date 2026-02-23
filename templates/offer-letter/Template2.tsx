import { OfferLetterData } from "../../data/mockData";

interface OfferLetterTemplate2Props {
  data: OfferLetterData;
}

function formatLetterDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

export default function Template2({ data }: OfferLetterTemplate2Props) {
  const certificateDate = formatLetterDate(data.certificateDate || data.offerDate);
  const joiningDate = formatLetterDate(data.joiningDate);
  const employmentEndDate = formatLetterDate(data.employmentEndDate);

  return (
    <article className="min-h-[257mm] bg-white px-[14mm] pb-[16mm] pt-[12mm] text-[#1f1f1f]">
      <header className="min-h-[18mm]">
        <div className="inline-flex items-center justify-center py-0.5">
          <p className="m-0 text-[1.6rem] font-bold tracking-[1px] text-[#1f4276]">
            CONCENTRIX
          </p>
        </div>
      </header>

      <section className="mt-4 text-[0.93rem] leading-[1.6]">
        <p className="m-0">Ref.: {data.referenceNumber}</p>
        <p className="m-0">Date: {certificateDate}</p>
      </section>

      <h3 className="mt-[34px] text-center text-[1.16rem] font-bold underline">
        Relieving Cum Experience Certificate
      </h3>
      <h4 className="mt-[34px] text-center text-[1.13rem] font-bold">
        To Whomsoever It May Concern
      </h4>

      <section className="mt-6 text-[0.95rem] leading-[1.8] text-justify">
        <p className="mb-5">
          This is to certify that {data.candidateName} worked with {data.companyName} from{" "}
          {joiningDate} to {employmentEndDate} and last held the post of {data.position}.
          Internal job title was {data.internalJobTitle}.
        </p>
        <p className="mb-5">
          During the tenure, conduct and performance were found satisfactory and there are no
          outstanding dues against the employee.
        </p>
        <p className="mb-0">We wish {data.candidateName} all the best for future endeavors.</p>
      </section>

      <section className="mt-[26px] text-[0.95rem] leading-[1.55]">
        <p className="mb-2">{data.companyName}</p>
        <div
          className="mb-2.5 mt-3.5 text-[1.45rem] text-[#2f2f2f]"
          style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
        >
          Authorized Signature
        </div>
        <p className="mb-1">Regards,</p>
        <p className="mb-1">{data.signatoryName}</p>
        <p className="mb-1">{data.signatoryDesignation}</p>
      </section>

      <footer className="mt-[38mm]">
        <p className="m-0 text-center text-[0.83rem] italic">
          To prevent the spreading of COVID-19, this information is being shared through e-mail
          only.
        </p>
        <p className="mb-0 mt-[24mm] text-left text-[0.84rem] font-semibold">{data.companyName}</p>
      </footer>
    </article>
  );
}
