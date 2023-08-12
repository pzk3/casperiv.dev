import { LRUCache } from "lru-cache";

interface RateLimitOptions {
  interval: number;
}

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache<string, number[]>({
    max: 500,
    ttl: options.interval,
  });

  return {
    check: (limit: number, token: string) => {
      const tokenCount = tokenCache.get(token) ?? [0];

      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }

      tokenCount[0] += 1;

      const [currentUsage] = tokenCount;
      const isRateLimited = currentUsage! > limit;

      return {
        isRateLimited,
        headers: {
          "content-type": "application/json",
          "X-RateLimit-Limit": limit.toString(10),
          "X-RateLimit-Remaining": String(isRateLimited ? 0 : limit - currentUsage!),
        },
      };
    },
  };
}
