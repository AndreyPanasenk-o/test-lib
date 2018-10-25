pipeline{
    agent {
		node {
			label 'windows'
			//customWorkspace 'workspace/' + env.JOB_NAME
            customWorkspace ''
		}
	}
    options {
		// Keep the 10 most recent builds
		buildDiscarder(logRotator(numToKeepStr:'10')) 
	}

    stages{
		stage('Checkout local branch') {
			steps {
                //temp
                //bat 'git config remote.origin.url https://github.com/AndreyPanasenk-o/test-lib.git # timeout=10'


				echo 'Checkout ' + env.BRANCH_NAME
				bat 'git checkout ' + env.BRANCH_NAME
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