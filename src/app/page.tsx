import Image from "next/image";
import siteData from "../../data/products.json";
import type { SiteData } from "@/types";

const data: SiteData = siteData;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Brand Header */}
        <div className="w-[120px] h-[120px] rounded-full bg-[#CC2834] flex items-center justify-center mb-4">
          <Image
            src={data.brand.logo}
            alt={data.brand.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: "#CC2834" }}
        >
          {data.brand.name}
        </h1>
        <p className="text-sm mb-8" style={{ color: "#4B5563" }}>
          {data.brand.description}
        </p>

        {/* Product Links */}
        <div className="w-full flex flex-col gap-3">
          {data.products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 text-center text-white rounded-full transition-transform hover:scale-105 flex flex-col items-center gap-1"
              style={{ backgroundColor: "#CC2834" }}
            >
              <span className="font-medium">{product.title}</span>
              <span className="text-sm">
                <span className="line-through opacity-60">{product.originalPrice}</span>
                {" → "}
                <span className="font-bold">{product.price}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
