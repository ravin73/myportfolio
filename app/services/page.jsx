"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Fueled by a drive to craft meaningful digital experiences, we leverage the latest in web development technologies, responsive design, and user-centric innovation to turn ideas into engaging, impactful web solutions",
    href: "https://ai-pdf-note-taker-psi.vercel.app/",
  },
  {
    num: "02",
    title: "UI/Ux design",
    description: "Driven by a passion for creating seamless and impactful user experiences, we combine intuitive design, thoughtful user interfaces, and cutting-edge technology to transform ideas into visually stunning and user-friendly digital realities",
    href: "",
  },
  {
    num: "03",
    title: "Machine Learning",
    description: "Driven by a passion for creating impactful solutions, we harness the power of AI, data, and user-centered design to transform ideas into digital reality",
    href: "https://www.coursera.org/account/accomplishments/verify/3Y67KFNUDCQU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
  },
  {
    num: "04",
    title: "SAP ABAP",
    description: "Driven by a commitment to efficiency and precision, we leverage the power of SAP ABAP to develop tailored solutions, streamline processes, and transform complex business requirements into scalable, high-performance applications ",
    href: "https://www.udemy.com/certificate/UC-519cf4fb-9ed3-49c8-8fa4-32527c219841/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
];
const Serivces = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                   transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60 ">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Serivces;
