import "./App.css";

function Nav() {
  return (
    <header class="main-head">
      <nav>
        <h1 class="logo">
          Augmetriz <span>.tech</span>
        </h1>
        <ul class="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#hackathon">Hackathon</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="intro-text">
        <h1>Teenathon</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="intro-btns">
          <button>Know More</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="intro-img">
        <img src="/images/cyborg-sign-up.png" />
      </div>
    </section>
  );
}
function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
    </>
  );
}

export default App;
