import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-20 rounded-xl border-1 border-[#89ff8e]/50 shadow-sm">
        <Image
          className=""
          src="./sb-avatar.jpg"
          alt="sb avatar"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
