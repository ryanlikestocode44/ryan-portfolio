import images from "@/assets";

const Banner = () => {
  return (
    <section className="banner w-full h-100 rounded-lg shadow-md flex">
      <div className="banner-text flex-1 p-10 mt-10 items-center">
        <h1 className="text-6xl font-bold mb-4">Hi! Welcome!</h1>
        <h2 className="text-2xl mb-2 font-semibold">
          This is my portfolio website.
        </h2>
        <p className="text-lg">
          I'm Ryan Nicholas Purba, a passionate software developer with a knack
          for creating efficient and scalable web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          turning complex problems into simple, beautiful, and intuitive
          designs.
        </p>
      </div>
      <div className="banner-image w-2/5">
        <img
          className="w-full h-full object-cover [clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]"
          src={images.ryan}
          alt="my-picture"
        />
      </div>
    </section>
  );
}

export default Banner