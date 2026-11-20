ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "phone" varchar(24);
CREATE UNIQUE INDEX IF NOT EXISTS "User_phone_unique" ON "User" ("phone");
