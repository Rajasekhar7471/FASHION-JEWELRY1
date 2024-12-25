import Image1 from "../../../public/assets/img1.jpg";
import Image2 from "../../../public/assets/img2.jpg";
import Image3 from "../../../public/assets/img3.jpeg";

function HeroSection() {
  return (
    <section className="hero-section relative">
      <div className="relative">
        <img
          src={Image1}
          alt="Jewelry Image 1"
          className="w-full h-auto brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl font-bold leading-tight mb-4">
            Discover Timeless Elegance
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Explore our exquisite collection of handcrafted jewelry, designed to
            bring sophistication and charm to your life.
          </p>
        </div>
      </div>

      <div className="relative ">
        <img
          src={Image2}
          alt="Jewelry Image 2"
          className="w-full h-auto brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl font-bold leading-tight mb-4">
            A Journey of Beauty
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Discover exquisite craftsmanship and timeless designs crafted for
            every moment.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={Image3}
          alt="Jewelry Image 3"
          className="w-full h-auto brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl font-bold leading-tight mb-4">
            Timeless Treasures Await
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Elevate your style with stunning jewelry that captures elegance and
            sophistication.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
