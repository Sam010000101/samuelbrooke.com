import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="h-20 w-auto rounded-2xl border-2 border-[#89ff8e]/15 shadow-sm">
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
