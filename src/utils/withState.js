import React, { useState } from 'react';

// Preserve the state props used by the existing screen containers with React hooks.
export default function withState(valueName, setterName, initialValue) {
  return function enhance(Component) {
    return function StatefulScreen(props) {
      const [value, setValue] = useState(() => (
        typeof initialValue === 'function' ? initialValue(props) : initialValue
      ));
      return <Component {...props} {...{ [valueName]: value, [setterName]: setValue }} />;
    };
  };
}
