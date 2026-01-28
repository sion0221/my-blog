import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { signOut } from "@/features/auth/auth-service";

export const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-400 hidden md:block">
          {user.email}
        </span>
        <button
          onClick={signOut}
          className="text-sm font-medium text-slate-400 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <a
      href="/login"
      className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
    >
      Login
    </a>
  );
};
