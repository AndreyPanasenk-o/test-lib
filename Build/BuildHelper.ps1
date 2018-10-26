[CmdletBinding()]
param(
	[string]$operation,
    [string]$npmRegistry
)

function build{  
    Push-Location $PSScriptRoot\..\packages\nec-core
    npm install --registry $npmRegistry
    ng build nec-core-lib
    ng build
    Pop-Location
}
function test{
    Push-Location $PSScriptRoot\..\packages\nec-core
    ng test
    Pop-Location
}

function publish{
    Push-Location $PSScriptRoot\..\packages\nec-core\dist\nec-core-lib
    npm publish --registry $npmRegistry
    Pop-Location
}
if($operation -eq 'build'){ build }
if($operation -eq 'test'){ test }
if($operation -eq 'publish'){ publish }