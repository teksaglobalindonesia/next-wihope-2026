import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import UserPage from "@/components/user-page";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Header />
      <UserPage />
      <Footer />
    </main>
  );
}