// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import AgoraAppBuilder from '@appbuilder/react';
console.log('supriya AppBuilderWebSdkApi: ', AgoraAppBuilder);

export function App() {
  return (
    <div>
      {/* <NxWelcome title="org" /> */}
      <div style={{ display: 'flex', width: '100vw', height: '550px' }}>
        <AgoraAppBuilder.View />
      </div>
    </div>
  );
}

export default App;
