import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import PressReleaseListing from "@/components/press-releases/PressReleaseListing";

export const metadata = {
  title: "Press Releases | London Strategy Centre",
  description: "Latest press releases and announcements from London Strategy Centre.",
};

export default function PressReleasePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PressReleaseListing />
      </main>
      <Footer />
    </div>
  );
}
