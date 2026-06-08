import Footer from '@/components/custom/footer'
import Header from '@/components/custom/header'
import Profile from '@/components/custom/profile'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Profile />
      </main>
      <Footer />
    </div>
  )
}