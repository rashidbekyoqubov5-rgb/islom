import './App.css';
import ProductList from './components/ProductList/ProductList';

const plans = [
  {
    id: 1,
    title: 'Free',
    price: '$0',
    features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
    buttonText: 'Sign up for free',
    variant: 'outline',
  },
  {
    id: 2,
    title: 'Pro',
    price: '$15',
    features: ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access'],
    buttonText: 'Get started',
    variant: 'primary',
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '$29',
    features: ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access'],
    buttonText: 'Contact us',
    variant: 'primary',
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Company name</div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#support">Support</a>
          <a href="#pricing">Pricing</a>
          <button type="button" className="sign-up">Sign up</button>
        </nav>
      </header>

      <main className="content">
        <section className="pricing-section" id="pricing">
          <h1>Pricing</h1>
          <p className="subtitle">
            Quickly build an effective pricing table for your potential customers with this
            <br />
            Bootstrap example. It&apos;s built with default Bootstrap components and utilities with
            <br />
            little customization.
          </p>

          <ProductList plans={plans} />
        </section>
      </main>

      <footer className="footer" id="features">
        <div className="footer-brand-block">
          <div className="brand-mark">B</div>
          <small>© 2017-2018</small>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <a href="#features">Cool stuff</a>
          <a href="#features">Random feature</a>
          <a href="#features">Team feature</a>
          <a href="#features">Stuff for developers</a>
          <a href="#features">Another one</a>
          <a href="#features">Last time</a>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#support">Resource</a>
          <a href="#support">Resource name</a>
          <a href="#support">Another resource</a>
          <a href="#support">Final resource</a>
        </div>

        <div className="footer-column" id="enterprise">
          <h3>About</h3>
          <a href="#enterprise">Team</a>
          <a href="#enterprise">Locations</a>
          <a href="#enterprise">Privacy</a>
          <a href="#enterprise">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
