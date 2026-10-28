# معامل النيل مصر

UI-only starter for an Arabic-first (RTL) lab offers directory. There is no backend, API, database, auth, or working search. The detail page repeats the same placeholders for every code and only the code itself changes.

## Run

```bash
npm install
npm run dev
```

- `/` offer listing (page 1)
- `/offers/OFF-001` … `/offers/OFF-020` offer details (page 2)

## Theme

Edit colors, radius, shadow, and type size in one place: the `:root` block in `app/globals.css`.

`tailwind.config.ts` maps those variables to utilities. Components only use the mapped classes (`bg-primary`, `bg-primary-soft`, `text-dark`, `text-muted`, `text-surface`, `bg-accent`, `bg-bg`, `border-border`, `rounded-card`, `rounded-button`, `shadow-card`, `text-xs` … `text-4xl`).

## Components

| Component | Role |
| --- | --- |
| `PageShell` | Header, optional photo hero, main slot, footer. `dockActions` reserves space for the mobile action dock |
| `Header` | Logo square (replace the inner text with an `img`), lab name, subtitle, and a link to [nileegyptlabs.com](https://www.nileegyptlabs.com/). The logo and name link home |
| `Footer` | Hotline `15504`, WhatsApp `01278616166`, and `صفحة {n} ـــ قالب قابل للتعديل` |
| `OfferCard` | Photo card: placeholder image, number, offer code, Arabic title, link to `/offers/OFF-00x` |
| `OfferGrid` | 1 column on small screens, 2 from `sm`, 3 from `xl` |

Placeholder photos live in `public/placeholders`. Swap `hero.jpg` and `sample-1.jpg` … `sample-3.jpg` for lab images. Offer cards cycle those samples from `data/offers.ts`.
| `CodeBadge` | `كود العرض: {code}` |
| `MediaSlot` | Main photograph with a play mark. Pass `src`. Replace the file in `public/placeholders` or the `src` |
| `ThumbnailRow` | Three photograph thumbnails. Pass `items`. The first one uses the active style |
| `PriceCard` | Optional `value` prop. Empty until a price is passed |
| `ExpiryBox` | Blank day / month / year slots |
| `TermsBox` | Terms heading and placeholder box |
| `ActionButtons` | `اطلب العرض` (no handler), `اتصل` (`tel:15504`), and WhatsApp (`https://wa.me/201278616166`) |

Phone and WhatsApp values live in `data/contact.ts`.

Mock offers live in `data/offers.ts`. `app/offers/[code]/page.tsx` uses `generateStaticParams` for `OFF-001` through `OFF-020`.
