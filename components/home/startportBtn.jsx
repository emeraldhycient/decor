function StartportBtn({ color }) {
  return (
    <div className="flex justify-between  items-center mt-4 md:mt-6">
      <button className="bg-amber-500 text-white px-3 py-2 rounded-sm">
        Get Started
      </button>
      <button
        className={`border-[.01rem] border-gray-500 px-3 py-2 rounded-sm ${color} `}
      >
        See Our Portfolio
      </button>
    </div>
  );
}

export default StartportBtn;
