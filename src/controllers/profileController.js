const Profile = require('../models/profileSchema');


exports.createProfile = async (req, res, next) => {
  const { name, skills, education, experience, portfolio } = req.body;
  const profile = new Profile({ name, skills, education, experience, portfolio });
  try {
    const savedProfile = await profile.save();
    res.status(201).json({
        success: true,
        message: 'Profile created successfully',
        data: {
            user: savedProfile
        }
    });
  } catch (error) {
    res.status(400).json({ error:  {message: "invalid profile creation"} });
  }
};

exports.getProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json({
        success: true,
        message: "profiles fetched successfully",
        data: {
           profiles
        }
    });
  } catch (error) {
    res.status(500).json({ error: {message: "Get all Profiles unsuccessful"} });
  }
 
};

exports.getProfilesById = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
    } else {
      res.status(200).json({  success: true,
        message: 'Profile successfully retrieved',
        data: {
            user: {
                profile
               
            }
        }
    });
    }
  } catch (error) {
    res.status(500).json({ error: {message: "Get all Profiles unsuccessful"} });
  }
};

//995,250
//12,300 - 3,200   4,000

//1 005 800
//23,200

//912,300
//2252457

//993238