import './App.css';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
    action: 'Sign up for free',
    style: 'outline',
  },
  {
    name: 'Pro',
    price: '$15',
    features: ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access'],
    action: 'Get started',
    style: 'solid',
  },
  {
    name: 'Enterprise',
    price: '$29',
    features: ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access'],
    action: 'Contact us',
    style: 'solid',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">Company name</a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#support">Support</a>
          <a href="#pricing">Pricing</a>
          <a className="signup-link" href="#pricing">Sign up</a>
        </nav>
      </header>

      <main id="top" className="content">
        <section id="pricing" className="pricing-section" aria-labelledby="pricing-title">
          <h1 id="pricing-title">Pricing</h1>
          <p className="intro">Quickly build an effective pricing table for your potential customers with this<br className="desktop-break" /> Bootstrap example. It's built with default Bootstrap components and utilities with<br className="desktop-break" /> little customization.</p>
          <div className="plans">
            {plans.map((plan) => (
              <article className="plan" key={plan.name}>
                <h2>{plan.name}</h2>
                <div className="plan-body">
                  <p className="price"><strong>{plan.price}</strong> <span>/ mo</span></p>
                  <ul>
                    {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <a className={`plan-button ${plan.style}`} href="#top">{plan.action}</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><span className="footer-mark">B</span><small>© 2017-2018</small></div>
        <div id="features"><h3>Features</h3><a href="#features">Cool stuff</a><a href="#features">Random feature</a><a href="#features">Team feature</a><a href="#features">Stuff for developers</a><a href="#features">Another one</a></div>
        <div><h3>Resources</h3><a href="#support">Resource</a><a href="#support">Resource name</a><a href="#support">Another resource</a><a href="#support">Final resource</a></div>
        <div id="enterprise"><h3>About</h3><a href="#enterprise">Team</a><a href="#enterprise">Locations</a><a href="#enterprise">Privacy</a><a href="#enterprise">Terms</a></div>
      </footer>
    </div>
  );
}

export default App;
