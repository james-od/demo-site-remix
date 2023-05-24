import { useReducer } from 'react';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  );
}

const useNipples = (
  initialState,
  { topBound, bottomBound, leftBound, rightBound },
  imageHeight,
  imageWidth,
) => {
  const actions = {
    CREATE_NIPPLE_MOBILE: 'CREATE_NIPPLE_MOBILE',
    CREATE_NIPPLE_DESKTOP: 'CREATE_NIPPLE_DESKTOP',
    UPDATE_POSITION: 'UPDATE_POSITION',
    UPDATE_MODAL: 'UPDATE_MODAL',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_URL: 'UPDATE_URL',
    UPDATE_DRAGGING: 'UPDATE_DRAGGING',
  };

  const createNipple = (x, y) => {
    return {
      id: uuidv4(),
      name: null,
      url: null,
      initX: x,
      initY: y,
      position: { x, y }, // relative
      isModalOpen: false,
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_NIPPLE_MOBILE':
        return [...state, createNipple(window.innerWidth / 2, window.innerHeight / 2)];
      case 'CREATE_NIPPLE_DESKTOP':
        return [
          ...state,
          createNipple(
            action.e.clientX - action.e.target.offsetParent.offsetLeft,
            action.e.clientY - action.e.target.offsetParent.offsetTop,
          ),
        ];
      case 'UPDATE_POSITION':
        return state
          .map((nipple) => {
            if (nipple.id === action.id) {
              return { ...nipple, position: { x: action.x, y: action.y } };
            } else {
              return { ...nipple };
            }
          })
          .filter((nipple) => {
            console.log(imageHeight, bottomBound, topBound);
            console.log(nipple.position.x, nipple.position.y);
            return (
              nipple.position.x > leftBound &&
              nipple.position.x < imageWidth + leftBound - rightBound &&
              nipple.position.y > bottomBound &&
              nipple.position.y < imageHeight
            );
          });
      case 'UPDATE_MODAL':
        return state.map((nipple) => {
          if (nipple.id === action.id) {
            return { ...nipple, isModalOpen: action.isModalOpen };
          } else {
            return { ...nipple, isModalOpen: false };
          }
        });
      case 'UPDATE_NAME':
        return state.map((nipple) => {
          if (nipple.id === action.id) {
            return { ...nipple, name: action.name };
          } else {
            return nipple;
          }
        });
      case 'UPDATE_URL':
        return state.map((nipple) => {
          if (nipple.id === action.id) {
            return { ...nipple, url: action.url };
          } else {
            return nipple;
          }
        });
      case 'UPDATE_DRAGGING':
        return state.map((nipple) => {
          if (nipple.id === action.id) {
            return { ...nipple, dragging: action.dragging };
          } else {
            return nipple;
          }
        });
      default:
        return state;
    }
  };

  const [nipples, dispatch] = useReducer(reducer, []);

  const createNippleDesktop = (e) => {
    dispatch({ type: actions.CREATE_NIPPLE_DESKTOP, e });
  };

  const updatePosition = (nipple, { x, y }) => {
    dispatch({ type: actions.UPDATE_POSITION, id: nipple.id, x, y });
  };

  const updateModal = (nipple, isModalOpen) => {
    dispatch({ type: actions.UPDATE_MODAL, id: nipple?.id, isModalOpen });
  };

  const updateName = (nipple, name) => {
    dispatch({ type: actions.UPDATE_NAME, id: nipple.id, name });
  };

  const updateUrl = (nipple, url) => {
    dispatch({ type: actions.UPDATE_URL, id: nipple.id, url });
  };

  const updateDragging = (nipple, dragging) => {
    dispatch({ type: actions.UPDATE_DRAGGING, id: nipple.id, dragging });
  };

  return [
    nipples,
    {
      createNippleDesktop,
      updatePosition,
      updateModal,
      updateName,
      updateUrl,
      updateDragging,
    },
  ];
};

export default useNipples;
