$ErrorActionPreference = 'Stop'

function Stop-Installer([string] $Message) {
    throw "ktor-svelte installer: $Message"
}

$repository = 'https://raw.githubusercontent.com/nijasc/ktor-svelte'
$metadata = 'https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml'

if (-not (Get-Command java -ErrorAction SilentlyContinue)) {
    Stop-Installer 'Java 17 or newer is required. Get it from https://adoptium.net'
}

$previousPreference = $ErrorActionPreference
$ErrorActionPreference = 'Continue'
$versionOutput = (& java -version 2>&1 | Out-String)
$ErrorActionPreference = $previousPreference
if ($versionOutput -notmatch 'version "(\d+)' -or [int] $Matches[1] -lt 17) {
    Stop-Installer 'Java 17 or newer is required.'
}

$response = Invoke-WebRequest -UseBasicParsing -Uri $metadata
$content = if ($response.Content -is [byte[]]) { [Text.Encoding]::UTF8.GetString($response.Content) } else { $response.Content }
if ($content -notmatch '<release>([^<]+)</release>') {
    Stop-Installer 'Could not find the latest version on Maven Central.'
}
$version = $Matches[1]

$directory = Join-Path ([IO.Path]::GetTempPath()) ("ktor-svelte-" + [Guid]::NewGuid())
New-Item -ItemType Directory -Path $directory | Out-Null
try {
    $installer = Join-Path $directory 'Installer.java'
    Invoke-WebRequest -UseBasicParsing -Uri "$repository/v$version/installer/Installer.java" -OutFile $installer
    $forwarded = @($args | ForEach-Object { "$_" })
    & java '-Djavax.net.ssl.trustStoreType=Windows-ROOT' $installer "--version=$version" $forwarded
    $exitCode = $LASTEXITCODE
} finally {
    Remove-Item -Recurse -Force $directory
}
if ($exitCode -ne 0) { Stop-Installer 'The project was not created.' }
