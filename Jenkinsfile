pipeline{
    agent {
		node {
			label 'windows'
			customWorkspace 'workspace/' + env.JOB_NAME
		}
	}
    options {
		// Keep the 5 most recent builds
		buildDiscarder(logRotator(numToKeepStr:'5')) 
	}

    stages{
		stage('Checkout local branch') {
			steps {
				echo 'Checkout ' + env.BRANCH_NAME
				bat 'git checkout ' + env.BRANCH_NAME
            }
		}
    }
    post{
        always{
            echo 'This will always run'
        }
        success{
            echo 'SUCCESS1'
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