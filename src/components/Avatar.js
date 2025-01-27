import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { colors, fonts } from '../styles';

export default function RNSAvatar ({src, lg, sm, rounded, square, children, primary, secondary, bordered, style }) {
  let avatarSize = [styles.avatar, styles.avatarRound];

  if (lg) {
    avatarSize.splice(0, 1, styles.avatarLarge)
  } else if (sm) avatarSize.splice(0, 1, styles.avatarSmall)

  if (rounded) {
    avatarSize.splice(1, 1, styles.avatarRounded)
  } else if (square) avatarSize.splice(1, 1, styles.avatarSquare)


  if (children) {

    let letterAvatarColor = [styles.letterAvatar, styles.letterAvatarDefault], letterAvatarText = [styles.letterAvatarText, styles.letterAvatarTextMedium]

    if (bordered) {
      let avatarBorderedSize = [styles.avatar, styles.avatarBorderedRound];
      let letterAvatarBordered = [styles.letterAvatar, styles.letterAvatarBorderedDefault],
        letterAvatarBorderedText = [styles.letterAvatarText, styles.letterAvatarTextDefault, styles.letterAvatarTextMedium]

      if (rounded) {
        avatarBorderedSize.splice(1, 1, styles.avatarBorderedRounded)
      } else if (square) avatarBorderedSize.splice(1, 1, styles.avatarBorderedSquare)

      if (lg) {
        avatarBorderedSize.splice(0, 1, styles.avatarLarge)
        letterAvatarBorderedText.splice(2, 1, styles.letterAvatarTextLarge)
      } else if (sm) {
        avatarBorderedSize.splice(0, 1, styles.avatarSmall)
        letterAvatarBorderedText.splice(2, 1, styles.letterAvatarTextMedium)
      }

      if (primary) {
        letterAvatarBordered.splice(1, 1, styles.letterAvatarBorderedPrimary)
        letterAvatarBorderedText.splice(1, 1, styles.letterAvatarTextPrimary)
      } else if (secondary) {
        letterAvatarBordered.splice(1, 1, styles.letterAvatarBorderedSecondary)
        letterAvatarBorderedText.splice(1, 1, styles.letterAvatarTextSecondary)
      }

      return (
        <View style={[letterAvatarBordered, avatarBorderedSize, style]}>
          <Text style={letterAvatarBorderedText}>
            {children}
          </Text>
        </View>
      )

    }

    if (primary) {
      letterAvatarColor.splice(1, 1, styles.letterAvatarPrimary)
      if (bordered) {

      }
    } else if (secondary) letterAvatarColor.splice(1, 1, styles.letterAvatarSecondary)

    if (lg) {
      letterAvatarText.splice(1, 1, styles.letterAvatarTextLarge)
    } else if (sm) letterAvatarText.splice(1, 1, styles.letterAvatarTextSmall)

    return (
      <View style={[letterAvatarColor, avatarSize, style]}>
        <Text style={letterAvatarText}>
        {children}
        </Text>
      </View>
    )
  }

  return (
      <Image source={src} style={[avatarSize, style]}/>
  )
}



const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
  },
  avatarLarge: {
    width: 50,
    height: 50,
  },
  avatarSmall: {
    width: 30,
    height: 30,
  },
  avatarRound: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  avatarBorderedRound: {
    borderRadius: 30
  },
  avatarSquare: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  avatarBorderedSquare: {
    borderRadius: 0,
  },
  avatarRounded: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent'
  },
  avatarBorderedRounded: {
    borderRadius: 10,
  },
  letterAvatar: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterAvatarText: {
    fontFamily: fonts.primaryRegular,
    fontWeight: "700",
    color: colors.white,
  },
  letterAvatarTextDefault: {
    color: '#BBB',
  },
  letterAvatarTextPrimary: {
    color: colors.primary,
  },
  letterAvatarTextSecondary: {
    color: colors.secondary,
  },
  letterAvatarTextMedium: {
    fontSize: 20,
  },
  letterAvatarTextLarge: {
    fontSize: 25,
  },
  letterAvatarTextSmall: {
    fontSize: 15,
  },
  letterAvatarDefault: {
    backgroundColor: colors.grey,
  },
  letterAvatarBorderedDefault: {
    borderColor: '#BBBBBB',
    borderWidth: 1,
  },
  letterAvatarPrimary: {
    backgroundColor: colors.primary,
  },
  letterAvatarBorderedPrimary: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  letterAvatarSecondary: {
    backgroundColor: colors.secondary,
  },
  letterAvatarBorderedSecondary: {
    borderColor: colors.secondary,
    borderWidth: 1,
  },
})
