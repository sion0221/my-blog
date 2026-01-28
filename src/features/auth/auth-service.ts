import { supabase } from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export const signInWithSocial = async (provider: Provider): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/`,
    },
  });

  if (error) {
    console.error(`${provider} 로그인 에러:`, error.message);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("로그아웃 에러:", error.message);
    throw error;
  }
};
