import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
        <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <nav className="d-none d-lg-block">
            <a href="#home" className="me-3 text-dark">
              Home
            </a>
            <a href="#products" className="me-3 text-dark">
              Products
            </a>
            <a href="#resources" className="me-3 text-dark">
              Resources
            </a>
            <a href="#pricing" className="text-dark">
              Pricing
            </a>
          </nav>
        </div>
          <img
              src="/images/nav-icon.png" // Replace with user image
              alt="Candice Wu"
              className="rounded-circle d-none d-lg-block"
            />
            <button className="btn btn-outline-dark d-lg-none">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Beautiful analytics to grow smarter</h2>
        <p className="text-secondary">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="d-flex justify-content-center flex-column flex-sm-row gap-3">
          <button className="btn btn-outline-dark px-5">Demo</button>
          <button className="btn btn-danger px-5">Sign up</button>
        </div>
      </div>

      {/* Interactive Section */}
      <div className="bg-light py-5">

        <img
          src="/images/mobile-container.png"
          className="d-flex justify-content-center d-lg-none cont-img"
          alt="API Stack"
        />
        <img
          src="/images/desktop-container.png"
          className="d-none d-lg-flex justify-content-center cont-img"
          alt="API Stack"
        />
      </div>

      {/* Trusted Logos */}
      <div className="container my-5">
        <p className="text-center mb-4">Join 4,000+ companies already growing</p>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          <img src="/images/logo1.png" alt="Logo 1" className="logo-img"/>
          <img src="/images/logo2.png" alt="Logo 2" className="logo-img"/>
          <img src="/images/logo3.png" alt="Logo 3" className="logo-img"/>
          <img src="/images/logo4.png" alt="Logo 4" className="logo-img"/>
          <img src="/images/logo5.png" alt="Logo 5" className="logo-img"/>
          <img src="/images/logo6.png" alt="Logo 6" className="logo-img"/>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">
            Analytics that feels like it’s from the future
          </h3>
          <p className="text-center text-secondary">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
          </p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
            <div className="col text-center">
            <img src="/images/icon1.png" alt="Logo 2" className="icon-img"/>
              <h5>Share team inboxes</h5>
              <p className="text-muted">
                Whether you have a team of 2 or 200, our shared inboxes keep everyone on the same page.
              </p>
            </div>
            <div className="col text-center">
            <img src="/images/icon2.png" alt="Logo 2" className="icon-img"/>
              <h5>Deliver instant answers</h5>
              <p className="text-muted">
                An all-in-one customer service platform that helps balance everything your customers need.
              </p>
            </div>
            <div className="col text-center">
            <img src="/images/icon3.png" alt="Logo 2" className="icon-img"/>
              <h5>Manage your team with reports</h5>
              <p className="text-muted">
                Measure what matters with easy-to-use reports.
              </p>
            </div>
            <div className="col text-center">
            <img src="/images/icon4.png" alt="Logo 2" className="icon-img"/>
              <h5>Connect with customers</h5>
              <p className="text-muted">
                Solve a problem or close a sale in real-time with chat.
              </p>
            </div>
            <div className="col text-center">
            <img src="/images/icon5.png" alt="Logo 2" className="icon-img"/>
              <h5>Connect the tools you already use</h5>
              <p className="text-muted">
                Explore 100+ integrations that make your day-to-day work easier.
              </p>
            </div>
            <div className="col text-center">
            <img src="/images/icon6.png" alt="Logo 2" className="icon-img"/>
              <h5>Our people make the difference</h5>
              <p className="text-muted">
                We’re an extension of your team. Chat to us 24/7 when you need help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="hero-section text-center py-5">
        <div className="container">
          <img
            src="/images/Sisyphus.png" // Replace with logo
            alt="Sisyphus Logo"
            className="mb-3 logo-img"
          />
          <h1 className="mb-4">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h1>
          <div className="d-flex flex-column align-items-center">
            <img
              src="/images/Avatar.png" // Replace with user image
              alt="Candice Wu"
              className="rounded-circle mb-2"
            />
            <p className="text-muted">Candice Wu</p>
            <p className="text-muted small">Product Manager, Sisyphus</p>
          </div>
        </div>
      </section>

      <section className="faq-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted mb-5">
            Everything you need to know about the product and billing.
          </p>
          <div className="accordion" id="faqAccordion">
            {/* FAQ Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is there a free trial available?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, you can try Untitled for free for 30 days. We also offer a
                  free onboarding call to help you get started.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Can I change my plan later?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, you can change your plan anytime from your account
                  settings.
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is your cancellation policy?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can cancel your subscription anytime. No questions asked.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How does billing work?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Billing is handled monthly or annually, depending on your plan.
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How do I change my account email?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can update your email address in your account settings.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
          <img src="/images/Avatar-group.png" alt="Logo 6" className="avt-img"/>
            <p>Still have questions?</p>
            <p className="text-muted">
              Can’t find the answer you’re looking for? Chat with our team.
            </p>
            <button className="btn btn-danger">Get in touch</button>
          </div>
        </div>
      </section>

      <section className="blog-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest Blog Posts</h2>
          <p className="text-center text-muted mb-5">
            Tools and strategies modern teams need to help their companies grow.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/blob1.png"
                  className="blog-img"
                  alt="UX review"
                />
                <div className="card-body">
                  <h5 className="card-title">UX Review Presentations</h5>
                  <p className="text-muted small">Olivia Rhye - 20 Jan 2024</p>
                  <p className="card-text">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/blob2.png"
                  className="blob-img"
                  alt="Migrating to Linear"
                />
                <div className="card-body">
                  <h5 className="card-title">Migrating to Linear 101</h5>
                  <p className="text-muted small">Phoenix Baker - 19 Jan 2024</p>
                  <p className="card-text">
                    Linear helps streamline software projects, sprints, tasks, and
                    bug tracking. Here's how to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/blob3.png"
                  className="blob-img"
                  alt="API Stack"
                />
                <div className="card-body">
                  <h5 className="card-title">Building Your API Stack</h5>
                  <p className="text-muted small">Lana Steiner - 18 Jan 2024</p>
                  <p className="card-text">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and managing them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-section py-5 bg-light text-center">
        <div className="container">
          <h2>Start your free trial</h2>
          <p className="text-muted">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <button className="btn btn-lg mx-2">Learn more</button>
          <button className="btn btn-outline-dark btn-danger btn-lg mx-2 color-white">Get started</button>
        </div>
      </section>

      <footer className="footer-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Product Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Product</h5>
              <ul className="list-unstyled">
                <li>Overview</li>
                <li>Features</li>
                <li>
                  Solutions <span className="badge bg-success text-white">New</span>
                </li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Company</h5>
              <ul className="list-unstyled">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Resources</h5>
              <ul className="list-unstyled">
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Use Cases Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Use cases</h5>
              <ul className="list-unstyled">
                <li>Startups</li>
                <li>Enterprise</li>
                <li>Government</li>
                <li>SaaS centre</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Social</h5>
              <ul className="list-unstyled">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="col-md-2">
              <h5 className="text-dark">Legal</h5>
              <ul className="list-unstyled">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom mt-5 d-flex justify-content-between align-items-center">
            <img src="/images/logo.png" alt="Logo" className="footer-logo" />
            <p className="mb-0 text-muted">
              © 2077 zysktechnologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;