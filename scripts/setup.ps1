$ErrorActionPreference = 'Stop'

function Stop-Setup([string] $Message) {
    throw "ktor-svelte setup: $Message"
}

$repository = 'https://raw.githubusercontent.com/nijasc/ktor-svelte'
$metadata = 'https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml'

if (-not (Get-Command java -ErrorAction SilentlyContinue)) {
    Stop-Setup 'Java 17 or newer is required. Get it from https://adoptium.net'
}

$previousPreference = $ErrorActionPreference
$ErrorActionPreference = 'Continue'
$versionOutput = (& java -version 2>&1 | Out-String)
$ErrorActionPreference = $previousPreference
if ($versionOutput -notmatch 'version "(\d+)' -or [int] $Matches[1] -lt 17) {
    Stop-Setup 'Java 17 or newer is required.'
}

$response = Invoke-WebRequest -UseBasicParsing -Uri $metadata
$content = if ($response.Content -is [byte[]]) { [Text.Encoding]::UTF8.GetString($response.Content) } else { $response.Content }
if ($content -notmatch '<release>([^<]+)</release>') {
    Stop-Setup 'Could not find the latest version on Maven Central.'
}
$version = $Matches[1]
if ($version -notmatch '^[0-9A-Za-z.-]+$') {
    Stop-Setup "Maven Central returned a version that does not look like one: $version"
}

$directory = Join-Path ([IO.Path]::GetTempPath()) ("ktor-svelte-" + [Guid]::NewGuid())
New-Item -ItemType Directory -Path $directory | Out-Null
try {
    $setup = Join-Path $directory 'Setup.java'
    Invoke-WebRequest -UseBasicParsing -Uri "$repository/v$version/scripts/Setup.java" -OutFile $setup
    $forwarded = @($args | ForEach-Object { "$_" })
    & java '-Djavax.net.ssl.trustStoreType=Windows-ROOT' $setup "--version=$version" $forwarded
    $exitCode = $LASTEXITCODE
} finally {
    Remove-Item -Recurse -Force $directory
}
if ($exitCode -ne 0) { Stop-Setup 'The project was not created.' }
