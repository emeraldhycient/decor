import Link from "next/link";

function Project({ link, image }) {
  const Btn = ({ link }) => (
    <button className="m-0 bg-amber-500 text-white px-3 py-1 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link href={link}> View Project</Link>
    </button>
  );

  return (
    <section className="flex flex-col w-full">
      <div
        className="h-56 md:h-80 bg-gray-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Btn link={link} />
      </div>
      <h1 className="text-lg font-bold my-4 mx-1 w-full">
        9-ways-to-make-a-statement-in-your-laundry-room10
      </h1>
    </section>
  );
}

export default Project;
