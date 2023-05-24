import Draggable from 'react-draggable';

function Nipple({
  id,
  initX,
  initY,
  isModalOpen,
  setIsModalOpen,
  name,
  setName,
  url,
  setUrl,
  position,
  setPosition,
  dragging,
  setDragging,
}) {
  const handleStop = (e, ui) => {
    if (!(e.target instanceof HTMLInputElement)) {
      if (position.x === ui.x && position.y === ui.y * -1) {
        setIsModalOpen(!isModalOpen);
      }
      setPosition({ x: ui.x, y: ui.y * -1 });
      setDragging(false);
    }
  };

  return (
    <>
      <Draggable
        defaultPosition={{ x: initX - 12.5, y: initY - 500 - 12.5 - 30 - 6.25 }}
        bounds="parent"
        onStop={handleStop}
        onDrag={() => setDragging(true)}
        handle="span"
      >
        <div className="cursor" style={{ float: 'left', position: 'absolute' }}>
          <span>
            <div
              style={{
                float: 'left',
                width: 25,
                height: 25,
                background: 'black',
                opacity: 0.5,
                borderRadius: 1000,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 12.5,
                height: 12.5,
                background: isModalOpen ? '#969696' : '#D0D0D0',
                left: 6.25,
                top: 6.25,
                borderRadius: 1000,
              }}
            />
          </span>
          {isModalOpen ? (
            <div
              className="no-cursor"
              style={{
                position: 'absolute',
                width: 200,
                height: 50,
                background: 'black',
                opacity: 0.5,
                left: 30,
                top: 6.25,
                borderRadius: 10,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  textAlign: 'left',
                  marginTop: '6px',
                  marginLeft: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <input
                  style={{
                    margin: '0px',
                    fontWeight: 'bold',
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    borderRadius: 0,
                    outline: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    color: 'white',
                  }}
                  placeholder="Item name"
                  onChange={(e) => setName(e.target.value)}
                  value={name || ''}
                />
                <input
                  style={{
                    margin: '0px',
                    fontWeight: 'bold',
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    borderRadius: 0,
                    outline: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    color: 'white',
                    textOverflow: 'ellipsis',
                  }}
                  placeholder="Purchase URL"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url || ''}
                />
              </p>
            </div>
          ) : null}
        </div>
      </Draggable>
    </>
  );
}

export default Nipple;
