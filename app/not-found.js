import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-xl text-center px-6">
        <h1 className="text-primary text-[6rem] md:text-[8rem] font-bold tracking-tight mb-4">
          /404/
        </h1>

        <p className="text-primary/60 mb-10 leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
          <br />
          But don’t worry — we’re here to guide you back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-medium rounded-md transition"
          >
            Back to Homepage
            <ArrowUpRight size={16} />
          </Link>

          {/* <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition"
          >
            Contact Support
            <ArrowUpRight size={16} />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
