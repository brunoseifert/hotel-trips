import { UserLoginForm } from '@/components/login-auth';
import Image from 'next/image';

export default async function Register() {
  return (
    <div className="py-48 md:py-0  h-[800px] flex-col items-center justify-center md:grid lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center items-center gap-3">
            <Image width={35} height={35} src="/avatar.png" alt="avatar" />
            <p className="text-sm text-muted-foreground">Olá, visitante!</p>
          </div>
          <UserLoginForm />
        </div>
      </div>
    </div>
  );
}
