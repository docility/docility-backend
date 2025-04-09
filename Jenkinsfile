pipeline {
    agent any

    environment {
        // Extract the branch type (e.g., 'feature') from the branch name
        IMAGE_NAME = "reneboy/api-docility-${env.BRANCH_NAME.split('/')[0]}"
        IMAGE_TAG = "${env.BUILD_NUMBER}" // Use Jenkins build number as the image tag

        // Define a folder path based on the branch type
        FOLDER_PATH = "${env.BRANCH_NAME.split('/')[0]}/build-output"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm   
            }
        }
   
        stage('Set Branch Variables') {
            steps {
                script {
                    // Check if BRANCH_NAME is set; if not, provide a default for testing
                    if (!env.BRANCH_NAME) {
                        env.BRANCH_NAME = 'feature/default-branch'
                    }
                    echo "Using branch name: ${env.BRANCH_NAME}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image ${IMAGE_NAME}:${IMAGE_TAG}..."
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }
 
        stage('Push Docker Image') {
            steps {
                script {
                    echo "Pushing Docker image ${IMAGE_NAME}:${IMAGE_TAG}..."
                    sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
                    sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker resources...'
            sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG}" // Remove the image after build
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
