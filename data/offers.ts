export const heroImage = "/nile-banner.jpeg";

export const galleryImages = [
  "/placeholders/sample-1.jpg",
  "/placeholders/sample-2.jpg",
  "/placeholders/sample-3.jpg",
] as const;

export type Offer = {
  code: string;
  number: string;
  titleAr: string;
  image: string;
  priceEgp?: string;
};

export const offers: Offer[] = Array.from({ length: 20 }, (_, index) => {
  const sequence = index + 1;
  const number = String(sequence).padStart(2, "0");

  return {
    code: `OFF-${String(sequence).padStart(3, "0")}`,
    number,
    titleAr: `اسم التحليل ${number}`,
    image: galleryImages[index % galleryImages.length],
  };
});
