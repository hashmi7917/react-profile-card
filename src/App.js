import './styles.css';

const skills = [
  { skillType: 'Html & Css', level: '💪', color: '#DFFF00' },
  { skillType: 'JavaScript', level: '💪', color: '#FFBF00' },
  { skillType: 'Web Design', level: '✊', color: '#FF7F50' },
  { skillType: 'Git & GitHub', level: '💪', color: '#DE3163' },
  { skillType: 'React JS', level: '✊', color: '#6495ED' },
  { skillType: 'Bootstrap', level: '💪', color: '#CCCCFF' },
  { skillType: 'MongoDb', level: '✊', color: '#40E0D0' },
  { skillType: 'Tailwind', level: '✊', color: '#9FE2BF' },
];

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
  const skillSet = skills;
  return (
    <ul>
      {skillSet.map((skill) => (
        <SkillList skillObj={skill} key={skill.skillType} />
      ))}
    </ul>
  );
}

function SkillList({ skillObj }) {
  return (
    <ul className="skill">
      <li className="skillset" style={{ backgroundColor: `${skillObj.color}` }}>
        {skillObj.skillType} <span>{skillObj.level}</span>
      </li>
    </ul>
  );
}
