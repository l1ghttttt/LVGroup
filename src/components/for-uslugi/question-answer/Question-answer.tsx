import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/accordion-gray";

interface QuestionProps {
    question: string;
    answer: string;
}

interface QuestionAnswerProps {
    title: string;
    questionAnswerList: QuestionProps[];
}

const QuestionAnswer = ({title, questionAnswerList}: QuestionAnswerProps) => {
    return (
        <section
            className="px-WebsiteCreatingWelcomePaddingX max-sm:px-[10px] w-full flex flex-col bg-qaBg items-center relative pb-[100px] pt-[100px] max-lg:pt-[50px] max-sm:pt-[25px] mt-[50px] max-lg:mt-[25px] max-sm:mt-0">
            <div className="flex flex-col  max-w-[1200px]">
                <h2 className="mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading">{title}</h2>
            </div>
            <div className={`w-full flex flex-col gap-5 max-sm:gap-3`}>
                {questionAnswerList.map((component) => (
                    <Accordion type="single" collapsible className="w-4/5 max-lg:w-full px-[2%] max-sm:px-[4%] mx-auto bg-background rounded-[15px]" key={component.question}>
                        <AccordionItem value={`item-${component.question}`} key={component.question}>
                            <AccordionTrigger key={component.question} className={`!relative text-[24px] max-xl:text-[22px] max-md:text-[20px] max-sm:text-[17px] !decoration-0 !no-underline`}>{component.question}</AccordionTrigger>
                            <AccordionContent>
                                <nav>
                                    <ul className={`duration-1000`} key={component.question}>
                                        <li className={`py-[10px] text-[18px] max-xl:text-[17px] max-md:text-[16px] leading-[24px] text-qaColor`} key={component.answer}>
                                            {component.answer}
                                        </li>
                                    </ul>
                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default QuestionAnswer;