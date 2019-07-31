# Ignite-bowser diff PURGE

[ignite-bowser](https://github.com/infinitered/ignite-bowser) based customized version of [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/), all credit should to to the authors of that great tool!

## What?

This repository exposes an untouched Ignite Bowser based app generated with the ignite-cli
`npx ignite new IgniteDiffApp -b ignite-bowser --detox`. Each new Ignite Bowser release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table

| From->To | P                                                                                           | U                                                                                           | R                                                                                           | G                                                                                           | E                                                                                           |     | T   | I   | M   | E   | !   | !   |
| -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0    | X                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 3.0.0    | [->3.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/3.0.0..release/3.1.0) | X                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 2.0.3    | [->3.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.3..release/3.1.0) | [->3.0.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.3..release/3.0.0) | X                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 2.0.2    | [->3.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.2..release/3.1.0) | [->3.0.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.2..release/3.0.0) | [->2.0.3](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.2..release/2.0.3) | X                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 2.0.1    | [->3.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.1..release/3.1.0) | [->3.0.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.1..release/3.0.0) | [->2.0.3](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.1..release/2.0.3) | [->2.0.2](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.1..release/2.0.2) | X                                                                                           | -   |     |     |     |     |     |     |
| 2.0.0    | [->3.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.0..release/3.1.0) | [->3.0.0](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.0..release/3.0.0) | [->2.0.3](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.0..release/2.0.3) | [->2.0.2](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.0..release/2.0.2) | [->2.0.1](https://github.com/nirre7/ignite-diff-purge/compare/release/2.0.0..release/2.0.1) | X   |     |     |     |     |     |     |

## To see the full table containing all releases click [HERE](https://nirre7.github.io/ignite-diff-purge/)

## FAQ

### Why starting from 4.0.0?

Because all older releases broke when I ran them, might be because of new vs old version of ignite-cli?

### How did you do this?

I used the great [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/) tool with some minor tweaks. 
All credit to the creator(s) and maintainers of [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/)

