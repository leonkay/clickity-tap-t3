import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { rooms } from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

export const roomRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ code: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await db.insert(rooms).values({
        code: input.code,
      });
    }),
  get: publicProcedure
    .input(z.object({ code: z.string().min(1) }))
    .query(( { ctx, input }) => {
      return db.select().from(rooms).where(eq(rooms.code, input.code))
    })
});
