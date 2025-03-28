"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Payment Gateway",
    description: "A secure payment integration system by RazorPay & React, ensuring smooth transactions, user-friendly navigation, and fast processing.",
    image: "/images/paymentGateway.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Rish-02/payment-gateway",
    previewUrl: "https://payment-gateway-beta-seven.vercel.app/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "A sleek, responsive React portfolio to showcase our skills and projects, with smooth navigation, and fast loading.",
    image: "/images/portfolio.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rish-02/Port-folio-nextjs",
    previewUrl: "https://www.port-folio-rish.netlify.app",
  },
  {
    id: 3,
    title: "Quiz Application Backend",
    description: "Authentication and CRUD operations",
    image: "",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Rish-02/quizapp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Alumini Connect Application",
    description: "A Social platform using the MERN stack that increased alumni-student interactions by featuring advanced filtering and categorization.",
    image: "/images/alumniconnect.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Rish-02/Alumni-Connect",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Inventory Management Application",
    description: "A management application using MERN, streamlining stock tracking and order processing with live tracking of goods.",
    image: "/images/inventory.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Rish-02/inventry",
    previewUrl: "http://inventory.rishita-live.tech/",
  },
  {
    id: 6,
    title: "Booking Reservation Website",
    description: "A reservation system using MERN, allowing users to seamlessly book and manage reservations with secure payment gateway.",
    image: "",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Rish-02/Booking-webapp",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Bhasha Motion",
    description: "Automated video creation using ReactJS, MongoDB, and FastAPI with customizable dashboard for users to personalize video elements and translations.",
    image: "/images/bhashamotion.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/Rish-02/Bhasha-Motion",
    previewUrl: "https://bhasha-motion.vercel.app/",
  },
  {
    id: 8,
    title: "Portfolio Creater",
    description: "A web application for building personal portfolios with ReactJS, MongoDB, and FastAPI. Features include customizable templates, drag-and-drop editing, real-time preview, dark/light mode, and SEO optimization.",
    image: "/images/portfolioCreater.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rish-02/portfolio-creater",
    previewUrl: "https://portfolio-creater.netlify.app/",
  },
  {
    id: 9,
    title: "Journal App",
    description: "A minimalistic and intuitive journal web app using Spring Boot that allows users to log their daily thoughts, manage entries, and organize notes with a clean UI and smooth user experience.",
    image: "/images/",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Rish-02/journal-backend",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
