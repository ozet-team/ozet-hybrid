import React from 'react';
import { Navigator, Screen } from '@karrotframe/navigator';
import All from '../List/All';
import Recommend from '../List/Recommend';
import Bookmarked from '../List/Bookmarked';
import parser from 'ua-parser-js';
import { Switch, Route } from 'react-router-dom';
import DevTest from '../devTest';

const IOS = 'iOS';

export const Layout = () => {
  const { os } = parser(window.navigator.userAgent);
  const isCupertino = os.name === IOS;

  // if (isCupertino) {
  //   return (
  //     <Switch>
  //       <Route path={'/'} component={DevTest} />
  //     </Switch>
  //   );
  // }

  return (
    <Navigator
      theme={isCupertino ? 'Cupertino' : 'Android'}
      onClose={() => console.log('onClose')}
    >
      <Screen path={'/list/all'} component={All} />
      <Screen path={'/list/recommend'} component={Recommend} />
      <Screen path={'/list/book-marked'} component={Bookmarked} />
    </Navigator>
  );
};
