// Welcome to the main entry point.
//
// In this file, we'll be kicking off our app or storybook.

import { AppRegistry } from "react-native"
import { RootComponent } from "./root-component"
import { StorybookUIRoot } from "../../storybook"

/**
 * This needs to match what's found in your app_delegate.m and MainActivity.java.
 */
const APP_NAME = "IgniteDiffApp"

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false

// appease the typescript overlords
declare global {
  var module
}

if (SHOW_STORYBOOK && __DEV__) {
  // 🎗 REMINDER: Storybook has a server you need to run from a terminal window.
  //
  // $> yarn run storybook
  //
  AppRegistry.registerComponent(APP_NAME, () => StorybookUIRoot)
} else {
  // load our app
  AppRegistry.registerComponent(APP_NAME, () => RootComponent)
}
