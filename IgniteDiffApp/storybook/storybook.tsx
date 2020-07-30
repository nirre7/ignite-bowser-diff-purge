import React, { useEffect, FunctionComponent } from "react"
import { getStorybookUI, configure } from "@storybook/react-native"

declare let module

configure(() => {
  require("./storybook-registry")
}, module)

const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,

  asyncStorage: require("@react-native-community/async-storage").default,
})

export const StorybookUIRoot: FunctionComponent = () => {
  useEffect(() => {
    ;(async () => {
      if (typeof __TEST__ === "undefined" || !__TEST__) {
        const Reactotron = require("../app/services/reactotron")
        const reactotron = new Reactotron.Reactotron()
        reactotron.setup()
      }
    })()
  }, [])

  return <StorybookUI />
}
