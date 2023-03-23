import HomeHeader from "../components/HomeHeader";
import Header from "./../components/Header";
import FullPageLoader from "../components/FullPageLoader";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <HomeHeader {...props} />
      <div className="main">{props.children}</div>
      <FullPageLoader/>
    </div>
  );
};

export default MainLayout;
