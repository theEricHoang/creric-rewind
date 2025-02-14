import one from '../../../../public/images/1.jpg';
import two from '../../../../public/images/2.jpg';
import three from '../../../../public/images/3.jpg';
import four from '../../../../public/images/4.jpg';
import five from '../../../../public/images/5.jpg';
import six from '../../../../public/images/6.jpg';
import seven from '../../../../public/images/7.jpg';
import eight from '../../../../public/images/8.jpg';
import nine from '../../../../public/images/9.jpg';
import ten from '../../../../public/images/10.jpg';
import Image from 'next/image';

const images = [
  {
    src: one,
    className: "top-[10%] left-[50%] rotate-[10deg] z-[1]",
  },
  {
    src: two,
    className: "top-[20%] left-[30%] rotate-[-20deg] z-[2]",
  },
  {
    src: three,
    className: "top-[30%] left-[40%] rotate-[-15deg] z-[3]",
  },
  {
    src: four,
    className: "top-[40%] left-[50%] rotate-[0deg] z-[4]",
  },
  {
    src: five,
    className: "top-[30%] left-[70%] rotate-[-5deg] z-[3]",
  },
  {
    src: six,
    className: "top-[70%] left-[75%] rotate-[5deg] z-[2]",
  },
  {
    src: seven,
    className: "top-[50%] left-[80%] rotate-[12deg] z-[1]",
  },
  {
    src: eight,
    className: "top-[60%] left-[30%] rotate-[-8deg] z-[2]",
  },
  {
    src: nine,
    className: "top-[30%] left-[10%] rotate-[-2deg] z-[3]",
  },
  {
    src: ten,
    className: "top-[40%] left-[60%] rotate-[3deg] z-[4]",
  },
];

export default function ImageWall() {
  return (
    <div
      className="flex relative h-[150vh] overflow-visible bg-gradient-to-b from-emerald-700 to-white"
    >
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt='image'
          width={200}
          height={200}
          className={`absolute transition-transform duration-500 rounded-md ease-in-out shadow-2xl ${image.className}`}
        />
      ))}
    </div>
  );
}