import * as React from 'react';

interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps): JSX.Element => {
  const { userName, lang } = props;
  return (
    <h2>
      Hi {userName}! Welcome to {lang}!
    </h2>
  );
};
