"use client";
import { useState } from "react";
import { motion, spring } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="font-montserrat relative px-4 pt-12 pb-16 md:pt-8 max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-fit font-extralight text-[28px] text-center text-gray-900 mb-10 leading-[60px] mx-auto sm:text-3xl sm:leading-[80px] md:text-4xl md:leading-[80px] lg:text-5xl lg:leading-[96px]"
        >
          <motion.div
            animate={{
              x: [0, -20, 20, -10, 10, 0],
              rotate: [0, -5, 5, -2, 2, 0],
            }}
            transition={{
              duration: 2,
              delay: 3,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            <Image
              src="/page-vectors/trixmart-banner.svg"
              className="absolute -top-10 left-4 -z-10 sm:-top-6 sm:left-8 md:-top-8 md:w-36"
              width={120}
              height={200}
              alt=""
            />
          </motion.div>
          <Image
            src="/page-vectors/shopping-bags.svg"
            className="absolute -top-10 right-20 -z-10 sm:-top-6 sm:right-40"
            width={40}
            height={40}
            alt=""
          />
          The
          <span className="relative font-marckscript text-4xl inline-block leading-none mx-2 text-[#006ED3] md:text-5xl md:mx-3">
            <Image
              src="/page-vectors/vector-1.svg"
              className="absolute scale-110"
              width={150}
              height={100}
              alt=""
            />
            student
          </span>
          marketplace where <br className="hidden sm:block" /> buyers shop,
          <br className="hidden" /> and sellers grow their{" "}
          <br className="hidden sm:block " /> businesses
          <span className="relative font-marckscript text-4xl inline-block leading-none mx-2 text-[#FF8B2A] md:text-5xl md:mx-3">
            <Image
              src="/page-vectors/vector-2.svg"
              className="absolute scale-110"
              width={150}
              height={100}
              alt=""
            />
            within
          </span>
          the university.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base text-center text-[#1E1E1E] mb-10 max-w-[640px] mx-auto md:text-xl"
        >
          Connecting Buyers, Growing Student Businesses
        </motion.p>

        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
          <Image
            src="/page-vectors/vector-3.svg"
            className="absolute -top-10 -left-2 -z-10 sm:w-24 sm:-top-16 sm:left-0 md:left-8 lg:left-36"
            width={60}
            height={80}
            alt=""
          />
          {/* Popup */}
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 
              ${
                showPopup ? "flex" : "hidden"
              } flex justify-center items-center w-full bg-black bg-opacity-60 z-50`}
          >
            <div className="relative bg-white p-4 mx-4 rounded-xl">
              <div className="flex justify-between p-3 border-b-2 border-solid border-black">
                <span>NACOS DINNER RAFFLE DRAW</span>
              </div>
              <div className="py-4 px-6">
                <h3>Instructions</h3>
                <ul className="list-disc">
                  <li>
                    Tap on the button below to get redirected to the google form
                  </li>
                  <li>Fill the form with the necessary details</li>
                  <li>Sit back and wait for the results</li>
                </ul>
                <div className="flex justify-center mt-8">
                  <a
                    href="https://forms.gle/cnUxEYHcj87pDBUBA"
                    className="bg-black mx-auto border-black border-[1px] text-white text-base rounded-2xl hover:bg-white hover:text-black px-8 py-[12px]"
                    target="_blank"
                  >
                    Go to the form
                  </a>
                </div>
              </div>
              <span
                onClick={() => {
                  setShowPopup((prev) => !prev);
                }}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex justify-center items-center bg-black/60 w-8 h-8 border-2 border-solid border-white text-3xl text-white rounded-full cursor-pointer"
              >
                &times;
              </span>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring",
              damping: 10,
            }}
            className="bg-black border-black border-[1px] text-white text-base rounded-2xl hover:bg-white hover:text-black px-8 py-[12px]"
            onClick={() => {
              setShowPopup((prev) => !prev);
            }}
          >
            NACOS Raffle Draw
          </motion.button>
          <Link
            href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                damping: 10,
              }}
              className="bg-[#006ED3] border-[#006ED3] border-[1px] text-white text-base rounded-2xl hover:bg-white hover:text-[#006ED3] px-8 py-[12px]"
            >
              Join Our Community
            </motion.button>
          </Link>
          <Link href="#categories">
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                damping: 10,
              }}
              className="border-[#FF8B2A] border-[1px] text-[#FF8B2A] text-base rounded-2xl hover:bg-[#FF8B2A] hover:text-white px-8 py-[12px]"
            >
              Become a Seller
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  );
}
