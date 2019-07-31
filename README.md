# Ignite-bowser diff PURGE

[ignite-bowser](https://github.com/infinitered/ignite-bowser) based customized version of [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/), all credit should to to the authors of that great tool!

## What?

This repository exposes an untouched Ignite Bowser based app generated with the ignite-cli
`npx ignite new IgniteDiffApp -b ignite-bowser --detox`. Each new Ignite Bowser release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table

| From->To | R   | E   | A   | C   | T   |     | N   | A   | T   | I   | V   | E   |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0    | X   |     |     |     |     |     |     |     |     |     |     |     |

## To see the full table containing all releases click [HERE](https://nirre7.github.io/ignite-diff-purge/)

## FAQ

### Why starting from 4.0.0?

Because all older releases broke when I ran them, might be because of new vs old version of ignite-cli?

### How did you do this?

I used the great [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/) tool with some minor tweaks. 
All credit to the creator(s) and maintainers of [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge/)

