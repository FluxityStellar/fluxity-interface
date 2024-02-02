import React from 'react';

import CLabel from 'src/components/CLabel';
import CStreamingModel from 'src/components/CStreamingModel';
import toast from 'src/components/CToast';

interface CStreamingModelContainer {
  label?: string;
  tooltipDetails: string;
  tooltipTitle: string;
}

const CStreamingModelContainer = ({
  label,
  tooltipDetails,
  tooltipTitle,
}: CStreamingModelContainer) => {
  const handleExponentialClick = () => {
    toast('error', 'Exponential streams are saved for a later version.');
  };

  return (
    <div className="w-[532px] sm:w-[340px] flex flex-col">
      <CLabel
        label={label}
        tooltipDetails={tooltipDetails}
        tooltipTitle={tooltipTitle}
        className="mb-1"
      />
      <div className="flex gap-2 sm:flex-col">
        <CStreamingModel isSelected={true} model="linear" />
        <CStreamingModel model="exponential" disabled onClick={handleExponentialClick} />
      </div>
    </div>
  );
};

export default CStreamingModelContainer;
