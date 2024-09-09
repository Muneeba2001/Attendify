// const initialState = {

import { act } from "react"
import { AbsentToday } from "../ActionCreator/AttendanceCount"




// }

// const AttendanceCount = async(state = initialState, action) => {
//     switch(action.type) {
//         case 'PRESENT_TODAY' : {
//             try {
//                 const today = await axios.get(`http://localhost:3000/${today}`)
//             } catch (error) {
//                 console.log("ERROR")
//             }
//         }
//     }
// }


// export default AttendanceCount

const initialState = {
    PresentToday : 0,
    PresentWeek : 0,
    PresentMonth : 0,
    PresentYear : 0,
    AbsentToday : 0,
}

const AttendanceCount = (state = initialState, action) => {
    switch (action.type) {
        case 'PRESENT_TODAY' : {
           return{
            ...state, PresentToday: action.payload
           }
        }
        case 'PRESENT_WEEK' : {
        return{
            ...state, PresentWeek : action.payload
        }
        }
        case 'PRESENT_MONTH' : {
            return {
                ...state, PresentMonth : action.payload
            }
        }
        case 'PRESENT_YEAR' : {
            return {
                ...state, PresentYear : action.payload
            }
        }
        case 'ABSENT_TODAY': {
            return{
                ...state, AbsentToday : action.payload
            }
        }
        default:
            return state
    }
   
}

export default AttendanceCount