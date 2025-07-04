"use client";
import bg1 from "../../../../public/images/vietnambg2.jpg";
import Header from "@/components/Header/Header";
import OrderTour from "@/components/main/order/OrderTour";
import OrderModal from "@/components/OrderModal";
import { useState } from "react";
import AboutCompany from "@/components/about/AboutCompany";
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <OrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="z-10 absolute left-1/2 top-0 bottom-0 w-[60%] md:w-[20%] -translate-x-1/2 bg-[#23BFEF]" />
      <div
        className="relative z-9"
        style={{
          width: "100%",
          backgroundImage: `url(${bg1.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition:
            "left 0px top 0px, left calc(-1px + 50%) bottom -61px, left 0px top 0px, center top 0",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        }}
      >
        <Header  setIsModalOpen={setIsModalOpen} />
       <AboutCompany/>
      </div>
      <OrderTour />
    </>
  );
};

export default Page;
