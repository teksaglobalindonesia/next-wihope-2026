import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer/>
    </>
  );
}