
function StaticNipple({ id, isModalOpen, updateModal, name, url, setUrl, position }) {
  return (
    <>
      <div style={{ float: 'left', left: position.x, bottom: position.y, position: 'absolute' }}>
        <span
          onClick={() => updateModal(!isModalOpen)}
        >
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
              <span
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
              >
                <a style={{ color: 'white' }} href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default StaticNipple;
