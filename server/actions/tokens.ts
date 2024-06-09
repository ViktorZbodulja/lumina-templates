"use server";

import { eq } from "drizzle-orm";
import { db } from "..";
import { emailTokens } from "../schema";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.query.emailTokens.findFirst({
      where: eq(emailTokens.token, email),
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const generateEmailVerificationToken = async (email: string) => {
  const token = crypto.randomUUID();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exsistingToken = await getVerificationTokenByEmail(email);

  if (exsistingToken) {
    await db.delete(emailTokens).where(eq(emailTokens.id, exsistingToken.id));
  }
  const verificationToken = await db.insert(emailTokens).values({
    email,
    token,
    expires,
  });
  return verificationToken;
};