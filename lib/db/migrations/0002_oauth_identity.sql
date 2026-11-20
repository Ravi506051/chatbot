ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "oauthProvider" varchar(64);
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "oauthAccountId" varchar(128);
CREATE UNIQUE INDEX IF NOT EXISTS "User_oauth_identity_unique"
  ON "User" ("oauthProvider", "oauthAccountId");
