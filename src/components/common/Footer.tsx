import { motion } from "framer-motion";
import { InstagramIcon, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const contactDetails = {
    location: "123 Main Street, Davao City, PHIL",
    number: "+1 (123) 456-7890",
    email: "dialhub2019@gmail.com",
  };

  const socialLinks = [
    {
      title: "Linkedin",
      href: "https://www.facebook.com/thedialhub.smartshop",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      title: "Youtube",
      href: "youtube.com",
      icon: Youtube,
      color: "text-red-600",
    },
    {
      title: "twitter",
      href: "linkedin.com",
      icon: Twitter,
      color: "text-blue-600",
    },
    {
      title: "Instagram",
      href: "linkedin.com",
      icon: InstagramIcon,
      color: "text-pink-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="/dial-logo.png" className="w-36" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block pt-4 pb-2">Stay up to date</label>
            <div className="max-w-sm flex items-center border rounded-md p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 outline-none"
              />
              <button className="p-2.5 rounded-md text-white bg-blue-600 outline-none shadow-md focus:shadow-none sm:px-5">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div className="md:flex justify-between">
            <ul className="space-y-6 mt-10 hidden md:block">
              <li>
                <a href="/">
                  <span className="block text-white hover:text-orange-500 hover:underline">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="/about">
                  <span className="block text-white hover:text-orange-500 hover:underline">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="/products">
                  <span className="block text-white hover:text-orange-500 hover:underline">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a href="/login">
                  <span className="block text-white hover:text-orange-500 hover:underline">
                    Sign-in
                  </span>
                </a>
              </li>
            </ul>
            <ul className="space-y-4 mt-10">
              <h4 className="text-gray-300 text-xl font-medium">Contact Us</h4>
              <li>
                <span className="block text-white">Location:</span>
                <span>{contactDetails.location}</span>
              </li>
              <li>
                <span className="block text-white">Phone Number:</span>
                <span>{contactDetails.number}</span>
              </li>
              <li>
                <span className="block text-white">Email:</span>
                <span>{contactDetails.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 DiAL Hub All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
}
