import clsx from 'clsx';
import { Accordion as FlowAccordion } from 'flowbite-react';
import React from 'react';

interface AccordionProps {
  accordions: {
    title: string;
    content: any;
  }[];
  className?: string;
}

const Accordion = ({ accordions, className }: AccordionProps) => {
  return (
    <div className={clsx('w-full max-w-6xl m-auto flex justify-center items-center', className)}>
      <FlowAccordion collapseAll className="w-11/12 border-none rounded-sm divide-accent-dark/50">
        {accordions.map((accordion, index) => (
          <FlowAccordion.Panel key={index}>
            <FlowAccordion.Title className="text-accent-dark hover:text-accent-dark/80 hover:bg-accent-dark/5 duration-150 bg-accent-dark/10 focus:ring-0">
              {accordion.title}
            </FlowAccordion.Title>
            <FlowAccordion.Content className="text-white-dark bg-background-dark/50">
              {accordion.content}
            </FlowAccordion.Content>
          </FlowAccordion.Panel>
        ))}
      </FlowAccordion>
    </div>
  );
};

export default Accordion;
