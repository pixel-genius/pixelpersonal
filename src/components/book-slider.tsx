"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "/book4.png", // مسیر تصویر کتاب
  },
  {
    id: 2,
    title: "The 1-Page Marketing Plan",
    author: "Allan Dib ",
    cover: "/book3.png",
  },

];

const BookSlider: React.FC = () => {
  return (
    <div className="w-full max-w-sm  rounded-lg">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="w-full"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="text-foreground">
              <h3 className="text-sm font-bold">{book.title}</h3>
              <p className="text-sm text-muted-foreground">By {book.author}</p>
              <div className="mt-3 mx-auto">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={100}
                  height={300}
                  className="rounded-lg ju  mx-auto  text-center"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;
