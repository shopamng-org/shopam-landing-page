"use client";

import React, { useState } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

// Custom SVG Icons
const CustomMessageCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.4163 8.37562L12.4163 2.37562C12.293 2.29339 12.1482 2.24951 12 2.24951C11.8518 2.24951 11.707 2.29339 11.5837 2.37562L2.58375 8.37562C2.48101 8.44417 2.39679 8.53703 2.33857 8.64595C2.28034 8.75488 2.24992 8.87649 2.25 9V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V9C21.7501 8.87649 21.7197 8.75488 21.6614 8.64595C21.6032 8.53703 21.519 8.44417 21.4163 8.37562ZM9.0675 14.25L3.75 18V10.4559L9.0675 14.25ZM10.6022 15H13.3978L18.7069 18.75H5.29312L10.6022 15ZM14.9325 14.25L20.25 10.4559V18L14.9325 14.25Z"
      fill="#222222"
    />
  </svg>
);

const CustomChatCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.75 11.625C21.7473 14.1106 20.7587 16.4935 19.0011 18.2511C17.2435 20.0087 14.8606 20.9973 12.375 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V11.625C3 9.1386 3.98772 6.75403 5.74587 4.99587C7.50403 3.23772 9.8886 2.25 12.375 2.25C14.8614 2.25 17.246 3.23772 19.0041 4.99587C20.7623 6.75403 21.75 9.1386 21.75 11.625Z"
      fill="#222222"
    />
  </svg>
);

const CustomMapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
      fill="#222222"
    />
  </svg>
);

const CustomPhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7387 16.4137C21.5716 17.6841 20.9477 18.8501 19.9837 19.6941C19.0196 20.5381 17.7813 21.0023 16.5 21C9.05624 21 2.99999 14.9437 2.99999 7.49999C2.9977 6.2187 3.46189 4.98039 4.30587 4.01633C5.14985 3.05228 6.3159 2.42841 7.58624 2.26124C7.90748 2.22202 8.23279 2.28774 8.51361 2.44859C8.79442 2.60944 9.01569 2.8568 9.14437 3.15374L11.1244 7.57406V7.58531C11.2229 7.81261 11.2636 8.06077 11.2428 8.30763C11.222 8.55449 11.1404 8.79236 11.0053 8.99999C10.9884 9.02531 10.9706 9.04874 10.9519 9.07218L8.99999 11.3859C9.70218 12.8128 11.1947 14.2922 12.6403 14.9962L14.9222 13.0547C14.9446 13.0358 14.9681 13.0183 14.9925 13.0022C15.2 12.8638 15.4386 12.7793 15.687 12.7564C15.9353 12.7335 16.1854 12.7729 16.4147 12.8709L16.4269 12.8766L20.8434 14.8556C21.1409 14.9838 21.3889 15.2049 21.5502 15.4858C21.7116 15.7666 21.7778 16.0922 21.7387 16.4137Z"
      fill="#222222"
    />
  </svg>
);

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// Contact Info Card Component
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  actionLink?: string;
  isButton?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  action,
  actionLink,
  isButton = false,
}) => (
  <div>
    <div className="flex items-start mb-3">
      <div className="mr-3 text-gray-900">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
    {isButton ? (
      <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
        {action}
      </button>
    ) : (
      <a
        href={actionLink}
        className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        {action}
      </a>
    )}
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white mt-12 md:mt-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Contact Information */}
          <div className="space-y-20 bg-[#FBF9F7] rounded-lg p-6">
            {/* Email Card */}
            <div className="flex gap-6 justify-between">
              <ContactCard
                icon={<CustomMessageCircleIcon />}
                title="Email"
                description="Stay updated and get in touch directly."
                action="hello@shopam.org"
                actionLink="mailto:hello@shopam.com"
              />

              {/* Chat Card */}
              <ContactCard
                icon={<CustomMapIcon />}
                title="Office"
                description="Visit or write to us at:"
                action="15, brownstone estate , kusenla , Lagos , Nigeria"
              />
            </div>

            <div className="flex gap-6 justify-between">
              {/* Office Card */}

              <ContactCard
                icon={<CustomChatCircleIcon />}
                title="Chat"
                description="Message us anytime for quick help."
                action="Start conversation"
                isButton={true}
              />

              {/* Phone Card */}
              <ContactCard
                icon={<CustomPhoneIcon />}
                title="Phone"
                description="Speak to our team for support."
                action="+447533524726"
                actionLink="tel:  +447533524726"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-4">
              <Link
                href="https://www.instagram.com/shopamng?igsh=MWFpNHBsN2c4c3JmZw%3D%3D&utm_source=qr"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@shopamng?_r=1&_t=ZN-92IIymLWkCc"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="TikTok"
              >
                <div className="w-5 h-5  rounded-sm flex items-center justify-center transition-colors">
                  <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5 text-black-800" />
                </div>
              </Link>
              <Link
                href="https://x.com/shopamng?s=21"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#FBF9F7] rounded-lg p-8 lg:p-10 col-span-1">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ade Femi"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-11 px-4 bg-white border border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-11 px-4 bg-white border border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:border-gray-900"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white font-medium rounded-full text-base shadow-sm hover:shadow-md transition-all duration-200"
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
