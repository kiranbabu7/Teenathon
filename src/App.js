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
          <button className="green-btn">Sign Up</button>
        </div>
      </div>
      <div className="intro-img">
        <img src="/images/cyborg-sign-up.png" />
      </div>
    </section>
  );
}
function ProblemStatement() {
  return (
    <section className="problemstatement">
      <h1 className="center-text">Problem Statement</h1>
      <div className="answer-1">
        <div className="img-container">
          <img src="/images/answer1.png" />
        </div>
        <div className="text-container">
          <h2 className="center-text">Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam inventore doloribus molestias veniam ut eveniet sed error
            cum! Molestias quis pariatur molestiae quae sint non laboriosam
            eligendi laudantium necessitatibus.
          </p>
        </div>
      </div>
      <div className="answer-2">
        <div className="text-container">
          <h2 className="center-text">Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam inventore doloribus molestias veniam ut eveniet sed error
            cum! Molestias quis pariatur molestiae quae sint non laboriosam
            eligendi laudantium necessitatibus.
          </p>
        </div>
        <div className="img-container">
          <img src="/images/answer2.png" />
        </div>
      </div>
    </section>
  );
}
function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <ProblemStatement></ProblemStatement>
    </>
  );
}

export default App;
