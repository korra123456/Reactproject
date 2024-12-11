// import React, { useState } from "react";


// const FAQ = () => {

//   const [openIndex, setOpenIndex] = useState(null);

 
//   const faqs = [
//     {
//       question: "Is any of my personal information stored in the App?",
//       answer:
//         "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam.",
//     },
//     {
//       question: "What formats can I download my transaction history in?",
//       answer:
//         "Nunc duis ehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
//     },
//     {
//       question: "Can I schedule future transfer?",
//       answer:
//         "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
//     },
//     {
//       question: "When can I use Banking App services?",
//       answer:
//         "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
//     },
//     {
//       question: "Can I create my own password that is easy for me to remember?",
//       answer:
//         "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
//     },
//     {
//       question: "What happens if I forget or lose my password?",
//       answer:
//         "Mum cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
//     },
//   ];

  
//   const toggleQuestion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="faq">
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className={`fac-card ${openIndex === index ? "open" : ""}`}
//         >
//           <div className="question" onClick={() => toggleQuestion(index)}>
//             <p>{faq.question}</p>
//             <button className="btn-round">
//               <i
//                 className={`fa-solid fa-chevron-${
//                   openIndex === index ? "up" : "down"
//                 }`}
//               ></i>
//             </button>
//           </div>
//           <div className="answer">
//             {openIndex === index && <div className="expandable">{faq.answer}</div>}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;


import React, { useState, useEffect } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]); // State för API-data
  const [openIndex, setOpenIndex] = useState(null); // State för vilken fråga som är öppen
  const [loading, setLoading] = useState(true); // Laddningsindikator
  const [error, setError] = useState(null); // Felhantering

  // Hämta data från API vid komponentens första render
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("https://win24-assignment.azurewebsites.net/api/faq");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        // Använd `title` som `question` och `content` som `answer`
        const formattedFaqs = data.map((item) => ({
          question: item.title,
          answer: item.content,
        }));
        setFaqs(formattedFaqs); // Spara formaterade FAQs i state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stäng av laddningsindikatorn
      }
    };

    fetchFaqs();
  }, []);

  // Funktion för att växla en FAQ-fråga
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <p>Loading FAQs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-card ${openIndex === index ? "open" : ""}`}
        >
          <div className="question" onClick={() => toggleQuestion(index)}>
            <p>{faq.question}</p>
            <button className="btn-round">
              <i
                className={`fa-solid fa-chevron-${
                  openIndex === index ? "up" : "down"
                }`}
              ></i>
            </button>
          </div>
          <div className="answer">
            {openIndex === index && <div className="expandable">{faq.answer}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
