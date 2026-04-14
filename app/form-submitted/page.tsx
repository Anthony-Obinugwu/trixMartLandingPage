"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function FormSubmittedPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center px-4 py-20">
                <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-center">
                        <div className="bg-green-50 p-4 rounded-full">
                            <CheckCircle className="w-24 h-24 text-green-500" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-[#051650]">Submission Successful</h1>
                        <p className="text-[#3F4D67] text-lg leading-relaxed">
                            Thank you for contacting Trix Mart. Your inquiry has been received and is currently being reviewed by our professional support team.
                        </p>
                        <p className="text-[#3F4D67] text-md">
                            We understand the importance of your request and assure you that a representative will respond to your inquiry shortly.
                        </p>
                    </div>
                    <div className="pt-8">
                        <Link href="/">
                            <Button className="bg-[#FF8B2A] hover:bg-[#e67a1f] text-white px-10 py-7 text-xl rounded-full shadow-lg hover:shadow-xl transition-all font-semibold">
                                Return to Homepage
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
