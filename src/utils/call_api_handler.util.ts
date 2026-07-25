import { ForeignAPICallError } from "@errors"
import axios, { type AxiosResponse } from "axios"
import type { ContentfulStatusCode } from "hono/utils/http-status"
import { UnknownError } from "../errors/unknown.error"

export const callAPIHandler = async (callAPIFnc: () => Promise<AxiosResponse>) => {
  try {
    return await callAPIFnc()
  } catch(e) {
    if (axios.isAxiosError(e)) {
      throw new ForeignAPICallError(
        e.status as ContentfulStatusCode,
        e.message,
        undefined,
        e.stack,
        e.response?.data || e.request
      )
    } else {
      throw new UnknownError(e)
    }
  }
}