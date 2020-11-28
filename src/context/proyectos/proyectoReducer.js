import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

export const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: !state.formulario,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    default:
      return state;
  }
};
