import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function RoomHome({ params } : { params: { code: string }} ) {
  noStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Tap Room: { params.code }
        </h1>

        <Link href="/tap-space">Create Tap Space</Link>
      </div>
    </main>
  );
}

