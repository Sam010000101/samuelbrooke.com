export default function ColourSwatch() {
  return (
    <div className="grid grid-cols-6 place-items-center gap-4 p-10">
      <div className="grid h-14 w-14 border-inherit bg-[#222]">
        <div className="place-self-center font-bold text-[#ef4757]">01</div>
        <div className="place-self-center font-bold text-white">01</div>
      </div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
    </div>
  );
}
