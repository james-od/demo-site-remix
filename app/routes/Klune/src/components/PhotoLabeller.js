import { useRef } from 'react';
import Nipple from './Nipple';

function PhotoLabeller({
  imageSrc,
  nipples,
  imageHeight,
  imageWidth,
  bounds: { topBound, bottomBound, leftBound, rightBound },
  actions: {
    createNippleDesktop,
    updatePosition,
    updateModal,
    updateName,
    updateUrl,
    updateDragging,
  },
}) {
  const imageRef = useRef(null);
  const MAX_NIPPLE_COUNT = 6;

  const handleClick = (e) => {
    if (nipples.filter((nipple) => nipple.isModalOpen).length) {
      updateModal();
    } else if (nipples.length < MAX_NIPPLE_COUNT) {
      createNippleDesktop(e);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: imageHeight + topBound + bottomBound,
          width: imageWidth + leftBound + rightBound,
        }}
      >
        {nipples.filter((nipple) => nipple.dragging).length ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'red',
              opacity: 0.2,
              zIndex: -100,
              position: 'absolute',
            }}
          />
        ) : null}
        <img
          style={{ marginTop: topBound }}
          ref={imageRef}
          src={imageSrc}
          alt="model brown background"
          height={imageHeight}
          onClick={(e) => handleClick(e)}
          draggable="false"
        />
        {nipples.map((nipple) => (
          <Nipple
            id={nipple.id}
            name={nipple.name}
            url={nipple.url}
            initX={nipple.initX}
            initY={nipple.initY}
            setName={(name) => updateName(nipple, name)}
            setUrl={(url) => updateUrl(nipple, url)}
            isModalOpen={nipple.isModalOpen}
            setIsModalOpen={(isModalOpen) => updateModal(nipple, isModalOpen)}
            position={{ x: nipple.position.x, y: nipple.position.y }}
            setPosition={({ x, y }) => updatePosition(nipple, { x, y })}
            dragging={false}
            setDragging={(dragging) => updateDragging(nipple, dragging)}
            key={nipple.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoLabeller;
