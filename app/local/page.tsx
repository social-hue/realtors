import Image from "next/image";

export default function Local() {
    return (
        <main className="min-h-screen">
            <div className="relative h-[70vh]">                             
                <div className="absolute inset-0 top-0 left-0 w-full h-full">
                    <Image src="/landscape.jpg" alt="Local" fill className="object-cover" />
                </div>
            </div>
        </main>
    )
}   