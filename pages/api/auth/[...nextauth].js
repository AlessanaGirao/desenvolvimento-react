import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "995930996859-fsud5rh4irl1bap37n1681himpvvo2hp.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

