import React, { useRef } from "react";
import { toast } from "react-toastify";

const ContactForm = ({openLoading, closeLoading}) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    openLoading();

    const form = formRef.current;
    const subject = form.subject.value;
    const email = form.email.value;
    const message = form.message.value;

    fetch(form.action, {
      method: form.method,
      body: JSON.stringify({
        name: subject,
        email: email,
        message: message,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        closeLoading();
        if (response.ok) {
          toast.success("Thanks for your message! I'll get back to you soon.");
          form.reset();
        } else {
          toast.error("Oops! Something went wrong.");
        }
      })
      .catch((error) => {
        closeLoading();
        console.error(error);
        toast.error("Oops! Something went wrong.");
      });
  };

  return (
    <form
      ref={formRef}
      method="POST"
      action="https://formsubmit.co/ajax/aldocahyadi28@gmail.com"
      onSubmit={handleSubmit}
      className="hidden lg:flex flex-col h-[80%] lg:h-full lg:w-[60%] bg-onyx p-4 rounded-xl"
    >
      <div className="flex flex-col basis-2/12">
        <label htmlFor="name" className="text-platinum font-medium">
          Name
        </label>
        <input
          type="text"
          name="subject"
          className="w-full h-10 border border-platinum rounded-lg px-2"
        />
      </div>
      <div className="flex flex-col basis-2/12">
        <label htmlFor="email" className="text-platinum font-medium">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="w-full h-10 border border-platinum rounded-lg px-2"
        />
      </div>
      <div className="flex flex-col basis-6/12">
        <label htmlFor="message" className="text-platinum font-medium">
          Message
        </label>
        <textarea
          name="message"
          className="w-full h-full border border-platinum rounded-lg px-2"
        />
      </div>
      <div className="flex basis-2/12 items-center justify-end">
        <button
          type="submit"
          className="bg-hunyadi-yellow font-display font-medium text-onyx rounded-lg px-4 py-2 hover:shadow-xl border-2 border-hunyadi-yellow hover:text-hunyadi-yellow hover:bg-onyx"
        >
          Send Email
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
