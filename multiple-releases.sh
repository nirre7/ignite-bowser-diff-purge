#!/usr/bin/env bash
set -euxo pipefail

# with  yarn global add ignite-cli@2.2.0
releasesWithOldCli=(
2.0.0
2.0.1
2.0.2
2.0.3
3.0.0
3.1.0
3.1.1
3.1.2
3.2.0
)

# with  yarn global add ignite-cli
releasesWithNewCli=(
4.0.0-beta.4
4.0.0
4.1.0
4.1.1
4.2.0
4.2.1
4.3.0
4.4.0
4.4.1
4.4.2
4.4.3
4.4.4
4.4.5
4.5.0
)

npx yarn global add ignite-cli@2.2.0
for v in "${releasesWithOldCli[@]}"
do
    echo $v
    ./new-release.sh $v
done

npx yarn global add ignite-cli
for v in "${releasesWithNewCli[@]}"
do
    echo $v
    ./new-release.sh $v
done
