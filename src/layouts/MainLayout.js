import Header from "./../components/Header";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default MainLayout;
