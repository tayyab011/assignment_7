// Footer.jsx
import React from "react";
import t from "../assets/t.png"
import l from "../assets/linkdin.png"
import f from "../assets/f.png"
import m from "../assets/mail.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6  gap-8">
         
          <div className="lg:col-span-2 md:text-base text-[12px]">
            <h3 className="text-2xl font-bold mb-4">CS — Ticket System</h3>
            <p className="text-gray-400 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

        
          <div className="md:text-base text-[12px]">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contract Salad
                </a>
              </li>
            </ul>
          </div>

       
          <div className="md:text-base text-[12px]">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products & Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

      
          <div className="md:text-base text-[12px]">
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2 md:text-base text-[12px]">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>
                    <img src={t} alt="" />
                  </span>{" "}
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>
                    <img src={l} alt="" />
                  </span>{" "}
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>
                    <img src={f} alt="" />
                  </span>{" "}
                  @CS — Ticket System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>
                    <img src={m} alt="" />
                  </span>{" "}
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

   

        <div className="text-gray-400 text-sm text-center my-5">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
