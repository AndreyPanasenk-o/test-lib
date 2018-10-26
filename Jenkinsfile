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

    environment {
		CURRENT_BUILD_NAME = env.JOB_NAME.substring(0, env.JOB_NAME.indexOf('/'))
		NPM_REGISTRY = "http://localhost:4873"
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
				bat 'powershell -ExecutionPolicy Unrestricted -File Build\\BuildHelper.ps1 -operation "build" -npmRegistry %NPM_REGISTRY%'
			}
		}
        stage('Stage: Test') {
			steps {
				bat 'powershell -ExecutionPolicy Unrestricted -File Build\\BuildHelper.ps1 -operation "test"'
                echo 'BUILD NAME ' + env.CURRENT_BUILD_NAME
			}
		}
        stage('Condition: Run Full buid?') {
			when {
				expression { 
					return env.CURRENT_BUILD_NAME == 'NFWUIPF'
				}
			}
			steps {
				echo 'Full Build Initiated'
				load 'Build/Jenkinsfile-Full'
			}
		}
    }
    post{
        always{
            echo 'DEVELOP This will always run_github'
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