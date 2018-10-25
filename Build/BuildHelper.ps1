[CmdletBinding()]
param(
	[string]$operation
)
function build{  
    Push-Location $PSScriptRoot\..\packages\nec-core
    npm install
    ng build nec-core-lib
    ng build
    Pop-Location
}
if($operation -eq 'build'){ build }