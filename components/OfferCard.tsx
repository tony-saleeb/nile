import Link from "next/link";
import type { Offer } from "@/data/offers";

type OfferCardProps = {
  offer: Offer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-card border border-border bg-surface shadow-card transition duration-200 hover:-translate-y-0.5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary">
      <Link href={`/offers/${offer.code}`} className="flex h-full flex-col no-underline focus-visible:outline-none">
        <span className="relative block aspect-[4/3] overflow-hidden bg-primary-soft">
          {/* Replace this src with the lab photo for the test. */}
          <img
            src={offer.image}
            alt={`صورة ${offer.titleAr}`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute start-3 top-3 rounded-button bg-surface px-3 py-1 text-sm font-bold text-primary">
            {offer.number}
          </span>
        </span>
        <span className="flex flex-1 flex-col items-start gap-2 p-4 text-start sm:p-5">
          <span dir="ltr" className="text-xs font-bold tracking-wide text-primary">
            {offer.code}
          </span>
          <h2 className="text-lg font-bold text-dark">{offer.titleAr}</h2>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-bold text-primary">
            عرض التفاصيل
            <span className="transition duration-200 group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}
