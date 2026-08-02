import { MHGMAPIClient } from "@clients";

export const mhgmAPIClient = new MHGMAPIClient(
  process.env.MHGM_API_KEY!,
  process.env.MHGM_SERVER_URL!
)