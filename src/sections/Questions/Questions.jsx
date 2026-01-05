import "./Questions.scss";
import classNames from "classnames";
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";

const Questions = (props) => {
  const { className } = props;
  const questionItems = [
    {
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How do I sign up for StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "What is the StreamVibe free trial?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How much does StreamVibe cost?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How do I contact StreamVibe customer support?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "What content is available on StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "What are the StreamVibe payment methods?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How can I watch StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
  ];

  return (
    <Section
      className={classNames(className, "questions")}
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map(({ question, answer }, index) => (
          <Accordion title={question} id={`question-${index}`} name="questions" isOpen={index === 0} key={index}>
            <p>{answer}</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  );
};

export default Questions;
