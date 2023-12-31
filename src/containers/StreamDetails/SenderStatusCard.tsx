import CButton from 'src/components/CButton';
import CPageCard from 'src/components/CPageCard';
import CSummaryField from 'src/components/CSummaryField';
import calculateStreamAmounts from 'src/utils/calculateStreamAmount';

interface SenderStatusCardProps {
  amount: string;
  startDate: number;
  endDate: number;
  cliffDate: number;
  isCancellable: boolean;
}

const SenderStatusCard = ({
  amount,
  startDate,
  endDate,
  cliffDate,
  isCancellable,
}: SenderStatusCardProps) => {
  const SenderStatusCardTitle = (
    <div className="w-full flex justify-between items-center pb-4 pl-4">
      <h1 className="text-2xl text-midnightBlue">Status</h1>
      <CButton
        variant="simple"
        color="outline"
        content="Cancel Stream"
        disabled={!isCancellable}
        className={`w-[146px] !py-2 h-[40px] text-[14px] ${
          !isCancellable && '!text-softGray !border-softGray hover:!bg-transparent'
        }`}
      />
    </div>
  );

  return (
    <div className="w-full">
      <CPageCard title={SenderStatusCardTitle} className="px-3 py-4 mb-4 w-full">
        <div className="grid gap-2 text-midnightBlue">
          <CSummaryField
            label="Remaining amount"
            value={calculateStreamAmounts(
              startDate,
              endDate,
              cliffDate,
              amount,
            ).senderAmount.toFixed(3)}
          />
        </div>
      </CPageCard>
    </div>
  );
};

export default SenderStatusCard;
