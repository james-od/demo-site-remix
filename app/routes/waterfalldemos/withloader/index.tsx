import { useLoaderData } from '@remix-run/react';

type ResponseType = {
  url: string;
};

const getCatUrl = async () => {
  const res = await fetch('https://cataas.com/cat?json=true');
  return await res.json();
};

export const loader = async () => {
  return getCatUrl();
};

export default function WaterFallDemos() {
  const response: ResponseType = useLoaderData<typeof loader>();
  const imageUrl = response.url;

  return (
    <body>
      <a>
        {imageUrl && (
          <a className="center" href={imageUrl}>
            {imageUrl}
          </a>
        )}
      </a>
      <div className="center-div">
        <button onClick={() => getCatUrl()}>༼ つ ◕_◕ ༽つ Gib cat pic ༼ つ ◕_◕ ༽つ</button>
      </div>
    </body>
  );
}
