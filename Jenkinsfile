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
        post{
          always {
              echo 'npm environment setup comleted'
          }
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
        post {
          success {
              echo 'Installation successful'
            }
        }
      }
      stage('Change Directory') {
        steps {
          dir ('src') {
            bat 'ls'
          }
        }
      }
  }
}
