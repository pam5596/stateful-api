import { defineIntlifyMiddleware, detectLocaleFromAcceptLanguageHeader } from "@intlify/hono"

import { ja } from "@locales"

export const i18nMiddleware = defineIntlifyMiddleware<[typeof ja],'ja'>({
  locale: detectLocaleFromAcceptLanguageHeader,
  messages: {
    ja
  }
})