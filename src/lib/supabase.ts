import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase 환경 변수가 누락되었습니다! .env.local 파일을 확인해주세요",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
