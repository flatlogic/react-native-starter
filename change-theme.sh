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

replace_a_file $THEME_DIR/tabbar assets/images/tabbar home.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar home@2x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar home@3x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar grids.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar grids@2x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar grids@3x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar pages.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar pages@2x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar pages@3x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar components.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar components@2x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar components@3x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar calendar.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar calendar@2x.png
replace_a_file $THEME_DIR/tabbar assets/images/tabbar calendar@3x.png

replace_a_file $THEME_DIR src/modules/auth AuthView.js
replace_a_file $THEME_DIR src/modules/home HomeView.js
replace_a_file $THEME_DIR src/modules/grids GridsView.js
replace_a_file $THEME_DIR src/modules/calendar CalendarView.js
replace_a_file $THEME_DIR src/modules/components ComponentsView.js
replace_a_file $THEME_DIR src/modules/navigation MainTabNavigator.js
replace_a_file $THEME_DIR src/modules/pages PagesView.js