import{ RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" 
        className="min-h-screen flex items-center justify-center py-20 bg-black px-4">
        <RevealOnScroll>
            <div className="max-w-2xl w-full border border-gray-700 rounded-xl text-center mx-auto p-8">
                <div className="z-10 max-w-4xl mx-auto px-4 text-center"> 
                    <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Welcome to My Portfolio</h1>
                    <div className="rounded-xl p-8 border border-white/10 mb-8 hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 text-lg mb-6 max-w-lg mx-auto">
                            Hello, I’m Ashfaqul Awal – a Stockholm-based <span className="font-semibold text-blue-400">Fullstack Developer</span> 
                            and lifelong learner with a strong background as a <span className="font-semibold italic underline">university lecturer</span> in 
                            Computer Science.</p>

                        <p className="text-gray-300 text-lg mb-6 max-w-lg mx-auto"> 

                            Passionate and dedicated about crafting secure, clean and scalable applications 
                            using <span className="font-semibold text-blue-400">C#, .NET Core, React, Tailwind CSS, Bootstrap, Azure, SQL, Firebase, Elixir, 
                            Phoenix and LiveView.</span> Passionate about turning complex technology into impactful 
                            solutions that enhance user engagement while offering both exceptional 
                            performance and a delightful user experience. </p>

                        <p className="text-gray-300 text-lg mb-6 max-w-lg mx-auto">

                            After years of teaching and mentoring, I bring a unique mix of deep technical 
                            expertise, communication skills, and a passion for continuous learning—helping 
                            teams deliver high-quality software that truly serves users.</p>

                        <p className="text-gray-300 text-lg mb-6 max-w-lg mx-auto">

                            Explore my projects and get to know more about me!
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>

                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
  );
};
