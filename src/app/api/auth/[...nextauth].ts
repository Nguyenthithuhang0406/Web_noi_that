// import NextAuth from "next-auth";
// import FacebookProvider from "next-auth/providers/facebook";

// export default NextAuth({
//   providers: [
//     FacebookProvider({
//       clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
//     }),
//   ],
//   secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
// });

import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  logger: {
    error: console.error,
    warn: console.warn,
    debug: console.log, // hoặc false để tắt hoàn toàn
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
