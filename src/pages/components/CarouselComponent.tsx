import { useEffect, useState } from "react";

export default function CarouselComponent({ slides }: {slides: any}) {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

      window.setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        if(currentSlide === slides.length - 1){
          setCurrentSlide(0);
        }
      }, 4000);
    

  }, [currentSlide, slides.length])
  

    return (
      <div className="w-full overflow-hidden relative">
        <div className={`flex transition ease-out duration-400 `} style={{transform: `translateX(-${currentSlide * 100}%)`}}>
          {slides?.map((data: any) => {
            return <img src={data} alt={`img${data?.id}`} />
          })}
        </div>
      </div>
    );
  }