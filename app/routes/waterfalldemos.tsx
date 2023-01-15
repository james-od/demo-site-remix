import { useEffect, useState } from 'react';

export default function WaterFallDemos() {
  type ResponseType = {
    url: string;
  };

  const [imageUrl, setImageUrl] = useState('');

  const getNewPic = () => {
    fetch('https://cataas.com/cat?json=true')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json<ResponseType>();
      })
      .then((data) => setImageUrl('https://cataas.com' + data.url));
  };

  useEffect(() => {
    getNewPic();
  }, []);

  return (
    <body>
      <div>
        {imageUrl && <img className="center" src={imageUrl} height={'20%'} alt="cat pic"></img>}
      </div>
      <div className="center-div">
        <button onClick={() => getNewPic()}>༼ つ ◕_◕ ༽つ Gib cat pic ༼ つ ◕_◕ ༽つ</button>
      </div>
    </body>
  );
}
