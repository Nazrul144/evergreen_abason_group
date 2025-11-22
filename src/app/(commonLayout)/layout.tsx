import ScrollToTopButton from "@/components/ButtomToTopScrolling/ScrollToTopButton";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <Navbar />
      <div className="min-h-screen flex flex-col">
      {children}
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default CommonLayout;
