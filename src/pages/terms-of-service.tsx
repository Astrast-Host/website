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

export default function TermsOfService() {
  return (
    <div className={`${geist.variable} font-sans min-h-screen bg-background`}>
      <Head>
        <title>Terms of Service - Astrast Host</title>
        <meta name="description" content="Terms of Service for Astrast Host" />
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
                <Link href="/legal">Legal</Link>
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
              <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
              <p className="text-sm text-white/60">Effective Date: January 28, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Services Offered</h2>
                <p className="text-white/80">
                  Astrast Host provides shared hosting and web hosting services, including but not limited to 
                  hosting for Minecraft, Python, JavaScript, MongoDB, and other applications.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. Eligibility</h2>
                <p className="text-white/80">
                  You must be at least 13 years old to use our services. By signing up, you confirm that 
                  you meet this age requirement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. Prohibited Activities</h2>
                <p className="text-white/80">You may not use our services for:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Hosting illegal content or malware</li>
                  <li>Violating the terms of service of other platforms, such as Discord</li>
                  <li>Engaging in activities that harm our infrastructure or other customers</li>
                </ul>
              </section>

              {/* Additional sections... */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Uptime Guarantee</h2>
                <p className="text-white/80">
                  We strive to provide 99.9% uptime. However, downtime may occur due to maintenance or 
                  unforeseen circumstances. Astrast Host is not liable for any losses resulting from such downtime.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Contact Information</h2>
                <p className="text-white/80">
                  For any questions about these terms, please contact us at:
                </p>
                <ul className="list-disc pl-6 text-white/80">
                  <li>contact@astrast.com</li>
                  <li>me@tejaswa.pro</li>
                </ul>
              </section>

              <section className="border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">
                  By using our services, you agree to these Terms of Service. We reserve the right to 
                  update these terms at any time. Customers will be notified of significant changes.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
