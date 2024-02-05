import { db } from "@/db";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  testing: publicProcedure.query(() => {
    return "Working";
  }),
});

export type AppRouter = typeof appRouter;
