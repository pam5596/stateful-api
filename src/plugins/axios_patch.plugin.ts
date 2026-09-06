import axios from "axios"

export const axiosPatch = () => {
  axios.interceptors.request.use((config) => {
    if (config.url?.includes("youtube.com")) {
      config.headers = config.headers ?? {}
      config.headers["User-Agent"] =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
      config.headers["Accept-Language"] = "ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7"
      // EU同意画面 / Bot判定を回避する定番のCookie
      config.headers["Cookie"] = "CONSENT=YES+1; SOCS=CAI"
    }
    return config
  })
}