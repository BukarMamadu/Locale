const States = require("../models/states");
const Regions = require("../models/regions");
const Lgas = require("../models/lgas");



  module.exports = function (app) {
  
    app.get("/api/v1/regions", (req, res) => {
      Regions.find({}, "-_id -__v", (err, regions) => {
        if (err) {
          res.status(404).json({
            info: "error finding regions",
            error: err,
          });
        } else {
          res.status(200).json({
            info: "All regions found",
            data: regions,
          });
        }
      }).sort({ Name: "ascending" });
    });
  
    app.get("/api/v1/regions/:name", (req, res) => {
      Regions.findOne({ Name: req.params.name }, "-_id -__v", (err, region) => {
        if (err) {
          res.status(400).json({
            info: "error during find region",
            error: err,
          });
        }
        if (region) {
          res.status(200).json({
            info: "region found successfully",
            data: region,
          });
        } else {
          res.status(404).json({
            info: "region not found",
          });
        }
      });
    });
  
    app.get("/api/v1/states", (req, res) => {
      States.find({}, "-_id -__v", (err, states) => {
        if (err) {
          res.status(404).json({
            info: "error finding states",
            error: err,
          });
        } else {
          res.status(200).json({
            info: "All states found",
            data: states,
          });
        }
      }).sort({ Name: "ascending" });
    });
  
    app.get("/api/v1/states/:name", (req, res) => {
      States.findOne({ Name: req.params.name }, "-_id -__v", (err, state) => {
        if (err) {
          res.status(400).json({
            info: "error during find state",
            error: err,
          });
        }
        if (state) {
          res.status(200).json({
            info: "state found successfully",
            data: state,
          });
        } else {
          res.status(404).json({
            info: "state not found",
          });
        }
      });
    });
  
    app.get("/api/v1/lgas", (req, res) => {
      Lgas.find({}, "-_id -__v", (err, lgas) => {
        if (err) {
          res.status(404).json({
            info: "error finding lgas",
            error: err,
          });
        } else {
          res.status(200).json({
            info: "All lgas found",
            data: lgas,
          });
        }
      }).sort({ Name: "ascending" });
    });
  
    app.get("/api/v1/lgas/:name", (req, res) => {
      Lgas.findOne({ Name: req.params.name }, "-_id -__v", (err, lga) => {
        if (err) {
          res.status(400).json({
            info: "error during find lga",
            error: err,
          });
        }
        if (state) {
          res.status(200).json({
            info: "lga found successfully",
            data: lga,
          });
        } else {
          res.status(404).json({
            info: "lga not found",
          });
        }
      });
    });
  
    //404
    app.use((req, res) => {
      res.status(404).json({
        error: "route not found",
      });
    });
  };
  


