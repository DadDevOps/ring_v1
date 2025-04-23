import Head from 'next/head'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <>
      <Head>
        <title>RingVio – Elegant Rings &amp; Jewelry</title>
        <meta
          name="description"
          content="RingVio offers stunning engagement rings, wedding bands, and custom jewelry designs."
        />
      </Head>

      <Header />
      <main>
        <HeroSlider />

        <section id="features" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Why RingVio?</h2>
          <p className="max-w-3xl mx-auto">
            Crafted with passion, designed for love. Discover what sets our rings apart.
          </p>
        </section>

        {/* Placeholder sections */}
        <section id="about" className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto">
            RingVio has been creating unforgettable moments for over a decade...
          </p>
        </section>

        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-3xl mx-auto">
            Have a question? Reach us at <a href="mailto:hello@ringvio.com" className="text-indigo-600">hello@ringvio.com</a>.
          </p>
        </section>
      </main>
    </>
  )
}
