import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  adapter: PrismaAdapter(undefined as any),
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID || '', clientSecret: process.env.GOOGLE_CLIENT_SECRET || '' }),
    AzureADProvider({ clientId: process.env.AZURE_AD_CLIENT_ID || '', clientSecret: process.env.AZURE_AD_CLIENT_SECRET || '', tenantId: process.env.AZURE_AD_TENANT_ID || 'common' }),
    EmailProvider({ server: { host: process.env.EMAIL_SERVER_HOST, port: Number(process.env.EMAIL_SERVER_PORT||1025), auth: { user: process.env.EMAIL_SERVER_USER, pass: process.env.EMAIL_SERVER_PASSWORD } }, from: process.env.EMAIL_FROM })
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) { (session.user as any).id = user.id; (session.user as any).role = (user as any).role; }
      return session;
    }
  },
  secret: process.env.AUTH_SECRET
};
