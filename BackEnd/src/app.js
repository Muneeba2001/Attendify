import express from "express";
const appData = express();

appData.listen("3000", () => {
  console.log("Server Started!");
});

