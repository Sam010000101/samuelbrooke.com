import Image from "next/image";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-20 rounded-xl border-2 border-slate-600 shadow-sm">
        <Image src="./sb-avatar.jpg" alt="sb avatar" width={50} height={50} />
      </div>
    </div>
  );
}
