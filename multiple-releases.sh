#!/usr/bin/env bash
set -euxo pipefail

releases=(
4.3.0
4.4.0
4.4.1
4.4.2
4.4.3
4.4.4
4.4.5
4.5.0
)

for v in "${releases[@]}"
do
    echo $v
    ./new-release.sh $v
done
