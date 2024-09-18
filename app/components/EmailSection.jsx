"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { themeMain, textBoxStyle } from "../theme";

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
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">Let's connect!</h5>
        <p
          className="mb-4 max-w-md"
          style={{ color: themeMain.colors.textSecondary }}
        >
          Free free to send me an email or leave a message!
        </p>
        {/* Contact Information */}
        <div className="contact-info mb-4">
          <p style={{ color: themeMain.colors.textSecondary }}>
            email:{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-primary-400 hover:underline"
            >
              alychang0216@gmail.com
            </a>
          </p>
          <p style={{ color: themeMain.colors.textSecondary }}>
            phone:{" "}
            <a
              href="tel:+13435586202"
              className="text-primary-400 hover:underline"
            >
              +1 (343) 558-6202
            </a>
          </p>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Alexinha">
            <FaGithub style={{ color: "white", fontSize: "2.5rem" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/jingxuan-alexina-chang-497674262/">
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
              className="text-sm rounded-lg block w-full p-2.5"
              style={textBoxStyle}
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
              className="text-sm rounded-lg block w-full p-2.5"
              style={textBoxStyle}
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
              className="text-sm rounded-lg block w-full p-2.5"
              style={textBoxStyle}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div className="mt-2">
            {sendSuccess === true && (
              <p className="text-green-400 text-sm">
                Message Sent Successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
