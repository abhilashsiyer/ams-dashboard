import FullPageLoader from "../components/FullPageLoader";
import HomeHeader from "../components/HomeHeader";

const HomeLayout = (props) => {
  return (
    <div className="fullHeight">
      <HomeHeader {...props} />
      <div className="main">{props.children}</div>
      {/* <FullPageLoader/> */}
    </div>
  );
};

export default HomeLayout;
