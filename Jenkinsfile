pipeline{
    agent {
		node {
			label 'windows'
			//customWorkspace 'workspace/' + env.JOB_NAME
            customWorkspace 'C:/test-lib'
		}
	}
    options {
		// Keep the 10 most recent builds
		buildDiscarder(logRotator(numToKeepStr:'10')) 
	}

    stages{
		stage('Checkout local branch') {
			steps {
                echo 'Checkout ' + env.BRANCH_NAME
				bat 'git checkout ' + env.BRANCH_NAME
            }
		}
        stage('Stage: Build') {
			steps {
				bat 'powershell -ExecutionPolicy Unrestricted -File Build\\BuildHelper.ps1 -operation "build"'
			}
		}
    }
    post{
        always{
            echo 'This will always run_github'
        }
        success{
            echo 'SUCCESS2'
        }
        failure{
            echo 'FAILED'
        }
        unstable{
            echo 'Run is unstable'
        }
        changed{
            echo 'state of Pipeline is changed'
            echo 'example: prev failed but now successful'
        }
    }
}