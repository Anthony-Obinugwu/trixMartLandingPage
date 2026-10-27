"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Returns & Refunds Policy" },
  { href: "/shipping-policy", label: "Shipping & Delivery Policy" },
  { href: "/acceptable-use", label: "Acceptable Use Policy" },
];

export default function LegalNav() {
  const pathname = usePathname();

  return (
    <div className="mb-8 border-b border-gray-200 pb-4 overflow-x-auto">
      <nav className="flex items-center gap-2 min-w-max">
        {legalLinks.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/terms" && pathname === "/terms-conditions") ||
            (item.href === "/privacy" && pathname === "/privacy-policy") ||
            (item.href === "/acceptable-use" && pathname === "/community-guidelines");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#051650] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

