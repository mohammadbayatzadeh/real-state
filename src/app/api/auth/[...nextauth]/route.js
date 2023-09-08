import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

//models
import Boss from "@/models/Boss";

//functions
import { comparePassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        const { email, password } = credentials;
        if (!email || !password)
          throw new Error("لطفا اطلاعات را کامل وارد کنید");

        const boss = await Boss.findOne({ email });
        if (!boss) throw new Error("ابتدا حسال کاربری ایجاد کنید");

        const isValid = await comparePassword(password, boss.password);
        if (!isValid) throw new Error("ایمیل یا رمزعبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
