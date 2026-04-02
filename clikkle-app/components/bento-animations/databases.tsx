"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import Link from "next/link";

const headings = ['Name', 'Category', 'Price', 'Stock'];
const products = [
  { Name: 'Cable Knit Sweater', Category: 'Sweaters', Price: '$89.99', Stock: '156' },
  { Name: 'Merino Wool Pullover', Category: 'Sweaters', Price: '$129.99', Stock: '89' },
  { Name: 'Classic Denim Jacket', Category: 'Outerwear', Price: '$149.99', Stock: '234' },
  { Name: 'Cashmere Cardigan', Category: 'Sweaters', Price: '$199.99', Stock: '67' },
];

const sweaterItems = [
  { Name: 'Cable Knit Sweater', Price: '$89.99', Stock: '156' },
  { Name: 'Merino Wool Pullover', Price: '$129.99', Stock: '89' },
  { Name: 'Cashmere Cardigan', Price: '$199.99', Stock: '67' },
];

export function BentoDatabases() {
  return (
    <Link
      href="/docs/products/databases"
      className="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/clikkle/images/icons/illustrated/dark/databases.png" alt="Databases icon" width={28} height={28} className="size-7" />
          <h3 className="font-aeonik-pro text-label text-primary scroll-mt-20">Databases</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          Scalable and robust databases <span className="text-secondary">backed by your favorite technologies.</span>
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 max-h-85 flex-1 flex-col overflow-hidden rounded-xl bg-black/24 px-8">
        {/* Main Products Table */}
        <div className="border-smooth -z-3 mt-6 flex aspect-[4/2] w-full min-w-[450px] flex-col overflow-clip rounded-2xl border bg-[#232325]/90 mask-b-from-60% mask-b-to-100% shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:mt-12">
          <h3 className="text-caption text-primary px-3 py-2">Products</h3>
          <div className="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
            <table className="table w-full p-2.5">
              <thead>
                <tr className="bg-greyscale-900 border-smooth text-primary text-eyebrow w-full border-b font-normal tracking-tight">
                  {headings.map((heading) => (
                    <th key={heading} className="p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl">
                      <span className="inline">{heading}</span>
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline h-[1lh]">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z" fill="#6C6C71" />
                      </svg>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-eyebrow divide-smooth divide-y">
                {products.map((product, c) => (
                  <tr key={product.Name} className={cn('bg-[#1D1D21] transition-colors', { 'bg-white/2': product.Category === 'Sweaters' })}>
                    {Object.values(product).map((item, i) => (
                      <td key={i} className={cn('text-primary p-2.5 text-left', {
                        'rounded-bl-xl': c === products.length - 1 && i === 0,
                        'rounded-br-xl': c === products.length - 1 && i === Object.values(product).length - 1
                      })}>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Overlay Sweaters Table */}
        <div className="mt-0 mb-auto flex h-full w-full flex-col gap-8">
          <div className={cn('border-smooth absolute right-8 bottom-8 flex aspect-[4/2] flex-col rounded-2xl border bg-[#232325]/90 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:min-w-[275px]')} style={{ transform: 'translateY(12px) translateX(12px)' }}>
            <h3 className="text-caption text-primary px-3 py-2">Sweaters</h3>
            <div className="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
              <table className="table w-full p-2.5">
                <thead>
                  <tr className="bg-greyscale-900 border-smooth text-primary text-eyebrow w-full border-b font-normal">
                    {['Name', 'Price', 'Stock'].map((key) => (
                      <th key={key} className="p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl">
                        <span className="inline">{key}</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline h-[1lh]">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z" fill="#6C6C71" />
                        </svg>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-eyebrow divide-smooth divide-y">
                  {sweaterItems.map((product, p) => (
                    <tr key={product.Name} className="bg-[#1D1D21]">
                      {Object.values(product).map((item, i) => (
                        <td key={i} className={cn('text-primary p-2.5 text-left', {
                          'rounded-bl-xl': p === sweaterItems.length - 1 && i === 0,
                          'rounded-br-xl': p === sweaterItems.length - 1 && i === Object.values(product).length - 1
                        })}>{item}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
      </div>
    </Link>
  );
}
