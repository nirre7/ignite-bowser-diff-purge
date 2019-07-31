# Ignite-bowser diff PURGE

Is an [ignite-bowser](https://github.com/infinitered/ignite-bowser) customized version [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/), all credit should to to the authors of that great tool!

# RN diff PURGE

This repository exposes an untouched Ignite Bowser based app generated with the ignite-cli
`npx ignite new IgniteDiffApp -b ignite-bowser --detox`. Each new Ignite Bowser release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table (full table [HERE](https://react-native-community.github.io/rn-diff-purge/))

| From->To | P                                                                                           | U                                                                                           | R                                                                                           | G                                                                                           | E                                                                                           |     | T   | I   | M   | E   | !   | !   |
| -------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- |
| 4.3.0    | X                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 4.2.1    | [->4.3.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.2.1..release/4.3.0) | X                                                                                           | -                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 4.2.0    | [->4.3.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.2.0..release/4.3.0) | [->4.2.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.2.0..release/4.2.1) | X                                                                                           | -                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 4.1.1    | [->4.3.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.1..release/4.3.0) | [->4.2.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.1..release/4.2.1) | [->4.2.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.1..release/4.2.0) | X                                                                                           | -                                                                                           | -   |     |     |     |     |     |     |
| 4.1.0    | [->4.3.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.0..release/4.3.0) | [->4.2.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.0..release/4.2.1) | [->4.2.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.0..release/4.2.0) | [->4.1.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.1.0..release/4.1.1) | X                                                                                           | -   |     |     |     |     |     |     |
| 4.0.0    | [->4.3.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.0.0..release/4.3.0) | [->4.2.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.0.0..release/4.2.1) | [->4.2.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.0.0..release/4.2.0) | [->4.1.1](https://github.com/nirre7/ignite-diff-purge/compare/release/4.0.0..release/4.1.1) | [->4.1.0](https://github.com/nirre7/ignite-diff-purge/compare/release/4.0.0..release/4.1.0) | X   |     |     |     |     |     |     |

## To see the full table containing all releases click [HERE](https://react-native-community.github.io/rn-diff-purge/)

## FAQ

### Why starting from 4.0.0?

Because all older releases broke when I ran them, might be because of new vs old version of ignite-cli?

### How did you do this?

I used the great [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/) tool with some minor tweaks. 
All credit to the creator(s) and maintainers of rn-diff-purge

