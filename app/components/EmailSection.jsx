"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const EmailSection = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options).catch((err) => {
      console.error(`Fetch error: ${err}`);
    });

    const resData = await response?.json().catch((error) => {
      console.error(`resdata error: ${error}`);
    });

    // console.log(`resData: ${resData ? JSON.stringify(resData) : resData}`);
    if (resData?.success === true) {
      setSendSuccess(true);
      console.log("Message sent.");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm happy to connect. Send me an email!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="/">
            {/* change link here later  */}
            <FaGithub style={{ color: "white", fontSize: "2.5rem" }} />
          </Link>
          <Link href="/">
            {/* change link here later  */}
            <FaLinkedin style={{ color: "white", fontSize: "2.5rem" }} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium pb-2"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="sailormoon@gmail.com"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium pb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Just saying hi"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm pb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              type="text"
              id="message"
              placeholder="Let's talk about ..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div className="mt-2">
            {sendSuccess === true ? (
              <p className="text-green-400">Message Sent Successfully!</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
