import { Geist } from "next/font/google";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Legal() {
  return (
    <div className={`${geist.variable} font-sans min-h-screen bg-background`}>
      <Head>
        <title>Legal Information - Astrast Host</title>
        <meta name="description" content="Legal information and privacy policy for Astrast Host services." />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full glass-panel z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="https://astrast.com/Images/astrast_1.png"
                alt="Astrast Host Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium text-white">Astrast Host</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/terms-of-service">Terms of Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="glass-panel">
            <CardHeader>
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-sm text-white/60">Last updated: January 28, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                <p className="text-white/80">We collect the following information:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Personal details (e.g., name, email, etc.) during account creation.</li>
                  <li>Server usage data for monitoring purposes.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To monitor server activity for compliance with our Terms of Service.</li>
                  <li>To communicate with you regarding your account or support requests.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. Data Security</h2>
                <p className="text-white/80">
                  Your data is handled securely and will not be shared with third parties. 
                  We implement measures to prevent unauthorized access, but we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Age Restriction</h2>
                <p className="text-white/80">
                  Astrast Host does not knowingly collect data from individuals under 13. 
                  If you believe a minor has provided us with their data, contact us immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Contact Information</h2>
                <p className="text-white/80">
                  For any questions about our privacy policy, please contact us at:
                </p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>contact@astrast.com</li>
                  <li>me@tejaswa.pro</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
