import { useEffect, useState } from "react";

export const Projects = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  // ---- Defining projects (manual names + tech + image + fallback description) ----
  const frontendProjects = [
    {
      title: "Ashfaqul's Portfolio",
      repo: "Ashfaquls-Portfolio", // must match GitHub repo name
      fallbackDescription:
        "A personal portfolio site built with React and Tailwind CSS to showcase my work.",
      image: "src/assets/portfolio.png",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/awalashfaqul/Ashfaquls-Portfolio",
    },
    {
      title: "Ashfaqul's Portfolio (old) with React",
      repo: "portfolio-with-react",
      fallbackDescription: "A personal portfolio site built with React, HTML, and CSS to showcase my work which fetching data from GitHub API. It has a separate Resume page to generate resume and it can be saved as PDF.",
      image: "src/assets/Portfolio-with-React.png",
      tech: ["HTML", "CSS", "JavaScript: VanillaJS", "JavaScript: React"],
      github: "https://github.com/awalashfaqul/portfolio-with-react",
    },
    {
      title: "Ashfaqul's Responsive Portfolio",
      repo: "Responsive-Portfolio",
      fallbackDescription:
        "A responsive portfolio site built with React and Tailwind CSS to showcase my work.",
      image: "src/assets/responsive-portfolio.png",
      tech: ["HTML", "CSS", "JavaScript: VanillaJS"],
      github: "https://github.com/awalashfaqul/Responsive-Portfolio",
    },
  ];

  const backendProjects = [
    {
      title: "Book-a-Table API",
      repo: "book-a-table-api",
      fallbackDescription:
        "Restaurant booking backend built with ASP.NET Core and PostgreSQL.",
      image: "/images/bookatable.png",
      tech: ["C#", "ASP.NET Core", "PostgreSQL"],
      github: "https://github.com/awalashfaqul/book-a-table-api",
    },
    {
      title: "Weather API",
      repo: "weather-api",
      fallbackDescription: "Phoenix + Elixir backend for weather data.",
      image: "/images/weather.png",
      tech: ["Elixir", "Phoenix", "PostgreSQL"],
      github: "https://github.com/awalashfaqul/weather-api",
    },
  ];

  // ---- Fetching GitHub descriptions ----
  useEffect(() => {
    fetch("https://api.github.com/users/awalashfaqul/repos")
      .then((res) => res.json())
      .then((data) => {
        const enrich = (projects) =>
          projects.map((p) => {
            const repo = data.find(
              (g) => g.name.toLowerCase() === p.repo.toLowerCase()
            );
            return {
              ...p,
              description: repo?.description || p.fallbackDescription,
            };
          });
        setFrontend(enrich(frontendProjects));
        setBackend(enrich(backendProjects));
      })
      .catch(() => {
        // fallback if GitHub rate limit or network error
        setFrontend(frontendProjects);
        setBackend(backendProjects);
      });
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="rounded-xl p-6 border border-green-600/20 hover:-translate-y-1 hover:shadow-lg transition-all bg-gray-900/40">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 w-full object-cover"
      />
      <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-3">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-xs text-blue-300 rounded-full 
                       hover:bg-blue-500/20 hover:shadow-md transition"
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
                   bg-blue-600 rounded-lg hover:bg-blue-700
                   border border-blue-500/30 shadow hover:shadow-blue-500/30 transition"
      >
        Visit on GitHub
      </a>
    </div>
  );

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-bold text-4xl md:text-6xl mb-12 bg-gradient-to-r 
                       from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend column */}
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

          {/* Backend column */}
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
    </section>
  );
};
