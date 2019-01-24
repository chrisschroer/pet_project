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
      stage('SonarCloud') {
        steps {
          dir ('src') {
            bat 'ls'
            bat '"C:\\Users\\DE7F49\\Desktop\\Studium\\Master\\1. Semester\\Advanced Software Techniques\\Project\\sonar-scanner-3.2.0.1227-windows\\bin\\sonar-scanner.bat" -Dsonar.projectKey=chrisschroer_pet_project -Dsonar.organization=chrisschroer-github -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=a6897557997f10177450e09d54d1db68bae2b0ff '
          }
        }
      }
  }
}
