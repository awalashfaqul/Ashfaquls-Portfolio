export const Home = () => {
  return (
    <section id="home" 
        className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4"> 
            <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Welcome to My Portfolio</h1>
            {/* <div className="rounded-xl p-8 border border-white/10 mb-8 hover:-translate-y-1 transition-all"> */}
                <p className="text-gray-300 text-lg p-8 mb-8 max-w-lg mx-auto">
                    I'm Ashfaqul Awal, a passionate developer dedicated to crafting clean, scalable applications. My goal is to build impactful solutions that enhance user engagement while offering both exceptional performance and a delightful user experience. Explore my projects and get to know more about me!
                </p>
            {/* </div> */}

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
  );
};
