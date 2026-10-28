import type { Offer } from "@/data/offers";
import { OfferCard } from "@/components/OfferCard";

type OfferGridProps = {
  offers: Offer[];
};

export function OfferGrid({ offers }: OfferGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {offers.map((offer) => (
        <li key={offer.code} className="min-w-0">
          <OfferCard offer={offer} />
        </li>
      ))}
    </ul>
  );
}
