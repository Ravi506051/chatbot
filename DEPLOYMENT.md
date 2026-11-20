# ChatYantra AI deployment notes

## Model

The app uses `google/gemini-2.5-flash` through Vercel AI Gateway. On Vercel, Gateway uses the project's Vercel identity. The model selector is restricted to Gemini so other model vendors are not shown.

## Authentication and chat history

Registration stores an email address, a mobile number, and a password hash. Sign-in accepts either email or mobile number with that password. Mobile number ownership is not SMS-verified in this version; SMS verification requires a configured SMS provider.

Chat history is stored in PostgreSQL and is tied to the signed-in account. Configure `POSTGRES_URL` in the Vercel project's Production, Preview, and Development environments. The deployment build runs the Drizzle migrations, including the new unique mobile-number index. Without `POSTGRES_URL`, account creation, authentication, and server-side chat history cannot work.

## Rate limiting

Chat requests have a 10-message per-hour account limit. IP-based requests are also limited to 10 per hour with Redis when `REDIS_URL` is configured. If Redis is unavailable, the IP limiter falls back to a per-runtime memory window; account limits remain database-backed.

## Environment variables

- `AUTH_SECRET` — session signing secret.
- `POSTGRES_URL` — PostgreSQL connection string; required for accounts and saved chats.
- `REDIS_URL` — Redis connection string for shared IP rate limits.
- `BLOB_READ_WRITE_TOKEN` — required for file uploads.
- `AI_GATEWAY_API_KEY` — needed for non-Vercel hosting; Vercel deployments use OIDC.
