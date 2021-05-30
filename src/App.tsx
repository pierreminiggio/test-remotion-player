import { Player } from '@remotion/player'
import { HelloWorld } from '@pierreminiggio/remotion-test-github-action/dist/HelloWorld.js';
import { useState } from 'react';

function App() {
  const defaultTitle = 'Welcome to Remotion'
  const [titleText, setTitleText] = useState(defaultTitle)
  const defaultColor = 'black';
  const [titleColor, setTitleColor] = useState(defaultColor)

  return (
    <div className="App">
      <div>
        <label htmlFor="title-text">Title Text : </label>
        <input
          id="title-text"
          type="text"
          placeholder={defaultTitle}
          value={titleText}
          onChange={e => {setTitleText(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="title-color">Title Color : </label>
        <input
          id="title-color"
          type="color"
          value={titleColor}
          onChange={e => {setTitleColor(e.target.value)}}
        />
      </div>
      <Player
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        loop={true}
        autoPlay={true}
        inputProps={{
          titleText,
          titleColor,
        }}
        style={{border: '1px ' + titleColor + ' solid'}}
      />
    </div>
  );
}

export default App;
