import type { ReactNode } from "react"
import './globals.css'

interface LayoutProps {
  children: ReactNode
  backgroundImage?: string
}

export default function Layout({ children, backgroundImage }: LayoutProps) {
  return (
    <html lang="en">
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
    </html>
  )
}
