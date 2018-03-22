export const Types = {
  TOGGLE_MODAL: 'mapPoints/TOGGLE_MODAL',
};

const initialState = {
  addNewPoint: false,
  markers: [],
};

export default function mapPoints(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      console.tron.log(state);
      return { ...state, addNewPoint: !state.addNewPoint };
    default:
      return state;
  }
}

export const Creators = {
  toggleModal: () => ({
    type: Types.TOGGLE_MODAL,
  }),
};
