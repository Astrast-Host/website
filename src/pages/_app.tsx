import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      forcedTheme="dark" // Force dark theme
      enableSystem={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
