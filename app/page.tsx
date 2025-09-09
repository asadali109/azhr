
"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Welcome to PAIB</h1>
          <nav className="mt-4">
            <ul className="flex justify-center gap-6">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
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
        <section id="home" className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Simple & Clean Design</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mian Muhammad Asif Langrah
          </p>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                We believe in the power of simplicity. This website demonstrates how effective design doesn't need to be
                complicated or rely on heavy frameworks.
              </p>
              <p className="text-muted-foreground">
                Built with clean code and modern web standards, our approach focuses on performance, accessibility, and
                user experience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Simplicity in design</li>
                <li>• Fast loading times</li>
                <li>• Accessible to everyone</li>
                <li>• Clean, maintainable code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Web Design</h3>
              <p className="text-muted-foreground">
                Clean, modern designs that focus on user experience and conversion.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-muted-foreground">Fast, reliable websites built with modern web technologies.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-muted-foreground">Expert advice on web strategy, performance, and best practices.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-6">Ready to start your project? We'd love to hear from you.</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Email:</span>
                  <span className="text-muted-foreground">hello@example.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Address:</span>
                  <span className="text-muted-foreground">123 Web Street, Digital City</span>
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
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Simple Website. Built with minimal dependencies and maximum care.</p>
          <p className="mt-2 text-sm">Demonstrating that great websites don't need complex frameworks.</p>
        </div>
      </footer>
    </div>
  )
}
