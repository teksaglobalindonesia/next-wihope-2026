import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import LoginPage from "@/components/login-page";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1">
        <LoginPage />
      </section>

      <Footer />
    </main>
  );
}