import Team from "../models/Team.js";
import Problem from "../models/Problem.js";


export const createPs = async (req, res) => {
  try {
    const { psname } = req.body;

    const existingProblem = await Problem.findOne({ psname });
    if (existingProblem) {
      return res.status(400).json({ error: 'Problem statement already exists' });
    }

    const problem = new Problem({
      psname,
      pscount: 0,
    });

    await problem.save();

    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { teamName, teamMembers } = req.body;
    const psId = req.params.psId; // Retrieve psId from req.params

    // Find the problem statement by its ID
    const problem = await Problem.findById(psId);

    if (!problem) {
      return res.status(404).json({ error: 'Problem statement not found' });
    }

    // Check if teamName and teamMembers are not empty
    if (!teamName || !teamMembers) {
      return res.status(400).json({ error: 'TeamName and TeamMembers cannot be empty' });
    }

    // Check if the team name already exists in a case-insensitive manner
    const existingTeam = await Team.findOne({ teamName: { $regex: new RegExp(`^${teamName}$`, 'i') } });

    if (existingTeam) {
      return res.status(400).json({ error: 'Team name already exists' });
    }

    const team = new Team({
      teamName,
      teamMembers,
      psname: problem._id, // Assign the problem statement ID to psname
    });

    await team.save();

    problem.pscount += 1;
    await problem.save();

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProblemStatementCountById = async (req, res) => {
  try {
    const psId = req.params.psId; // Retrieve psId from req.params

    // Find the problem statement by its ID
    const problem = await Problem.findById(psId);

    if (!problem) {
      return res.status(404).json({ error: 'Problem statement not found' });
    }

    res.status(200).json({ count: problem.pscount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProblemStatements = async (req, res) => {
  try {
    // Fetch all problem statements from the database
    const problemStatements = await Problem.find({}, 'psname pscount');

    res.status(200).json(problemStatements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTeams = async (req, res) => {
  try {
    // Fetch all teams and populate the 'psname' field with the corresponding problem statement information
    const teams = await Team.find({}, 'teamName teamMembers psname').populate('psname', 'psname');

    if (!teams || teams.length === 0) {
      return res.status(404).json({ error: 'No teams found' });
    }

    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

