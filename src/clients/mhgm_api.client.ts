import { callAPIHandler } from "@utils"
import axios, { type AxiosInstance } from "axios"

export class MHGMAPIClient {
  private axios: AxiosInstance

  constructor(
    private api_key: string,
    private base_url: string
  ) {
    this.axios = axios.create({
      baseURL: base_url,
      headers: { "x-api-key": api_key }
    })
  }

  async put_user(req: { 
    channel_id: string,
    name: string,
    avatar: string
  }) {
    return await callAPIHandler(async () => {
      return await this.axios.put<{ 
        id: number 
      }>(
        "/users",
        req
      )
    })
  }

  async get_user_keywords(req: {
    user_id: number
  }) {
    return await callAPIHandler(async () => {
      return await this.axios.get<{ 
        keywords: {
          id: number,
          keyword: string,
          action: string
        }[]
      }>(
        `/users/${req.user_id}/keywords`
      )
    })
  }

  async post_action_log(req: {
    message: string,
    user_id: number,
    broadcast_id: number,
    keyword_id: number
  }) {
    return await callAPIHandler(async () => {
      return await this.axios.post<{
        id: number
      }>(
        "/action-logs",
        req
      )
    })
  }
}