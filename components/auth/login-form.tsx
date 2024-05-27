"use client";

import AuthCard from "./auth-card";

function LoginForm() {
  return (
    <AuthCard
      cardTitle="Wellcome back!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      showSocials>
      <div></div>
    </AuthCard>
  );
}

export default LoginForm;
