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

  }
}