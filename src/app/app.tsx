// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import AgoraAppBuilder from '@appbuilder/react';
console.log('AgoraAppBuilder: ', AgoraAppBuilder);

export function App() {
  return (
    <div>
      {/* <NxWelcome title="org" /> */}
      <div className={styles.agoraWrapper}>
        <AgoraAppBuilder.View />
      </div>
    </div>
  );
}

export default App;
