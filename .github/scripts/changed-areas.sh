#!/usr/bin/env bash
set -euo pipefail

event="$1"
base="${2:-}"
head="${3:-}"
output="${GITHUB_OUTPUT:-/dev/stdout}"

areas=(code examples setup docs)

emit_all() {
  for area in "${areas[@]}"; do echo "$area=true" >> "$output"; done
  echo "Running every job: $1"
}

if [[ "$event" != "pull_request" || -z "$base" || -z "$head" ]]; then
  emit_all "not a pull request"
  exit 0
fi

changed="$(git diff --name-only "$base...$head")"
printf 'Changed files:\n%s\n' "$changed"

if grep -qE '^\.github/(workflows/ci\.yml|scripts/)' <<< "$changed"; then
  emit_all "the CI setup itself changed"
  exit 0
fi

matches() {
  if grep -qE "$1" <<< "$changed"; then echo true; else echo false; fi
}

code="$(matches '^(ktor-svelte-server/|ktor-svelte-gradle-plugin/|build-logic/|gradle/|build\.gradle\.kts$|settings\.gradle\.kts$|gradle\.properties$|gradlew|version\.txt$)')"
examples="$(matches '^examples/')"
setup="$(matches '^scripts/')"
docs="$(matches '^docs/')"

{
  echo "code=$code"
  echo "examples=$examples"
  echo "setup=$setup"
  echo "docs=$docs"
} >> "$output"
echo "code=$code examples=$examples setup=$setup docs=$docs"
