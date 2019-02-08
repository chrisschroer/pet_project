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
      stage('Build Android') {
        steps {
          /* bat 'ionic cordova build android --release' */
          echo 'Build Android'
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
      stage('Sign .APK-File') {
        steps {
          /* sh 'jarsigner -storepass my_password -keystore keys/mykey.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk nameApp'*/
          echo 'Sign .apk-File'
        }
      }
      stage('Web Build') {
        steps {
          /* bat 'npm run build --prod' */
          echo 'Web Build'
        }
      }
   }
   post {
       success {
          slackSend color: "good", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was successful"
       }
   }
}
