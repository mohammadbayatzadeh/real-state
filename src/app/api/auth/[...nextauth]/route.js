import Boss from "@/models/Boss";
import { comparePassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const nextOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        if (!email || !password)
          throw new Error("لطفا اطلاعات را کامل وارد کنید");

        const boss = await Boss.findById({ email });
        if (!boss) throw new Error("ابتدا حسال کاربری ایجاد کنید");

        const isValid = await comparePassword(password, boss.password);

        if (!isValid) throw new Error("ایمیل یا رمزعبور اشتباه است");

        return { email };
      },
    }),
  ],
};
const handler = NextAuth(nextOptions);
export { handler as GET, handler as POST };
