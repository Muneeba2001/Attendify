import attendanceModel from "../../model/attendanceSheet.js";

const attendanceController = {
  getAll: async (req, res) => {
    try {
      const { Subject, Section, Date } = req.query;
      const attendanceSheet = await attendanceModel.find({
        where: {
          Subject,
          Section,
          Date,
        },
        populate: {
          path: "StudentID",
          select: "Name StudentID",
        },
      });
      res.status(200).json({ message: "Attendace", attendanceSheet });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  update: async (req, res) => {
    const { Subject, Section, Date, attendance } = req.body;
    try {
      const updates = attendance.map(async (record) => {
        return await attendance.findOneAndUpdate(
          {
            StudentID: MediaRecorder.StudentID,
            Section,
            Subject,
            Date,
          },
          {
            Status: record.Status,
          },
          {
            new: true,
          }
        );
      });
      const data = await Promise.all(updates);
      res.status(200).json({ message: "Data updated", data });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default attendanceController;
