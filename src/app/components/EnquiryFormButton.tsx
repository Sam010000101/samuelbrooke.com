"use client";
import React, { useState } from "react";
import Form from "./Form";

type EnquiryFormButtonProps = {
  formType: string;
  label: string;
  submitLabel?: string; // Optional prop for customizing the submit button label
  className?: string; // Optional className to override default styles
  title: string; // Title for aria-label
};

const EnquiryFormButton: React.FC<EnquiryFormButtonProps> = ({
  formType,
  label,
  submitLabel,
  className = "", // Default to an empty string if no className is provided
  title,
}) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentFormType, setCurrentFormType] = useState<string | null>(null);

  const handleButtonClick = (type: string) => {
    console.log(`Button clicked for form type: ${type}`);
    setCurrentFormType(type);
    setFormVisible(true);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick(formType)}
        className={`btn w-full rounded-xs border-2 font-mono text-lg btn-outline btn-info sm:min-w-[200px] sm:text-xl ${className}`}
        aria-label={`Enquire about ${title}`} // Use title for aria-label
      >
        {label}
      </button>
      {isFormVisible && currentFormType === formType && (
        <div className="fixed inset-0 z-50 flex w-full items-center justify-center overflow-auto bg-black/20 landscape:items-start landscape:pt-2">
          <Form
            formType={currentFormType!}
            onClose={() => setFormVisible(false)}
            submitLabel={submitLabel} // Pass the submitLabel prop to the Form component
          />
        </div>
      )}
    </div>
  );
};

export default EnquiryFormButton;
