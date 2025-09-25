import{ RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML","CSS","React","Vite.js","Vue.js","Next.js","Angular",
    "TypeScript","Tailwind CSS","Bootstrap","Redux","Svelte"
  ];

  const backendSkills = [
    "C#","ASP.NET Core","Entity Framework","Elixir","Phoenix LiveView","Node.js","Python (Flask, Django)",
    "Java (Spring Boot)","Ruby on Rails","PHP (Laravel, CodeIgniter)","RESTful APIs"
  ];

  const databaseSkills = [
    "SQL Server","PostgreSQL","MySQL","MongoDB","Redis","SQLite","Firebase","DynamoDB","In-Memory DB"
  ];

  const testSkills = [
    "Swagger","Selenium","Postman","Playwright","JUnit","NUnit","xUnit","TDD"
  ];

  const cicdSkills = [
    "GitHub Actions","Jenkins","Travis CI","CircleCI","Azure DevOps","GitLab CI/CD","Git","GitHub"
  ];

  const cloudSkills = [
    "AWS (EC2, S3, RDS)","Azure (App Services, SQL Database)","Google Cloud (Compute Engine, Cloud Storage)",
    "Heroku","Netlify","Vercel","Docker","Kubernetes","Kafka"
  ];

  const toolsSkills = [
    "Visual Studio","VS Code","Postman","Figma","Jira","Trello","Slack","Notion","Confluence"
  ];

  const SkillGroup = ({ title, skills }) => (
    <div className="rounded-xl p-6 border border-orange-500/20 hover:-translate-y-1 transition-all">
      <h4 className="text-lg font-semibold mb-4 text-orange-300 underline">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="bg-blue-500/10 pt-1 px-3 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const certifiCations = [
    "AWS Certified Solutions Architect","Microsoft Certified: Azure Fundamentals",
    "Google Cloud Associate Cloud Engineer","Certified Kubernetes Administrator (CKA)",
    "Docker Certified Associate","Complete Python Developer Bootcamp"
  ];

  const certifiCationsFrom = [
    "Amazon Web Services (AWS)","Microsoft","Google Cloud","The Linux Foundation","Docker","Udemy"
  ];

  const degreeProgram = [
    "YH-Diploma, Fullstack Developer .NET",
    "M.Sc. in Entrepreneurship and Innovation Management",
    "M.Sc. in Electrical Engineering (Signal Processing)",
    "M.Sc. in Telecommunication Engineering",
    "B.Sc. in Computer Science"
  ];

  const degreeSchool = [
    "Chas Academy, Stockholm, Sweden",
    "KTH Royal Institute of Technology, Stockholm, Sweden",
    "Blekinge Institute of Technology, Karlskrona, Sweden",
    "Independent University, Bangladesh",
    "Ahsanullah University of Science and Technology, Bangladesh"
  ];

  const degreePeriod = [
    "2023 - 2025",
    "2020 - 2021",
    "2010 - 2013",
    "2006 - 2008",
    "1999 - 2005"
  ];

  const languageList = [
    { name: "English", level: "Bilingual" },
    { name: "Swedish", level: "Fluent" },
    { name: "Bengali", level: "Mother tongue" },
    { name: "Hindi", level: "Conversational" },
    { name: "Urdu", level: "Conversational" }
  ];

  const workExperiences = [
    { role: "Fullstack Developer Elixir (Intern)",
      company: "QSimbo AB, Växjö, Sweden",
      period: "Dec 2024 – June 2025",
      details: [
        "Developing and maintaining web applications using Elixir and Phoenix with React and Tailwind CSS.",
        "Collaborating with cross-functional teams to define and implement new features.",
        "Participating in code reviews and contributing to team knowledge sharing."
      ]
    },
    {
      role: "Full Stack Developer (.NET)",
      company: "IndexCreate Sweden AB, Stockholm, Sweden",
      period: "Apr 2022 – Nov 2024",
      details: [
        "Led the development of a customer management system using C#, ASP .NET Core, SQL Server and React.",
        "Optimized application performance, reducing load times by 30%.",
        "Worked with CI/CD pipelines and test automation (TDD)."
      ]
    },
    {
      role: "IT Coordinator (Part-time)",
      company: "CISCO Network Academy, UODA, Bangladesh",
      period: "May 2010 – Aug 2010",
      details: [
        "Managed and maintained the academy's computer lab and network infrastructure.",
        "Provided technical support to students and staff, resolving hardware and software issues.",
        "Assisted in the setup and configuration of networking equipment for training purposes."
      ]
    },
    {
      role: "Lecturer",
      company: "Department of Computer Science, University Of Development Alternative (UODA), Bangladesh",
      period: "Feb 2006 – Aug 2010",
      details: [
        "Taught undergraduate courses in Computer Science, including Programming, Data Structures, and Database Management.",
        "Developed course materials and assessments to enhance student learning.",
        "Led pedagogical projects, supervised students and created digital learning environments.",
        "Mentored students on academic and career development."
      ]
    }   
  ];


  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-bold text-3xl md:text-6xl mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border border-blue-500/20 mb-8 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-lg mb-6 max-w-m mx-auto">
                Tech enthusiast & software developer | Passionate about clean code, new tech, and building smart solutions.
                </p>
            </div>

            <div className="rounded-xl p-4">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Technical Skills</h3>
            </div>

            {/* === Skills in exactly 2 columns === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillGroup title="Frontend" skills={frontendSkills} />
            <SkillGroup title="Backend" skills={backendSkills} />
            <SkillGroup title="Database" skills={databaseSkills} />
            <SkillGroup title="Testing" skills={testSkills} />
            <SkillGroup title="CI/CD" skills={cicdSkills} />
            <SkillGroup title="Cloud Services" skills={cloudSkills} />
            <SkillGroup title="Tools" skills={toolsSkills} />
            </div>

            <hr className="col-span-2 border-white/10 mt-6" /> {/* horizontal line */}

            {/* === Work Experience Section (Placeholder) === */}
            <div className="rounded-xl p-4 mb-2 mt-10">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Work Experiences</h3>
            </div>
                {/* 1-column grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-1">
                    <WorkGroup />
                </div> */}
                    

            <div className="grid grid-cols-1 md:grid-cols-1">
                {/* Experience Column */}
                {workExperiences.map((experience, i) => (
                    <div className="rounded-xl p-8 border border-purple-500/20 mb-8 hover:-translate-y-1 transition-all">
                        <ul className="space-y-4">
                            <li key={i}>
                                <p className="text-purple-300 font-lg font-semibold">{experience.role} - <span className="italic">{experience.period}</span></p>
                                <p className="text-gray-400 text-lg italic">
                                    {experience.company}
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                    {experience.details.map((detail, j) => (
                                        <li key={j} className="text-gray-300 text-m">{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <hr className="col-span-2 border-white/10 mt-6" /> {/* horizontal line */}

                {/* === Education Section (Placeholder) === */}
            <div className="rounded-xl p-4 mb-2 mt-12">
                <h3 className="text-xl font-bold mb-2 text-green-600">Academic Attainments</h3>
            </div>
                {/* 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Certifications Column */}
                <div className="rounded-xl p-8 border border-green-600/20 mb-8 hover:-translate-y-1 transition-all">
                    <h4 className="text-lg font-semibold mb-4 text-green-300 underline">
                        Certifications
                    </h4>
                    <ul className="list-disc list-inside">
                        {certifiCations.map((cert, index) => (
                            <li key={index} className="text-gray-300">
                                {cert} - {certifiCationsFrom[index]}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Degree Programs Column */}
                <div className="rounded-xl p-8 border border-green-600/20 mb-8 hover:-translate-y-1 transition-all">
                    <h4 className="text-lg font-bold mb-4 text-green-300 underline">
                        Degrees
                    </h4>
                    <ul className="space-y-4">
                        {degreeProgram.map((program, i) => (    
                            <li key={program}>
                                <p className="text-gray-100 font-medium font-semibold">{program}</p>
                                <p className="text-gray-400 text-sm italic">
                                    {degreeSchool[i]} — <span>{degreePeriod[i]}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr className="col-span-2 border-white/10 mt-4 mb-4" /> {/* horizontal line */}

            <div className="rounded-xl p-4 mb-2 mt-10">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Languages</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-8 border border-white/10 mb-8 hover:-translate-y-1 transition-all">
                    <ul className="space-y-4">
                        {languageList.map((lang, index) => (
                            <li key={index} className="text-gray-300">
                                <span className="font-semibold">{lang.name}</span> - <span className="italic">{lang.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};
