export function organizations(
  state = {
    feedback: {}
  },
  action
) {
  switch (action.type) {
    case "SET_FEEDBACK_DATA":
      return {
        ...state,
        overalEstimation: action.payload.overalEstimation,
        difficultingProc: action.payload.difficultingProc,
        speed: action.payload.speed,
        polite: action.payload.polite,
        hasRecomended: action.payload.hasRecomended,
        description: action.payload.description,
        nameUser: action.payload.nameUser,
        emailUser: action.payload.emailUser
      };
    default:
      return state;
  }
}
