const { Problem } = require("../models/problem.model");
const ApiError = require("../utils/ApiError");

/**
 * @typedef {Object} Solution
 * @property {string} language - ["Cpp", "Python"] any one of them
 * @property {string} solution - Content of the solution
 */

/**
 * @typedef {Object} Problem
 * @property {string} title - The title of the problem
 * @property {string} problemStatement - The content of the problem.
 * @property {Solution[]} solution - Solutions Array
 */

/**
 * Get Problem by id
 * - Fetch problem object from Mongo using the "_id" field and return problem object
 * @param {String} id
 * @returns {Promise<Problem>}
 */
async function getProblemById(id) {
    let problem = null;
    let objectIdTest = /^[0-9a-fA-F]{24}$/;

    return problem;
}

/**
 * Get All Problems
 * - Fetch all the problems
 * @returns {Promise<Problem[]>}
 */
async function getProblems() {}

/**
 * Create a new Problem
 * @param {Problem} problem
 *  Problem to be added to db.
 * @returns {Promise<Problem[]>}
 */

async function createProblem(problem) {}

module.exports = {
    getProblemById,
    getProblems,
};
