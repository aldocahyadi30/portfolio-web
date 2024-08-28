import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col h-[80%] lg:h-full lg:w-[60%] bg-onyx p-4 rounded-xl">
      <div className="flex flex-col basis-2/12">
        <label htmlFor="name" className="text-platinum font-medium">
          Name
        </label>
        <input type="text"  className="w-full h-10 border border-platinum rounded-lg px-2" />
      </div>
      <div className="flex flex-col basis-2/12">
      <label htmlFor="name" className="text-platinum font-medium">
          Email
        </label>
        <input type="text" className="w-full h-10 border border-platinum rounded-lg px-2" />
        
      </div>
      <div className="flex flex-col basis-6/12">
        <label htmlFor="name" className="text-platinum font-medium">
          Message
        </label>

        <textarea className="w-full h-full border border-platinum rounded-lg px-2" />
      </div>
      <div className="flex basis-2/12 items-center justify-end">
            <button className="bg-hunyadi-yellow font-display font-medium text-onyx rounded-lg px-4 py-2 hover:shadow-xl border-2 border-hunyadi-yellow hover:text-hunyadi-yellow hover:bg-onyx">Send Email</button>
      </div>
    </form>
  );
};

export default ContactForm;
