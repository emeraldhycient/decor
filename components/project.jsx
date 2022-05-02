import Image from "next/image";
import Link from "next/link";

function Project({ link, image }) {
  const Btn = ({ link }) => (
    <button className="bg-amber-500 text-white mt-6 px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link href={link}> View Project</Link>
    </button>
  );

  return (
    <div
      className="h-96 bg-gray-300"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Btn link={link} />
    </div>
  );
}

export default Project;
