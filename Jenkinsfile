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
        sh '''docker build -f Dockerfile . -t imstillthinking/dataversenodebackend:latest
docker system prune -a'''
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

    stage('Push') {
      steps {
        sh 'docker push imstillthinking/dataversenodebackend:latest'
      }
    }

  }
}