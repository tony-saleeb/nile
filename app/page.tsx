import { MessageCircle, Phone } from "lucide-react";
import { OfferGrid } from "@/components/OfferGrid";
import { PageShell } from "@/components/PageShell";
import { hotlineHref, hotlineNumber, whatsappHref, whatsappNumber } from "@/data/contact";
import { heroImage, offers } from "@/data/offers";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function HomePage() {
  return (
    <PageShell
      subtitle="Lab to Lab ـــ دليل العروض الإلكترونية"
      pageNumber={1}
      hero={
        <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-card bg-surface shadow-card lg:grid-cols-2">
            <img
              src={heroImage}
              alt=""
              className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[28rem]"
            />
            <div className="flex flex-col justify-center gap-5 px-5 py-8 text-start sm:px-8 sm:py-10 lg:px-10">
              <p className="text-sm font-bold text-primary">عروض مخصصة للمعامل والأطباء</p>
              <h1 className="text-4xl font-bold leading-tight text-dark lg:text-5xl">عروض التحاليل الطبية</h1>
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                اختَر التحليل لعرض التفاصيل والسعر ومدة العرض ووسائل الطلب.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={hotlineHref}
                  className={`inline-flex items-center gap-2 rounded-button bg-dark px-4 py-3 text-sm font-bold text-surface no-underline ${focusRing}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  الخط الساخن <span dir="ltr">{hotlineNumber}</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-button bg-primary px-4 py-3 text-sm font-bold text-surface no-underline ${focusRing}`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <OfferGrid offers={offers} />
    </PageShell>
  );
}
