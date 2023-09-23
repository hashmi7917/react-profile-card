import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <Skills />
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="intro img"
      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1 className="name">Jonas Marsh</h1>
      <p className="intro">
        A Full-Stack developer is a professional responsible for working on both
        front-end and back-end development processes. They design, develop, and
        maintain fully-fledged and functioning platforms with databases or
        servers.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <SkillList name="HTML & CSS" color="blue" />
      <SkillList name="JavaScript" color="yellow" />
      <SkillList name="Web Designing" color="lightgreen" />
      <SkillList name="Git and GitHub" color="red" />
      <SkillList name="React JS" color="skyblue" />
      <SkillList name="Sevelte" color="orange" />
      <SkillList name="Bootstrap" color="blue" />
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill">
      <li className="skillset" style={{ backgroundColor: `${props.color}` }}>
        {props.name}
      </li>
    </ul>
  );
}
