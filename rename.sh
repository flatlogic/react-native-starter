#!/usr/bin/env bash

read -p "Enter New App Name: " newAppName
echo "New App Name: $newAppName!"

[ -z "${newAppName}" ] && echo 'Missing required parameter newAppName' && exit 1

while true; do
    read -p "Do you wish to continue?" yn
    case $yn in
        [Yy]* ) newLowerCaseName=`echo $newAppName | tr '[:upper:]' '[:lower:]'`

        appRoot=`dirname $0`

        # gather all modification targets
        filesToModify=$(grep -riIl 'reactnativestarter' --exclude='rename.sh' $appRoot/*)
        filesToRename=$(find "${appRoot}/ios" "${appRoot}/android" -type f -ipath '*reactnativestarter*')

        # replace strings in files
        for fileToModify in $filesToModify; do
          sed -i.bak "s/ReactNativeStarter/${newAppName}/g;s/reactnativestarter/${newLowerCaseName}/g" $fileToModify
        done
        find "${appRoot}" -name '*.bak' -exec rm {} \;

        for fileToRename in $filesToRename; do
          newName=$(echo $fileToRename | sed "s/ReactNativeStarter/$newAppName/g;s/reactnativestarter/$newLowerCaseName/g")
          mkdir -p $(dirname "$newName") && $mvCmd "$fileToRename" "$newName"
        done

        # remove leftover empty directories
        rmdir -p $(find "$appRoot" -ipath '*reactnativestarter*' -type d) 2>/dev/null

        YELLOW='\033[1;33m'
        CLEAR='\033[0m'
        printf "\nRenamed application to ${newAppName}"
        printf "${YELLOW}\n\nIf you have previously built the application, please clean your build artifacts"
        printf "${YELLOW}\n\nAndroid:\n(cd android; ./gradlew clean)"
        break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done
