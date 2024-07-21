import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const faqs = [
  {
    question: "How do I book a guide?",
    answer: "To book a guide, simply search for the destination, select a guide, and click on the 'Book Now' button. Follow the instructions to complete your booking."
  },
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel your booking up to 24 hours before the scheduled tour for a full refund. Cancellations made within 24 hours of the tour will not be refunded."
  },
  {
    question: "Can I contact the guide before booking?",
    answer: "Yes, you can contact the guide before booking by using the contact form on their profile page. The guide will respond to your inquiries via email."
  },
  {
    question: "Are the tours customizable?",
    answer: "Many guides offer customizable tours. You can discuss your preferences and requirements with the guide before booking to ensure the tour meets your needs."
  }
];

const FAQ = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header style={{ fontWeight: 'bold !important'}}>{faq.question}</Accordion.Header>
              <Accordion.Body>
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
