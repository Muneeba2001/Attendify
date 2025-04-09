import { combineReducers } from "redux";
import AttendanceCount from "./AttendanceReducer";

const RootReducer = combineReducers({
    attendance: AttendanceCount
});

export default RootReducer;

