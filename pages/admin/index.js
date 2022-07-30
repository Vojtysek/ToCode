import Link from "next/link";

export default function Admin() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <h1 className="cursor-pointer text-3xl font-bold my-10">
          To<span className="text-sky-400">Admin</span>
        </h1>
      </Link>
    </div>
  );
}
