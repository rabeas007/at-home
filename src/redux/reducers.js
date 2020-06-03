import * as AT from "./action-types";
import mockThreads from "../mockThreads";
import mockRooms from "../roomMock";
import _ from "lodash";

const initialState = {
  isLoading: false,
  currentRoom: "",
  rooms: mockRooms,
  threads: mockThreads,
  threadsSort: "Hot",
  subscribedRooms: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      };
    case AT.VOTE_UP:
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes + 1 };
          return thread;
        }),
      };
    case AT.VOTE_DOWN:
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.payload)
            return { ...thread, votes: thread.votes - 1 };
          return thread;
        }),
      };
    case AT.SORT_THREADS_CRITERIA:
      //   let threads = state.threads;

      //   if (action.criteria === "Hot" || action.criteria === "Viewed") {
      //     threads = state.threads.sort((a, b) => (a.votes > b.votes ? -1 : 1));
      //   } else if (action.criteria === "Latest") {
      //     threads = state.threads.sort((a, b) =>
      //       a.details.time > b.details.time ? -1 : 1
      //     );
      //   }

      return {
        ...state,
        threadsSort: action.criteria,
        // threads,
      };
    case AT.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscribedRooms: [...state.subscribedRooms, action.roomId],
      };
    case AT.REMOVE_SUBSCRIPTION:
      return {
        ...state,
        subscribedRooms: state.subscribedRooms.filter(
          (item) => item !== action.roomId
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
