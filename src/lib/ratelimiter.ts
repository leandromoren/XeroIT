import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Creo un rate limiter que permite 2 request cada 2 segundos
export const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "15 s"),
    analytics: true,
    timeout: 10000,
})