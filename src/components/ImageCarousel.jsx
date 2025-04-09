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
    <div className="max-w-2xl md:max-w-xl lg:max-w-2xl rounded-xl flex flex-col overflow-hidden relative">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-max-[50%] h-[18rem] md:h-[20rem] lg:h-[30rem] object-cover rounded-3xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full text-white ">
          <ChevronLeft size={30} />
        </CarouselPrevious>

        
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full text-white">
          <ChevronRight size={30} />
        </CarouselNext>

      </Carousel>
    </div>
  );
};

export default ImageCarousel;
