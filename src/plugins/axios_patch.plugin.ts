import { createRequire } from "module"
import type { AxiosStatic } from "axios"

const require = createRequire(import.meta.url)
const axios = require("axios") as AxiosStatic

console.log("[Plugins] axios_patch registered")
axios.interceptors.request.use((config) => {
  if (config.url?.includes("youtube.com")) {
    config.headers = config.headers ?? {}
    config.headers["User-Agent"] =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    config.headers["Accept-Language"] = "ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7"
    // EU同意画面 / Bot判定を回避する定番のCookie
    config.headers["Cookie"] = "CONSENT=YES+1; SOCS=CAI"

    // リダイレクトのたびにCookie/UAを再付与する
    config.beforeRedirect = (options: any) => {
      options.headers["Cookie"] = "CONSENT=YES+1; SOCS=CAI"
      options.headers["User-Agent"] = config.headers["User-Agent"]
      options.headers["Accept-Language"] = config.headers["Accept-Language"]
    }
  }
  return config
})

axios.interceptors.response.use((response) => {  if (response.config?.url?.includes("youtube.com")) {
    console.log("[YouTube] final URL:", response.request?.res?.responseUrl)
    console.log("[YouTube] body head:", String(response.data).slice(0, 200))
  }
  return response
})