"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Welcome to PAIB</h1>
          <nav className="mt-4">
            <ul className="flex justify-center gap-6">
              <li>
                <a href="#home" className="hover:underline hover:text-yellow-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-yellow-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-yellow-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-yellow-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="text-center py-12 bg-white rounded-lg shadow-sm">
          <h2 className="text-4xl font-bold mb-4 text-blue-700">Simple & Clean Design</h2>
          <p className="text-xl text-gray-600 mb-8">Mian Muhammad Asif Langrah</p>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                We believe in the power of simplicity. This website demonstrates how effective design doesn't need to be
                complicated or rely on heavy frameworks.
              </p>
              <p className="text-gray-600">
                Built with clean code and modern web standards, our approach focuses on performance, accessibility, and
                user experience.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Simplicity in design</li>
                <li>• Fast loading times</li>
                <li>• Accessible to everyone</li>
                <li>• Clean, maintainable code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 border-t border-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Web Design</h3>
              <p className="text-gray-600">
                Clean, modern designs that focus on user experience and conversion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Development</h3>
              <p className="text-gray-600">Fast, reliable websites built with modern web technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Consulting</h3>
              <p className="text-gray-600">Expert advice on web strategy, performance, and best practices.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">Ready to start your project? We'd love to hear from you.</p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-600">hello@example.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-gray-600">(555) 123-4567</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Address:</span>
                  <span className="text-gray-600">123 Web Street, Digital City</span>
                </p>
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you for your message! We'll get back to you soon.")
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-blue-100 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Simple Website. Built with minimal dependencies and maximum care.</p>
          <p className="mt-2 text-sm">Demonstrating that great websites don't need complex frameworks.</p>
        </div>
      </footer>
    </div>
  )
}
