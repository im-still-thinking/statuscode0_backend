pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/im-still-thinking/statuscode0_backend', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f Dockerfile .'
      }
    }

    stage('Login To DockerHub') {
      environment {
        DOCKERHUB_PASSWORD = 'entrepreneur007'
        DOCKERHUB_USER = 'imstillthinking'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

  }
}