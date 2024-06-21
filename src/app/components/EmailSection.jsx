"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.png";
import LinkedinIcon from "../../../public/linkedin-icon.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlx64rj",
        "template_xqmqlfr",
        form.current,
        "CSI1R4am70fubjBbr"
      )
      .then(
        () => {
          setEmailSubmitted(true);
          setError(null);
          form.current.reset();
        },
        (error) => {
          setError("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="bg-gradient-to-r from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-900 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you soon!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/lilian-su" aria-label="Github Profile">
            <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/liliansjh/" aria-label="LinkedIn Profile">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={50} height={50} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form onSubmit={sendEmail} ref={form} className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="Name"
                className="text-gray-900 block text-sm mb-2 font-medium"
              >
                Name
              </label>
              <input
                name="from_name"
                type="text"
                id="name"
                required
                className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hi, your name here!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-900 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="from_email"
                type="email"
                id="email"
                required
                className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-900 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
