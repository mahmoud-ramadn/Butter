import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/partners/Clip path-two.svg",
  },
  {
    img: "/partners/clip-path-three.svg",
  },
  {
    img: "/partners/gong.svg",
  },
  {
    img: "/partners/nivEa.svg",
  },
  {
    img: "/partners/miro.svg",
  },
  {
    img: "/partners/miro.svg",
  },
  {
    img: "/partners/miro.svg",
  },
  {
    img: "/partners/miro.svg",
  },
  {
    img: "/partners/miro.svg",
  },
  {
    img: "/partners/Clip path-two.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className="flex flex-col items-center justify-center gap-2">
      <Image
        className="rounded-full"
        alt=""
        src={img}
        width={100}
        height={100}
      />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative my-20  container flex w-full mx-auto  items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
