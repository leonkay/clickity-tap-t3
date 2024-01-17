"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateTapSpace() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const createRoom = api.room.create.useMutation({
    onSuccess: () => {
      router.push(`tap-space/${code}`);
    }
  })
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      createRoom.mutate({ code });
    }}
    className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Room Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createRoom.isLoading}
      >
        {createRoom.isLoading ? "Submitting..." : "Submit"}
      </button>
  </form>
);
}
