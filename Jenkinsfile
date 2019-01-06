pipeline {
   agent any
      environment {
         MY_PATH='C:\\Users\\DE7F49'
      }
   stages {
      stage('NPM Setup') {
        steps {
          bat 'npm install'
        }
      }
      stage('Ionic / Cordova') {
        steps {
          bat 'npm install -g ionic cordova'
        }
      }
      stage('Add Android') {
        steps {
          bat 'ionic cordova add android'
        }
      }
  }
}
