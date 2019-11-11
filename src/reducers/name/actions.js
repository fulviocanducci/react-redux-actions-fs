import { NameType } from "./types";

function NameChange(value) {
  return {
    type: NameType.CHANGE,
    value
  };
}

export { NameChange };
