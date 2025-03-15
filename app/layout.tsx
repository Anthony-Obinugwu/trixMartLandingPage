import type { ReactNode } from "react"
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

interface LayoutProps {
  children: ReactNode
  backgroundImage?: string
}

export default function Layout({ children, backgroundImage }: LayoutProps) {
  return (
    <html lang="en">
      <title>TrixMart</title>
      <link rel="shortcut icon" href="/trixmart-square-blue.png" type="image/x-icon" />
      <body>
        <div
          className="min-h-screen w-full relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10">{children}</div>
        </div>
      </body>
      <Analytics />
    </html>
  )
}
