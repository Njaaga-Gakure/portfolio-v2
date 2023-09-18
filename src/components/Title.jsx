import { useAppContext } from "../context/AppProvider";

const Title = ({ name }) => {
  const { isDarkMode } = useAppContext();
  return (
    <div className="center-container title">
      <hr />
      <h3
        className={isDarkMode ? "title__text title__text--dark" : "title__text"}
      >
        {name}
      </h3>
      <hr />
    </div>
  );
};

export default Title;
