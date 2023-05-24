import StaticNipple from './StaticNipple';

function LabelledPhoto({
  nipples,
  bounds: { topBound, bottomBound, leftBound, rightBound },
  imageSrc,
  imageHeight,
  imageWidth,
  setModalOpen,
  updateModal,
}) {
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
          src={imageSrc}
          alt="model brown background"
          height={imageHeight}
          draggable="false"
        />
        {nipples.map((nipple) => (
          <StaticNipple
            id={nipple.id}
            name={nipple.name}
            url={nipple.url}
            position={nipple.position}
            updateModal={(isModalOpen) => updateModal(nipple, isModalOpen)}
            isModalOpen={nipple.isModalOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default LabelledPhoto;
