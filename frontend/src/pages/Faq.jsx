import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is Search My Notes?",
      answer:
        "Search My Notes is an online platform that enables college students to share and access educational resources. Users can upload and download various study materials, including notes, presentations, and guides.",
    },
    {
      question: "How can I begin using Search My Notes?",
      answer:
        "To begin, simply sign up for an account on our platform. After registering, you can start uploading your own study materials or browse resources shared by fellow students.",
    },
    {
      question: "Is there a cost associated with using Search My Notes?",
      answer:
        "No, Search My Notes is completely free to use. We are committed to making education accessible to everyone, and our platform is available to all students without any subscription fees.",
    },
    {
      question: "Are my uploaded documents safe on Search My Notes?",
      answer:
        "Definitely. We take the security and privacy of your documents seriously. Search My Notes utilizes advanced encryption and security protocols to safeguard the confidentiality of your uploaded materials.",
    },
    {
      question: "What types of documents can I upload on Search My Notes?",
      answer:
        "You can upload various document formats, including PDFs, Word files, PowerPoint presentations, and more. Our platform is designed to support a wide range of study materials.",
    },
    {
      question: "How can I find specific study materials on Search My Notes?",
      answer:
        "Utilize the search bar on the platform to locate specific study materials. You can enter keywords, subjects, or topics to quickly find relevant documents.",
    },
    {
      question:
        "Can I work collaboratively with other students on projects through Search My Notes?",
      answer:
        "Yes, absolutely! Search My Notes provides real-time collaboration tools that enable you to work on group projects and assignments with your classmates. You can share, edit, and collaborate effortlessly.",
    },
    {
      question: "Is there a limit to how large the files I can upload are?",
      answer:
        "Currently, there is a limit on the file size for uploads. Please consult the platform's guidelines for specific information regarding file size restrictions.",
    },
    {
      question: "How can I give feedback on a document?",
      answer:
        "Every document on Search My Notes features a feedback and rating section. You can express your opinions, ask questions, or provide feedback regarding the quality of the material.",
    },
  ];

  return (
    <div className="grid place-content-center lg:h-heightWithoutNavbar">
      <div className="mx-auto max-w-[1550px] bg-white px-5 py-8">
        <h1 className="mb-6 text-3xl">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, i) => (
            <div key={i} className="">
              <h1 className="text-red mb-2 text-lg font-medium sm:text-xl">
                {item.question}
              </h1>
              <p className="border-b pb-2 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
