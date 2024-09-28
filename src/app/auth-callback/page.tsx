"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

interface AuthCallbackResponse {
  success: boolean;
}

interface TRPCError {
  data?: {
    code?: string;
  };
}

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams?.get('origin') || '';  // Safely access searchParams and provide fallback

  // Correctly omit void or input type since no params are needed
  const { data, error, isLoading } = trpc.authCallback.useQuery<AuthCallbackResponse>();

  useEffect(() => {
    if (data?.success) {
      // User is synced to db
      router.push(origin ? `/${origin}` : '/dashboard');
    }
    if (error && (error as TRPCError)?.data?.code === 'UNAUTHORIZED') {
      router.push('/sign-in');
    }
  }, [data, error, router, origin]);

  if (isLoading) {
    return (
      <div className='w-full mt-24 flex justify-center'>
        <div className='flex flex-col items-center gap-2'>
          <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
          <h3 className='font-semibold text-xl'>
            Setting up your account...
          </h3>
          <p>You will be redirected automatically.</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Page;
