import { MHGMAPIClient } from "@clients";

export const mhgmAPIClient = new MHGMAPIClient(
  process.env.MHGM_PRIVATE_API_KEY!,
  process.env.MHGM_PRIVATE_BASE_URL!
)