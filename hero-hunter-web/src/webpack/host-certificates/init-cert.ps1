
if(!(Get-Command mkcert -ErrorAction SilentlyContinue)) {
    Write-Host 'Looking for a possibility to install mkcert util'

    if (!(Get-Command scoop -ErrorAction SilentlyContinue)) {
        Write-Host 'Installing Scoop - https://scoop.sh/'
        Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
    }

    Write-Host 'Scoop is installed. Using it to resolve mkcert'

    scoop bucket add extras
    scoop install mkcert
}

Write-Host 'mkcert is installed and ready for use'
Write-Host 'Installing certificates for local development'

mkcert -install
mkcert -key-file "$PSScriptRoot/localhost-key.pem" -cert-file "$PSScriptRoot/localhost.pem" localhost
