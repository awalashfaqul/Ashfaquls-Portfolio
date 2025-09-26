import{ RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";
// import portfolioImg from '../assets/portfolio.png';
// import portfolioOldImg from '../assets/Portfolio-with-React.png';
// import responsiveImg from '../assets/responsive-portfolio.png';
// import bookatableImg from '../assets/bookatable.png';
// import minimalApiImg from '../assets/minimalapi.png';
import portfolioImg from '/images/portfolio.png';
import portfolioOldImg from '/images/Portfolio-with-React.png';
import responsiveImg from '/images/responsive-portfolio.png';
import bookatableImg from '/images/bookatable.png';
import minimalApiImg from '/images/minimalapi.png'; // Updated import paths


export const Projects = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // modal state

  // ---- Static project definitions ----
  const frontendProjects = [
    {
      title: "Ashfaqul's Portfolio",
      repo: "Ashfaquls-Portfolio",
      fallbackDescription:
        "A personal portfolio site built with React and Tailwind CSS to showcase my work.",
      image: portfolioImg,
      tech: ["React + Vite", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/awalashfaqul/Ashfaquls-Portfolio",
    },
    {
      title: "Ashfaqul's Portfolio (old) with React",
      repo: "portfolio-with-react",
      fallbackDescription:
        "A personal portfolio site built with React, HTML, and CSS to showcase my work while fetching data from GitHub API. Includes a resume generator.",
      image: portfolioOldImg,
      tech: ["HTML", "CSS", "VanillaJS", "React"],
      github: "https://github.com/awalashfaqul/portfolio-with-react",
    },
    {
      title: "Ashfaqul's Responsive Portfolio",
      repo: "Responsive-Portfolio",
      fallbackDescription:
        "A responsive portfolio site built with HTML, CSS, and vanilla JavaScript.",
      image: responsiveImg,
      tech: ["HTML", "CSS", "VanillaJS"],
      github: "https://github.com/awalashfaqul/Responsive-Portfolio",
    },
  ];

  const backendProjects = [
    {
      title: "Book-a-Table: RESTful API",
      repo: "Book-a-Table",
      fallbackDescription:
        "Restaurant booking backend built with ASP.NET Core and SQL Server.",
      image: bookatableImg,
      tech: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
      github: "https://github.com/awalashfaqul/Book-a-Table", 
    },
    {
      title: "Personal interest fetcher with Minimal API",
      repo: "MiniProject-minimalAPI",
      fallbackDescription: "This mini project is about building a simple Web API. The minimal API uses a REST architecture and has enabled external services and applications to retrieve and change data in the application.",
      image: minimalApiImg,
      tech: ["C#", "minimal REST API", "ASP.NET Core"],
      github: "https://github.com/awalashfaqul/MiniProject-minimalAPI",
    },
  ];

  // ---- Fetching GitHub descriptions ----
  useEffect(() => {
    fetch("https://api.github.com/users/awalashfaqul/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        const enrich = (projects) =>
          projects.map((p) => {
            const repo = data.find(
              (g) => g.name.toLowerCase() === p.repo.toLowerCase()
            );
            return { ...p, description: repo?.description || p.fallbackDescription };
          });
        setFrontend(enrich(frontendProjects));
        setBackend(enrich(backendProjects));
      })
      .catch(() => {
        setFrontend(frontendProjects);
        setBackend(backendProjects);
      });
  }, []);

  // ---- Project Card component ----
  const ProjectCard = ({ project }) => (
    <div className="rounded-xl p-6 border border-green-600/20 hover:-translate-y-1 hover:shadow-[0_2px_10px_-1px_rgba(34,197,94,0.4)] transition-all bg-gray-900/40">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 w-full object-cover cursor-zoom-in"
        onClick={() => setSelectedImage(project.image)}
      />
      <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-3">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-blue-500/20 bg-green-500/10 px-2 py-1 text-xs text-green-300 rounded-full 
                       hover:bg-green-500/20 hover:shadow-[0_2px_10px_-1px_rgba(34,197,94,0.4)] transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-sm font-medium text-white
                   bg-green-800 rounded-lg hover:bg-green-600
                   border border-green-500/30 shadow hover:shadow-green-500/30 transition"
      >
        Visit on GitHub
      </a>
    </div>
  );

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black px-4">
      <RevealOnScroll>
      <div className="max-w-2xl w-full border border-gray-700 rounded-xl text-center mx-auto p-8">
        <h2 className="font-bold text-3xl md:text-6xl mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="rounded-xl p-8 border border-blue-500/20 mb-8 hover:-translate-y-1 hover:shadow-[0_2px_10px_-1px_rgba(59,130,246,0.5)] transition-all">
            <p className="text-gray-300 text-lg mb-6 max-w-m mx-auto">
                This section highlights a curated selection of my GitHub repositories, showcasing 
                full-stack development with modern web technologies. Each project reflects hands-on 
                experience in <strong className="text-blue-400">React</strong>, <strong className="text-blue-400">Tailwind CSS</strong>,  
                and <strong className="text-blue-400">C#</strong>, <strong className="text-blue-400">ASP .NET Core</strong> backends, demonstrating 
                clean architecture, scalable design, and a commitment to high-quality code.
            </p>
            <p className="text-gray-300 text-lg mb-6 max-w-m mx-auto">
                Explore the live demos and source code to see these solutions in action.
            </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-300 underline">
              Frontend Projects
            </h4>
            <div className="space-y-8">
              {frontend.map((p) => (
                <ProjectCard key={p.repo} project={p} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-300 underline">
              Backend Projects
            </h4>
            <div className="space-y-8">
              {backend.map((p) => (
                <ProjectCard key={p.repo} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Image Modal section starts here---- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Zoomed project"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl animate-fade-in"
          />
        </div>
      )}
      {/* ---- Image Modal section ends here---- */}
      </RevealOnScroll>
    </section>
  );
};
