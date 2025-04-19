import Head from "next/head";
import { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Prepare data
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());

    // POST request
    setIsSubmitting(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    });

    const { success, message } = await response.json();

    setMessage(message);
    setSuccess(success);
    setIsSubmitting(false);
  }

  return (
    <>
      <Head>
        <title>Contact - Fake Store</title>
      </Head>

      <div>
        <h1 className="font-bold text-2xl mb-4">
          Any question? Send us a message
        </h1>

        {message ? (
          <p className={`text-lg ${success ? "" : "text-red-600"}`}>
            {message}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto border border-slate-300 rounded-md p-6"
          >
            <div className="flex flex-col gap-2 mb-4 md:grid md:grid-cols-[6rem,1fr] md:items-center md:gap-4">
              <label htmlFor="full_name" className="font-semibold">
                Full name
              </label>
              <input
                required
                name="full_name"
                id="full_name"
                className="rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 md:grid md:grid-cols-[6rem,1fr] md:items-center md:gap-4 md:mb-6">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                required
                rows={3}
                name="message"
                id="message"
                className="rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <button
                className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Contact;
