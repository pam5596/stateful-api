import { defineIntlifyMiddleware, detectLocaleFromAcceptLanguageHeader, getQueryLocale } from "@intlify/hono"

import { ja } from "@locales"

export const i18nMiddleware = defineIntlifyMiddleware<[typeof ja],'ja'>({
  locale: (ctx: Request): string => {
    try {
      return getQueryLocale(ctx).toString()
    } catch {
      return process.env.DEFAULT_LOCALE!
    }
  },
  messages: {
    ja
  }
})