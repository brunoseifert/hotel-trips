'use client';

import React, { useState } from 'react';
import { Icons } from '@/components/icons';
import { signIn } from 'next-auth/react';
import Button from './Button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading] = useState<boolean>(false);

  return (
    <div className="m-10 grid gap-6">
      <h5 className="flex flex-row items-center justify-center gap-1 font-light">
        Não tem uma conta?
      </h5>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">
            continue com
          </span>
        </div>
      </div>

      <Button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        variant="outlined"
        type="button"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full h-10 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4 " />
        )}{' '}
        Google
      </Button>
    </div>
  );
}
