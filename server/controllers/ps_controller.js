import Problem from "../models/Problem.js";
import Team from "../models/Team.js";


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

