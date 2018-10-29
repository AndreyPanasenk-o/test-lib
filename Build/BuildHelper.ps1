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
    checkExitCode
    Pop-Location
}
function test{
    Push-Location $PSScriptRoot\..\packages\nec-core
    ng test
    checkExitCode
    Pop-Location
}

function publish{
    Push-Location $PSScriptRoot\..\packages\nec-core\dist\nec-core-lib
    npm publish --registry $npmRegistry
    checkExitCode
    Pop-Location
}

function checkExitCode{
    echo "Exit code: $lastExitCode"
    checkExitCodeCore $lastExitCode
}
function checkExitCodeCore{
    [CmdletBinding()]
    param(
        [int]$exitCode
    )
    echo $exitCode
    if($exitCode -gt 0){
        exit $exitCode
    }
}
if($operation -eq 'build'){ build }
if($operation -eq 'test'){ test }
if($operation -eq 'publish'){ publish }