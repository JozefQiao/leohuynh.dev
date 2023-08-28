import dynamic from "next/dynamic"
import type { CommentsProps } from "~/types"

let Giscus = dynamic(() => import("./Giscus"), { ssr: false })
let Utterances = dynamic(() => import("./Utterances"), { ssr: false })

export function Comments({ frontMatter, config }: CommentsProps) {
  let { provider, giscusConfig, utterancesConfig, disqus } = config

  switch (provider) {
    case "giscus":
      return <Giscus config={giscusConfig} />
    case "utterances":
      return <Utterances config={utterancesConfig} />
    default:
      return <div>Unknown comment provider: {provider}</div>
  }
}
