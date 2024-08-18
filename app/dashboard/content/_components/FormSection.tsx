import React from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}
function FormSection({ selectedTemplate }: PROPS) {
  return (
    <div className="p-5 shadow-md border rounded-lg">
      {/* @ts-igonre */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
    </div>
  );
}

export default FormSection;
