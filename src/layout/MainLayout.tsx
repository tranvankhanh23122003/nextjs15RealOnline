import Header_menu from "../components/Menu/Header_menu";
import Footer_menu from "../components/Menu/Footer_menu";
type MainLayoutProps = {
  children: any;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header_menu />
      <div>
        {children}
      </div>
      <Footer_menu />

    </>
  );
};

export default MainLayout;
