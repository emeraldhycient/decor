import Image from "next/image";
import Link from "next/link";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="bg-gray-200 h-[3rem] flex items-center justify-center mt-[100vh]">
      <div className="mt-3 ml-4 flex">
        <span className="text-base font-extrabold antialiased text-slate-400 mx-3">
          &#169;
        </span>
        <Link href="/">
          <div className="text-white font-bold text-xl flex">
            <Image
              src="/images/logo512.png"
              alt="Mpdesigns logo"
              width={30}
              height={30}
              className="h-full"
            />
            <h1 className="text-lg font-extrabold antialiased text-slate-600">
              designs
            </h1>
          </div>
        </Link>
        <span className="text-base font-extrabold antialiased text-slate-400 mx-3">
          {year}
        </span>
      </div>{" "}
    </div>
  );
}

export default Footer;
