import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';
import Cart from '@/components/custom/cart';

export default function CartPage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex flex-col gap-[40px]">

        {/* Hero Section */}
        <section className="w-full bg-neutral-silver">
          <div className="mx-auto flex h-[308px] w-[1440px] flex-col items-center justify-center gap-[32px] px-[144px] py-[96px]">
            <div className="flex w-[1152px] flex-col gap-[32px]">
              <h1 className="h-[76px] w-[1152px] text-center font-inter text-[64px] font-semibold leading-[76px] text-neutral-d-grey">
                Your Cart
              </h1>
              <p className="h-[24px] w-[1152px] text-center font-inter text-[16px] font-normal leading-[24px] text-neutral-grey">
                Review your selected items and proceed to checkout when you&apos;re ready.
              </p>
            </div>
          </div>
        </section>

        {/* Cart Items */}
        <Cart />

      </main>

      <Footer />
    </>
  );
}