"use client";

import { useState, useCallback } from "react";
import Header from "../Component/Header/Header";

// FAQ data
const faqs = [
    { question: "What types of chairs do you sell?", answer: "We offer office chairs, dining chairs, lounge chairs, and more." },
    { question: "Do you provide customization options?", answer: "Yes, we offer custom designs for chairs and sofas." },
    { question: "What materials are your products made of?", answer: "Our products are made of high-quality wood, metal, and upholstery." },
    { question: "Do you provide delivery services?", answer: "Yes, we deliver across the country with fast shipping options." },
    { question: "Can I return a product?", answer: "Yes, you can return products within 30 days of purchase." },
    { question: "Do you provide a warranty?", answer: "All our products come with a one-year warranty." },
    { question: "How can I track my order?", answer: "You can track your order via the tracking link sent to your email." },
    { question: "Do you sell ergonomic chairs?", answer: "Yes, we have a range of ergonomic chairs designed for comfort." },
    { question: "Are there any discounts available?", answer: "Check our website for ongoing promotions and discounts." },
    { question: "Do you provide international shipping?", answer: "Currently, we ship only within the country." },
  {
    question: "What types of chairs do you offer?",
    answer:
      "We offer a wide variety of chairs including dining chairs, office chairs, lounge chairs, accent chairs, and outdoor chairs. Our selection caters to different styles, from modern to traditional, ensuring you find the perfect chair for your space.",
  },
  {
    question: "Do you sell sofas as well?",
    answer:
      "Yes, we have an extensive collection of sofas. Our range includes sectionals, loveseats, sleeper sofas, recliners, and more. We offer various styles, fabrics, and sizes to suit different living spaces and preferences.",
  },
  {
    question: "What materials are used in your furniture?",
    answer:
      "We use a variety of high-quality materials in our furniture, including genuine leather, premium fabrics, solid wood, engineered wood, metal, and eco-friendly options. Each piece is crafted to ensure durability and comfort.",
  },
  {
    question: "Can I customize the upholstery of my chair or sofa?",
    answer:
      "Yes, many of our chairs and sofas offer customization options. You can often choose from a range of fabrics, colors, and sometimes even change certain design elements. Please check the product description or contact our customer service for specific customization options.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. The furniture must be in its original condition and packaging. Custom orders may have different return terms. Please refer to our full return policy on our website or contact customer service for more details.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Yes, we offer assembly services for an additional fee. You can select this option during checkout. Our professional team will assemble your furniture in your home, saving you time and ensuring everything is set up correctly.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery times vary depending on your location and the item purchased. Generally, in-stock items are delivered within 5-10 business days. Custom or made-to-order pieces may take 4-8 weeks. You'll receive a more accurate estimate at checkout.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we only ship within the continental United States. We're working on expanding our shipping options and hope to offer international shipping in the future.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We offer a 1-year warranty on most furniture items, covering defects in materials and workmanship. Some premium items may come with extended warranties. Please check the product description or contact us for specific warranty information.",
  },
  {
    question: "Can I cancel my order after it's been placed?",
    answer:
      "You can cancel your order within 24 hours of placing it without any penalty. After 24 hours, cancellation may not be possible if the item has already been shipped. Please contact our customer service team as soon as possible if you need to cancel an order.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer financing options through our partner financial institutions. You can apply for financing during the checkout process. We offer various plans, including interest-free periods for qualified buyers.",
  },
  {
    question: "How do I care for and maintain my furniture?",
    answer:
      "Care instructions vary depending on the material of your furniture. Generally, we recommend regular dusting, avoiding direct sunlight, and promptly cleaning spills. Each product comes with specific care instructions. You can also find general care tips on our website's Help Center.",
  },
  {
    question: "Do you have a showroom where I can see the furniture in person?",
    answer:
      "Yes, we have showrooms in select cities where you can view and test our furniture. Please check our website for showroom locations and hours. We recommend calling ahead to ensure specific items you're interested in are on display.",
  },
  {
    question: "What if I receive damaged furniture?",
    answer:
      "If you receive damaged furniture, please contact our customer service within 48 hours of delivery. Take photos of the damage and we'll arrange for a replacement or repair as soon as possible. Do not dispose of the original packaging until the issue is resolved.",
  },
  {
    question: "Can I get fabric or leather samples before making a purchase?",
    answer:
      "Yes, we offer fabric and leather samples for most of our upholstered furniture. You can request samples on the product page or by contacting our customer service. Samples are typically shipped within 2-3 business days.",
  },
  {
    question: "Do you offer design consultation services?",
    answer:
      "Yes, we offer complimentary design consultation services. Our professional designers can help you choose the right furniture for your space, coordinate colors and styles, and maximize your room's potential. You can book a consultation through our website or in our showrooms.",
  },
  {
    question: "What is the weight capacity of your chairs and sofas?",
    answer:
      "The weight capacity varies depending on the specific product. Generally, our dining chairs support up to 250-300 lbs, office chairs up to 250-400 lbs, and sofas can typically hold 750-1000 lbs distributed evenly. Always check the product specifications for exact weight capacities.",
  },
  {
    question: "Do you offer outdoor furniture?",
    answer:
      "Yes, we have a range of outdoor furniture including chairs, sofas, dining sets, and loungers. Our outdoor furniture is made from weather-resistant materials to withstand various climates and conditions.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order has shipped, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your delivery's progress.",
  },
  {
    question: "Do you price match?",
    answer:
      "We offer a price match guarantee on identical items found at other authorized retailers. If you find a lower price within 30 days of your purchase, contact us with proof of the lower price, and we'll refund the difference.",
  },
  {
    question: "What if I need replacement parts for my furniture?",
    answer:
      "If you need replacement parts, please contact our customer service with your order number and details about the part you need. We'll do our best to provide replacement parts or find a suitable solution.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer gift cards in various denominations. They can be purchased online or in our showrooms and make great gifts for weddings, housewarmings, or any special occasion.",
  },
  {
    question: "How often do you release new furniture collections?",
    answer:
      "We typically release new collections seasonally, four times a year. However, we also introduce individual new pieces throughout the year. Sign up for our newsletter to stay updated on new arrivals.",
  },
  {
    question: "Can I order replacement cushions for my sofa?",
    answer:
      "Yes, you can order replacement cushions for most of our sofas. Contact our customer service with your sofa model and the specific cushion you need. Please note that custom fabrics may take longer to produce.",
  },
  {
    question: "Do you offer commercial or bulk ordering for businesses?",
    answer:
      "Yes, we have a dedicated commercial sales team for bulk orders and business clients. They can assist with custom orders, volume discounts, and specialized commercial furniture needs. Please contact our commercial sales department for more information.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
 <Header/>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-blue-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 flex justify-between items-center text-lg font-medium text-blue-700 hover:text-blue-500 focus:outline-none"
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-blue-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          {filteredFaqs.length === 0 && (
            <p className="text-center text-blue-500 mt-8">
              No matching questions found. Please try a different search term.
            </p>
          )}
        </div>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
       {/* Fixed search bar at the bottom */}
       <footer className="fixed bottom-0 left-0 right-0 bg-blue-100 shadow-lg">
        <div className="max-w-9xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 text-cyan-500 pr-4 py-2 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}