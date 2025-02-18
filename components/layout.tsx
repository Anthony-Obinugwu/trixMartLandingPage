//do not touch this file

import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  backgroundImage?: string
}

export default function Layout({ children, backgroundImage }: LayoutProps) {
  return (
    <div
      className="min-h-screen bg-white relative"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : undefined
      }
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}

