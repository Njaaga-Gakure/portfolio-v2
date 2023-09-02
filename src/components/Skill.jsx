const Skill = ({ name, icon, iconColor }) => {
  return (
    <div className="skill">
      <span className="skill__icon" style={{ color: iconColor }}>
        {icon}
      </span>
      <p className="skill__name">{name}</p>
    </div>
  );
};

export default Skill;
