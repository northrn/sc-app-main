import Link from 'next/link';
import s from './Navbar.module.css';
import { User } from '@supabase/auth-helpers-react';
import { supabase } from '@/utils/supabase-client';
import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';


const { data: { user } } = await supabase.auth.getUser()

const userName = function() {
  let userID = user!.id;
  let userAvatar = 'https://avatar.vercel.sh/'+`${userID}`
    console.log(user);
    return userAvatar
}

const Navbar = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link href="/">
                <a className={s.link}>Pricing</a>
              </Link>
              <Link href="/account">
                <a className={s.link}>Account</a>
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8 flex-row">
            {user ? (
              <div className="flex flex-row px-4">
                <span
                  className={s.link}
                  onClick={async () => {
                    await supabaseClient.auth.signOut();
                    router.push('/signin');
                  }}
                >
                  Sign out
                </span>
                <img src={userName()} className="rounded-full max-h-10 max-w-10 mx-2" alt="user avatar" />
              </div>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
