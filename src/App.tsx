import './App.css';
import { Player } from '@remotion/player'
import { HelloWorld } from '@pierreminiggio/remotion-test-github-action/dist/HelloWorld.js';

function App() {
  return (
    <div className="App">
      <Player
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        loop={true}
        inputProps={{
          titleText: 'Welcome to Remotion',
          titleColor: 'black',
        }}
        style={{border: '1px black solid'}}
      />
    </div>
  );
}

export default App;
