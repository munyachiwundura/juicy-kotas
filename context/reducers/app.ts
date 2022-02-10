type State = {
    cart: number
}

type Action = 
| {
    type: "INCREASE";
    // quantity: number;
}
| {
    type: "DECREASE";
    // quantity: number;
}

export function app(state: State, action: Action) {
    switch (action.type) {
      case "INCREASE":
        return { ...state, cart: state.cart + 1}
      case "DECREASE":
        return { ...state, cart: state.cart - 1}
      default:
        return state;
    }
  }