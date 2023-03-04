import HomeHeader from "../components/HomeHeader";

const HomeLayout = (props) => {
  return (
    <div className="fullHeight">
      <HomeHeader {...props} />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default HomeLayout;
