import axios from "axios";

export const PresentToday = () => async(dispatch) => {
    const response = await axios (`http://localhost:3000/AttendanceCount/today`);
    try {
        dispatch({
            type : 'PRESENT_TODAY',
            payload : response.data.presentCount
        })
    } catch (error) {
        console.log("Error", error)
    }
}
// export const PresentWeek = () => ({
//     type : 'PRESENT_WEEK'
// })
export const PresentWeek = ()=> async (dispatch) => {
    const response = await axios (`http://localhost:3000/AttendanceCount/week`);
    try {
        dispatch({
            type : 'PRESENT_WEEK',
            payload : response.data.presentCount
        })
    } catch (error) {
        console.log("ERROR", error)
    }
} 
// export const PresentMonth = () => ({
//     type : 'PRESENT_MONTH'
// })
export const PresentMonth = () => async(dispatch) => {
    const response = await axios (`http://localhost:3000/AttendanceCount/month`);
   try {
    dispatch({
        type : 'PRESENT_MONTH',
        payload : response.data.presentCount
    })
   } catch (error) {
    console.log("Error", error)
   }
}

// export const PresentYear = () => ({
//     type : 'PRESENT_YEAR'
// })

export const PresentYear = () => async(dispatch) => {
    const response = await axios (`http://localhost:3000/AttendanceCount/year`);
    try {
        dispatch({
            type : 'PRESENT_YEAR', 
            payload : response.data.presentCount
        })
    } catch (error) {
       console.log("Error", error) 
    }
}

export const AbsentToday = () => async(dispatch) => {
    const response = await axios (`http://localhost:3000/AbsentCount/today`);
    try {
        dispatch({
            type: 'ABSENT_TODAY',
            payload : response.data.AbsentAttendees
        })
    } catch (error) {
        console.log("error", error)
    }
}