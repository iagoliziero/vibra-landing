import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones das setas
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const images = [
  "/feedback1.png",
  "/feedback2.png",
  "/feedback3.png",
  "/feedback4.png",
  "/feedback5.png",
  "/feedback6.png"
];

const ImageCarousel = () => {
  return (
    <div className="max-w-2xl rounded-xl flex flex-col overflow-hidden relative">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-max-[50%] h-[18rem] lg:h-[30rem] object-cover rounded-3xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botão Anterior */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-black hover:bg-opacity-80">
          <ChevronLeft size={30} />
        </CarouselPrevious>

        {/* Botão Próximo */}
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-black hover:bg-opacity-80">
          <ChevronRight size={30} />
        </CarouselNext>

      </Carousel>
    </div>
  );
};

export default ImageCarousel;
