export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">Gm Somera</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Frontend Developer | Building clean & modern web apps
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a passionate frontend developer who loves creating clean,
          user-friendly websites. Skilled in React, Tailwind CSS, and
          JavaScript. Always learning and exploring new tech.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project Card Example */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project screenshot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project goes here.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    Live Demo
                  </a>
                  <a href="#" className="text-gray-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Add more project cards as you go */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6">
          I’m always open to new opportunities and collaborations.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t">
        <p>
          © {new Date().getFullYear()} Gm Somera. Built with Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}
