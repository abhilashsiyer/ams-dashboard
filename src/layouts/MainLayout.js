import HomeHeader from "../components/HomeHeader";
import Header from "./../components/Header";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <HomeHeader {...props} />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default MainLayout;
