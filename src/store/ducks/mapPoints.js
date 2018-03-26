export const Types = {
  TOGGLE_MODAL: 'mapPoints/TOGGLE_MODAL',
  REQUEST_USER: 'mapPoints/REQUEST_USER',
  USER_SUCCESS: 'mapPoints/USER_SUCCESS',
  USER_ERROR: 'mapPoints/USER_ERROR',
};

const initialState = {
  addNewPoint: false,
  coordinate: null,
  loading: false,
  users: [],
  error: null,
};

export default function mapPoints(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return {
        ...state,
        addNewPoint: !state.addNewPoint,
        coordinate: action.payload.coordinate,
        error: null,
      };
    case Types.REQUEST_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.USER_SUCCESS:
      return {
        users: state.users.concat([action.payload.user]),
        addNewPoint: false,
        coordinate: null,
        loading: false,
        error: null,
      };
    case Types.USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  toggleModal: (coordinate = null) => ({
    type: Types.TOGGLE_MODAL,
    payload: {
      coordinate,
    },
  }),

  requestUser: username => ({
    type: Types.REQUEST_USER,
    payload: {
      username,
    },
  }),

  userSuccess: user => ({
    type: Types.USER_SUCCESS,
    payload: {
      user,
    },
  }),

  userError: error => ({
    type: Types.USER_ERROR,
    payload: {
      error,
    },
  }),
};
