import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HashRedirect from '@/components/HashRedirect';
import StickyBookCall from '@/components/StickyBookCall';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <HashRedirect />
      <Navbar />
      <main id="main-content" className="bg-[var(--background)] min-h-screen transition-colors duration-300">{children}</main>
      <Footer />
      <StickyBookCall />
    </>
  );
}
