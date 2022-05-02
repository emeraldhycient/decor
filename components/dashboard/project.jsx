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
        <div className="flex justify-between items-center">
          <Btn link={link} />

          <button className="bg-blue-300 px-2 rounded-sm  hover:bg-white hover:text-amber-500 ">
            <Link href="/dashboard/upload">
              <a className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </a>
            </Link>
          </button>
        </div>
      </div>
      <h1 className="text-lg font-bold my-4 mx-1 w-full">
        9-ways-to-make-a-statement-in-your-laundry-room10
      </h1>
    </section>
  );
}

export default Project;
