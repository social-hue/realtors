import { Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
    return (
        <>
            <div className="fixed bottom-50 right-2 z-50">
                <div className="flex flex-col gap-2">
                <div className="group">
                <div
                    className="
          absolute bottom-16 right-16
          w-64 rounded-xl bg-white shadow-xl p-4
          opacity-0 translate-y-4 scale-95
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
          transition-all duration-300 ease-out
          pointer-events-none group-hover:pointer-events-auto
        "
                >
                    <p className="text-sm font-semibold text-gray-900">
                        Call us directly
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Timing: 10 A.M - 6 P.M
                    </p>
                </div>
                <div className="flex justify-center items-center h-14 w-14 p-2 rounded-full bg-teal-700 text-white">
                    <FaPhoneAlt className="h-6 w-6" />
                </div>
                </div>
                <div className="group">
                <div
                    className="
          absolute bottom-0 right-16
          w-64 rounded-xl bg-white shadow-xl p-4
          opacity-0 translate-y-4 scale-95
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
          transition-all duration-300 ease-out
          pointer-events-none group-hover:pointer-events-auto
        "
                >
                    <p className="text-sm font-semibold text-gray-900">
                        Chat with us on WhatsApp
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Get instant assistance from our team
                    </p>
                </div>
                <div className="flex justify-center items-center h-14 w-14 p-2 rounded-full bg-green-500 text-white">
                    <FaWhatsapp className="h-8 w-8" />
                </div>
                </div>
                </div>
            </div>
        </>
    )
}