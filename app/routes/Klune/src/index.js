import PhotoLabeller from './components/PhotoLabeller';
import useNipples from './hooks/useNipples';
import { useState } from 'react';
import LabelledPhoto from './components/LabelledPhoto';

 
function App() {
  const bounds = { topBound: 30, bottomBound: 30, leftBound: 30, rightBound: 30 };
  const imageHeight = 500;
  const imageWidth = 209;
  const [nipples, actions] = useNipples([], bounds, imageHeight, imageWidth);

  const [locked, setLocked] = useState(false);

  return (
    <div className="App">
      {!locked ? (
        <>
          <PhotoLabeller
            imageSrc="https://drive.google.com/uc?id=1jj4QV4k5o20QDGbwImt3pm5LkJ5Ckh-7"
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            nipples={nipples}
            actions={actions}
            bounds={bounds}
          />
          <button onClick={() => setLocked(true)} style={{marginLeft: "50%"}}>Submit</button>
        </>
      ) : (
        <LabelledPhoto
          imageSrc="https://drive.google.com/uc?id=1jj4QV4k5o20QDGbwImt3pm5LkJ5Ckh-7"
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          nipples={nipples}
          bounds={bounds}
          updateModal={actions.updateModal}
        />
      )}
      {JSON.stringify(nipples)}
    </div>
  );
}

export default App;
