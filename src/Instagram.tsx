import InstagramEmbed from 'react-instagram-embed';

import React from 'react';

export const Instagram: React.FC<{}> = () => (
  <div>
    <InstagramEmbed
      url="https://instagr.am/p/Zw9o4/"
      maxWidth={3200}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={(): void => {}}
      onSuccess={(): void => {}}
      onAfterRender={(): void => {}}
      onFailure={(): void => {}}
    />
  </div>
);
