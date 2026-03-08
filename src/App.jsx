import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

const detailPages = [
  {
    path: "/revenue-portals",
    title: "We don't build websites.\nWe architect revenue portals.",
    paragraphs: [
      "A website is not a strategy. It is a surface.",
      "Most websites exist to confirm presence. They are digital business cards - structured around the company's self-image, not the visitor's decision-making process. They describe. They do not convert.",
      "The distinction matters economically.",
      "AI has made website production nearly free. Templates are abundant. Platforms are accessible. The cost of publishing something that looks credible has collapsed to near zero. When production costs fall to zero, the asset itself carries no inherent value. What remains valuable is architecture - the structural logic that determines what a visitor sees, when they see it, and what they do next.",
      "A portal is not a website with better design. It is a system with commercial intent.",
      "It begins with a question most agencies never ask: what decision does this visitor need to make, and what information, in what sequence, removes the friction between their attention and that decision. The answer determines structure. Structure determines conversion. Conversion determines revenue.",
      "Most websites answer a different question: how do we present ourselves. The result is content organized around internal priorities - departments, services, history - rather than external behavior. Visitors arrive, read, and leave. The funnel never starts because there is no funnel.",
      "A portal treats every element as a variable in a conversion equation. The headline is a hypothesis. The layout is a sequence. The call to action is a test. Nothing is placed for aesthetic reasons alone. Every decision is traceable to a commercial outcome.",
      "This is not a philosophical preference. It is an economic argument.",
      "Traffic costs money. Attention is finite. A website that converts 1% of visitors and a portal that converts 6% are not comparable assets - they represent a sixfold difference in the return on every marketing investment made upstream. The gap compounds. It does not close by itself.",
      "The commoditization of web production has created a market full of surfaces. Most businesses have one. Few have a system.",
      "The question is not whether you have a website. The question is whether it works.",
    ],
    nextPath: "/interface-engineering",
  },
  {
    path: "/interface-engineering",
    title:
      "We don't do design.\nWe engineer interfaces that remove friction and increase decisions.",
    paragraphs: [
      "Design is not a visual discipline. It is a cognitive one.",
      "Every interface presents a series of decisions. Where to look. What to read. What to do next. The designer's task is not to make those decisions beautiful. It is to make them effortless. The difference between a well-designed interface and a poorly designed one is not aesthetic - it is the number of cognitive steps a user must take to complete an action.",
      "Friction is not a metaphor. It is measurable.",
      "A form with ten fields where four would suffice introduces six unnecessary decisions. A navigation structure that reflects internal departments rather than user intent forces visitors to translate your organization before they can find what they need. A call to action buried beneath three paragraphs of context requires patience most visitors do not have. Each of these is a revenue leak. None of them appear on a balance sheet.",
      "The economic logic is direct. Cognitive friction reduces completion rates. Lower completion rates reduce conversions. Fewer conversions reduce revenue. The interface is not a neutral surface - it is an active participant in commercial outcomes.",
      "Most design processes begin with aesthetics and arrive at function as an afterthought. Color palettes are chosen. Layouts are composed. The result looks considered. Whether it performs is a separate question, often unasked.",
      "Subtraction is the discipline that separates interface engineering from decoration. Every element added to a screen competes for attention. Attention is not expandable. Adding a secondary message dilutes the primary one. Adding a secondary action reduces the probability of the primary one. The interface that does less, done precisely, outperforms the interface that does more, done thoroughly.",
      "This is not minimalism as an aesthetic preference. It is minimalism as a structural argument.",
      "Clarity increases action. Not because clarity is pleasant - though it often is - but because clarity reduces the distance between intent and execution. A visitor who understands immediately what to do is more likely to do it. A visitor who must interpret, navigate, or decide what is relevant is more likely to leave.",
      "The interface is where strategy becomes behavior. It is the last point of leverage before a visitor acts or does not.",
    ],
    nextPath: "/owned-communities",
  },
  {
    path: "/owned-communities",
    title:
      "We don't manage social media.\nWe build owned communities that compound loyalty.",
    paragraphs: [
      "Social media management is a service built on a structural flaw.",
      "The flaw is ownership. Every follower on every platform belongs to the platform. The reach, the relationship, the data - all of it is rented. Algorithms determine what your audience sees. Policy changes determine what you can say. Platform economics determine whether your content is amplified or suppressed. The business that has spent years building a following has built nothing it owns.",
      "This is not a criticism of social media as a channel. It is a structural observation about where value accumulates.",
      "Reach is not loyalty. A large following is evidence of past attention, not future behavior. Followers are passive. They receive content. They may engage with it. They do not, by virtue of following, have any particular attachment to the brand behind it. When a competitor offers something more interesting, the algorithm surfaces it. The follower moves on.",
      "A community operates differently.",
      "A community is a group of people who share an identity, a set of values, or a common reference point - and who have chosen to associate that identity with a product or brand. Membership in the community is itself meaningful. It is not passive. It is participatory. Members interact with each other, not only with the brand. The relationship is lateral, not vertical.",
      "This changes the economics of loyalty.",
      "A customer who belongs to a community does not evaluate alternatives the way a passive follower does. Switching is not a price comparison. It is an identity decision. The cost of leaving is not just the loss of a product - it is the loss of belonging. That friction is structural. It does not require constant reinforcement. It compounds.",
      "Loyalty that compounds is qualitatively different from loyalty that must be maintained. Maintained loyalty requires continuous investment - content, campaigns, promotions. Compounding loyalty generates returns that exceed the investment over time. The community does work the brand cannot do alone.",
      "Building a community requires a different starting point. Not: what do we want to say. But: what do people who use this product share with each other. What identity does it enable. What conversation does it invite. The answers to those questions determine architecture. Architecture determines whether what is built is owned or rented.",
      "Followers are rented. Community is owned.",
    ],
    nextPath: "/outcome-fees",
  },
  {
    path: "/outcome-fees",
    title:
      "We don't sell software.\nWe structure outcomes - and take a fee when they exist.",
    paragraphs: [
      "The subscription model is a structural misalignment.",
      "A vendor charges a monthly fee. The fee is collected regardless of whether the software produces value. Growth depends on acquiring new subscribers, not on delivering outcomes to existing ones. The incentive is to sell access, not to generate results. The customer pays for the possibility of value. The vendor is paid whether that possibility is realized or not.",
      "This is not a criticism of software. It is a description of how incentive structures shape behavior.",
      "When fees are decoupled from outcomes, the vendor's attention migrates toward acquisition. Retention is managed through contracts, switching costs, and integrations - not through the continuous delivery of measurable value. The customer's success is a secondary concern. Their continued payment is the primary one.",
      "Outcome-based alignment inverts this logic.",
      "When a fee is contingent on a result, the vendor's interests and the client's interests become identical. There is no incentive to over-engineer, to add complexity that creates dependency, or to expand scope in ways that serve the vendor's revenue rather than the client's outcomes. The shortest path to the result is the only path worth taking.",
      "This changes the nature of the work.",
      "Outcome-based engagements begin with a precise definition of success. Not a list of deliverables. Not a project plan. A measurable result - revenue generated, conversion rate achieved, cost reduced by a defined amount. The work is structured around that result. Everything that does not contribute to it is removed.",
      "Most service relationships avoid this precision. Vague deliverables protect the vendor from accountability. Broad scopes create billable hours. Ambiguous success criteria make it difficult to determine whether value was delivered. The client pays. The vendor delivers something. Whether the something was worth the payment is rarely examined.",
      "The model Merkator operates on is simpler. If the result exists, a fee is appropriate. If it does not, it is not. This is not a generous offer. It is a structural argument about what a service relationship should be.",
      "Alignment of incentives changes behavior. It changes what questions are asked at the start of an engagement. It changes what work is prioritized. It changes what success means. When the fee depends on the outcome, the outcome is no longer a secondary consideration. It is the only one.",
    ],
  },
];

const homePrinciples = [
  {
    path: "/revenue-portals",
    title: "We Don't Build Websites.",
    subtitle: "We Architect Revenue Portals.",
  },
  {
    path: "/interface-engineering",
    title: "We Don't Do Design.",
    subtitle:
      "We Engineer Interfaces That Remove Friction And Increase Decisions.",
  },
  {
    path: "/owned-communities",
    title: "We Don't Manage Social Media.",
    subtitle: "We Build Owned Communities That Compound Loyalty.",
  },
  {
    path: "/outcome-fees",
    title: "We Don't Sell Software.",
    subtitle: "We Structure Outcomes - And Take A Fee When They Exist.",
  },
];

function HomePage() {
  return (
    <div className="page home-page">
      <div className="wave-layer" aria-hidden="true" />

      <header className="brand">MERKATOR™</header>

      <main className="content">
        <section className="hero">
          <p className="hero-kicker">
            Clarity is a <br /> competetive advantage.
          </p>
          <h1>MERKATOR BUILDS IT.</h1>
          <Link to="/contact" className="cta cta-link">
            Speak with us
          </Link>
        </section>

        <section className="principles">
          <div className="principles-list">
            {homePrinciples.map((principle) => (
              <Link
                key={principle.path}
                to={principle.path}
                className="principle-row"
              >
                <span className="principle-copy">
                  <span>{principle.title}</span>
                  <span>{principle.subtitle}</span>
                </span>
                <span className="principle-arrow">&rsaquo;</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Merkator</p>
      </footer>
    </div>
  );
}

function DetailPage({ title, paragraphs, nextPath }) {
  return (
    <div className="page detail-page">
      <div className="wave-layer detail-wave" aria-hidden="true" />

      <header className="detail-header">
        <Link to="/" className="back-link" aria-label="Back to homepage">
          &lsaquo;
        </Link>
        <span className="brand brand-left">MERKATOR™</span>
      </header>

      <main className="detail-content">
        <h1 className="detail-title">
          {title.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <section className="detail-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <div className="detail-actions">
          <Link to="/contact" className="cta cta-link">
            Speak with us
          </Link>
          {nextPath ? (
            <Link to={nextPath} className="next-link" aria-label="Next page">
              &rsaquo;
            </Link>
          ) : null}
        </div>
      </main>

      <footer className="detail-footer">
        <p>&copy; 2026 Merkator</p>
      </footer>
    </div>
  );
}

function ContactPage() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message:
          "Email setup is incomplete. Add EmailJS keys in your .env file.",
      });
      return;
    }

    try {
      setIsSending(true);
      setFeedback({ type: "idle", message: "" });

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current?.reset();
      setFeedback({ type: "success", message: "Message sent successfully." });
    } catch {
      setFeedback({
        type: "error",
        message: "Could not send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="page contact-page">
      <div className="wave-layer contact-wave" aria-hidden="true" />

      <header className="brand">MERKATOR™</header>

      <main className="contact-content">
        <h1 className="contact-title">Get in touch</h1>

        <section className="contact-grid">
          <form
            ref={formRef}
            className="contact-form-card"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              aria-label="Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone"
              aria-label="Phone"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              required
            />
            <button type="submit" className="cta" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
            {feedback.message ? (
              <p className={`form-feedback ${feedback.type}`}>
                {feedback.message}
              </p>
            ) : null}
          </form>

          <div className="contact-right">
            <div className="contact-info-card">
              <p>0044 00 44 00 00</p>
              <p>info@merkator-solutions.com</p>
              <p>Gani Saramati 94,</p>
              <p>Prizren, Kosovo</p>
            </div>
            <div className="map-card" aria-label="Map preview">
              <iframe
                title="94 Gani Saramati, Prizren map"
                src="https://maps.google.com/maps?q=94%20Gani%20Saramati%2C%20Prizren%2020000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer contact-footer">
        <p>&copy; 2026 Merkator</p>
      </footer>
    </div>
  );
}

function ErrorPage() {
  return (
    <div className="page error-page">
      <div className="wave-layer error-wave" aria-hidden="true" />

      <header className="brand">MERKATOR™</header>

      <main className="error-content">
        <h1>ERROR 404</h1>
      </main>

      <Link to="/" className="error-back">
        &lsaquo; BACK
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      {detailPages.map((detailPage) => (
        <Route
          key={detailPage.path}
          path={detailPage.path}
          element={
            <DetailPage
              title={detailPage.title}
              paragraphs={detailPage.paragraphs}
              nextPath={detailPage.nextPath}
            />
          }
        />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
