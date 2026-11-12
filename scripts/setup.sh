#!/bin/sh
set -eu

repository="https://raw.githubusercontent.com/nijasc/ktor-svelte"
metadata="https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml"

fail() {
    printf 'ktor-svelte setup: %s\n' "$1" >&2
    exit 1
}

main() {
    command -v curl >/dev/null 2>&1 || fail "curl is required."
    command -v java >/dev/null 2>&1 || fail "Java 17 or newer is required. Get it from https://adoptium.net"

    java_version=$(java -version 2>&1 | sed -n 's/.*version "\([0-9]*\).*/\1/p' | head -n 1)
    [ "${java_version:-0}" -ge 17 ] 2>/dev/null || fail "Java 17 or newer is required, but found ${java_version:-an unknown version}."

    version=$(curl -fsSL "$metadata" | sed -n 's/.*<release>\(.*\)<\/release>.*/\1/p')
    [ -n "$version" ] || fail "Could not find the latest version on Maven Central."
    case "$version" in
        *[!0-9A-Za-z.-]*) fail "Maven Central returned a version that does not look like one: $version" ;;
    esac

    directory=$(mktemp -d)
    trap 'rm -rf "$directory"' EXIT INT TERM
    curl -fsSL "$repository/v$version/scripts/Setup.java" -o "$directory/Setup.java" ||
        fail "Could not download the setup for version $version."

    if [ -t 0 ]; then
        java "$directory/Setup.java" "--version=$version" "$@"
    elif [ -r /dev/tty ] && (: </dev/tty) 2>/dev/null; then
        java "$directory/Setup.java" "--version=$version" "$@" </dev/tty
    else
        java "$directory/Setup.java" "--version=$version" "$@"
    fi
}

main "$@"
