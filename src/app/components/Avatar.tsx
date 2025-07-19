import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-12 rounded-md border-2 border-white/25 shadow-sm">
        <Image src="./sb-avatar.jpg" alt="sb avatar" width={50} height={50} />
      </div>
    </div>
  );
}
