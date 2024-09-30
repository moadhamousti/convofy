import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from './trpc';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { db } from '@/db';

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const session = getKindeServerSession();

    if (!session) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Session not found' });
    }

    const user = await session.getUser();

    if (!user || !user.id || !user.email) {
      throw new TRPCError({ code: 'UNAUTHORIZED'});
    }

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    })

    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      })
    }

    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
