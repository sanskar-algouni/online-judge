const mongoose = require("mongoose");
const config = require("../config/config");

const { solutionSchema } = require("./solution.model");

//TODO: Create a problem Schema with the following fields ["title", "solutions", "difficulty", "problemStatement"]
/*
title - String
solutions - Solution[], 
difficulty - String enum["EASY", "MEDIUM", "DIFFICULT"], default = EASY
problemStatement - String
*/

/**
 * @typedef Problem
 */
const Problem = mongoose.model("Problem", problemSchema, "problems");

module.exports.Problem = Problem;
