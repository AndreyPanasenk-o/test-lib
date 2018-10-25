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
function test{
    Push-Location $PSScriptRoot\..\packages\nec-core
    ng test
    Pop-Location
}
if($operation -eq 'build'){ build }
if($operation -eq 'test'){ test }