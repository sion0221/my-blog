import { signInWithSocial } from "@/features/auth/auth-service";

export const LoginForm = () => {
  return (
    <div className="w-full max-w-md p-10 rounded-4xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
          Hello, World!
        </h2>
        <p className="text-slate-400 text-sm">
          프론트엔드 기록 여정에 함께 떠나요
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => signInWithSocial("google")}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-black font-bold hover:bg-slate-200 transition-all active:scale-[0.98] cursor-pointer"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Google로 시작하기
        </button>

        <button
          onClick={() => signInWithSocial("github")}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#24292f] text-white font-bold border border-slate-700 hover:bg-[#2c333a] transition-all active:scale-[0.98] cursor-pointer"
        >
          <img
            src="https://github.com/favicon.ico"
            alt="GitHub"
            className="w-5 h-5 invert"
          />
          GitHub으로 시작하기
        </button>
      </div>
    </div>
  );
};
