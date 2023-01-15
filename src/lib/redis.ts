import { Redis } from "@upstash/redis";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  throw new TypeError("Must define `REDIS_URL` and `REDIS_TOKEN` in environment variables");
}

export const redisClient = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});
