"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A sleek, responsive React portfolio to showcase our skills and projects, with smooth navigation, and fast loading.",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rish-02/Port-folio-nextjs",
    previewUrl: "https://www.port-folio-rish.netlify.app",
  },
  {
    id: 2,
    title: "Booking Reservation Website",
    description: "A reservation system using MERN, allowing users to seamlessly book and manage reservations with secure payment gateway.",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rish-02/Booking-webapp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Alumini Connect Application",
    description: "A Social platform using the MERN stack that increased alumni-student interactions by featuring advanced filtering and categorization.",
    image: "/images/alumniconnect.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rish-02/Alumni-Connect",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Inventory Management Application",
    description: "A management application using MERN, streamlining stock tracking and order processing with live tracking of goods.",
    image: "/images/inventory.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Rish-02/inventry",
    previewUrl: "https://pinventapp.netlify.app/",
  },
  {
    id: 5,
    title: "Quiz Application Backend",
    description: "Authentication and CRUD operations",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rish-02/quizapp",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Bhasha Motion",
    description: "Automated video creation using ReactJS, MongoDB, and FastAPI with customizable dashboard for users to personalize video elements and translations.",
    image: "/images/bhashamotion.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rish-02/Bhasha-Motion",
    previewUrl: "https://bhasha-motion.vercel.app/",
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
