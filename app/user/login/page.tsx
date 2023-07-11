'use client';

import BackIcon from '$lib/assets/icons/ui/back.svg';
import { TextInput } from './text-input.component';
import { Button } from '@/lib/components/button.component';
import { Divider } from '@/lib/components/divider.component';
import { OauthLogin } from '@/lib/sections/oauth-login.section';
import { cn } from '@/lib/utils/cn.util';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    return (
        <div className="relative flex h-full flex-col overflow-auto bg-[#121414] p-6 [&>*]:flex-shrink-0">
            <button onClick={router.back}>
                <BackIcon />
            </button>
            <h1 className="relative z-10 mx-auto mb-5 mt-14 text-lg font-semibold leading-[18px]">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-[#58C3B6]">
                    Log in
                </span>{' '}
                to Chatbox
            </h1>
            <p className="mb-7 text-center font-medium text-[#797C7B]">
                Welcome back! Sign in using your social account or email to
                continue us
            </p>
            <OauthLogin />
            <Divider className="mb-8">OR</Divider>
            <TextInput
                label={{
                    children: 'Your email',
                }}
                container={{
                    className: 'mb-8',
                }}
            />
            <TextInput
                label={{
                    children: 'Password',
                }}
                container={{
                    className: 'mb-10',
                }}
            />
            <Button variant="secondary" className="mb-4 mt-auto">
                Login
            </Button>
            <Link className="mx-auto mb-2 font-medium text-[#5EBAAE]" href="#">
                Forgot Password?
            </Link>
        </div>
    );
}
