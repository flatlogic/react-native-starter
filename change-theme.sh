#!/usr/bin/env bash
if [ ! -n "$THEME_NAME" ]
then
  echo "You need define the THEME_NAME variable"
  exit
fi

echo "Configuring app to $THEME_NAME theme"

replace_a_file()
{
  SOURCE_DIR=$1
  DESTANATION_DIR=$2
  FILE_NAME=$3

  if [ -f "$SOURCE_DIR/$FILE_NAME" ]
  then
    cp $SOURCE_DIR/$FILE_NAME $DESTANATION_DIR/$FILE_NAME
    echo "Replaced $FILE_NAME"
  else
    echo "No $FILE_NAME found!"
  fi
}

THEME_DIR=src/themes/$THEME_NAME

replace_a_file $THEME_DIR src/styles colors.js
replace_a_file $THEME_DIR assets/images background.png
replace_a_file $THEME_DIR assets/images topBarBg.png
