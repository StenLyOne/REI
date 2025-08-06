import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { LazyAnimations } from "./hooks/LazyAnimations";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const title = "Real Estate Coaching | Become a Certified Investor Specialist";
const description =
  "Learn how to grow your real estate business, attract investors, and build long-term wealth with our expert-backed program.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="REI Institute" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="REI Institute - Real Estate Coaching"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rei_institute" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Question json */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a certified real estate investor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A certified real estate investor is a professional who has completed specialized training and demonstrated expertise in property investment strategies, market analysis, and portfolio building. Certification increases credibility and opens up more investment opportunities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to complete the REI Institute program?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most students complete the REI Institute certification in 8–12 weeks, depending on their schedule and pace. The program is designed for flexibility, allowing you to learn at your own speed while still gaining in-depth knowledge.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need prior experience in real estate to enroll?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No prior experience is required. The program is beginner-friendly and designed to equip both newcomers and experienced professionals with practical, actionable skills in real estate investing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes the REI Institute program different from traditional real estate courses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unlike many theory-based courses, the REI Institute focuses on real-world applications. Our curriculum includes hands-on case studies, mentorship from seasoned investors, and strategies that are working in today's real estate market.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much can I expect to earn after certification?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Earnings vary depending on your strategy, location, and commitment. Many certified investors report making their first profitable deal within the first 6 months after completing the program.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the certification recognized nationwide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the REI Institute Certification is respected by investors, agencies, and real estate professionals across the U.S. It demonstrates practical skills and readiness to operate successfully in the real estate industry.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of real estate strategies will I learn?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You will master multiple strategies including residential flips, rental property investing, wholesaling, short-term rentals, and passive income generation through multi-family properties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What support do I get after completing the course?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "After certification, you gain lifetime access to our investor community, ongoing mentorship opportunities, and exclusive resources to help you close your first deals and scale your investment portfolio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I study at my own pace?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. The program is 100% online and self-paced, meaning you can study whenever and wherever works best for you, without sacrificing quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I enroll in the REI Institute Certification Program?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply click the 'Enroll Now' button on this page, complete a short registration form, and you’ll gain immediate access to the learning platform and all course materials.",
                  },
                },
              ],
            }),
          }}
        />

      </head>

      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <LazyAnimations />
      </body>
    </html>
  );
}
