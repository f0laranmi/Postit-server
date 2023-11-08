const Story = require("../models/story")
const cloudinary = require ('cloudinary').v2

//get all stories
const getAllStories = async (req, res) => {
   try {
        const stories = await Story.find().populate("writtenBy", 'username')
        res.status(200).json({success: true, stories})
   } catch (error) {
    res.json(error)
   }
  };
  
  //get single story
  const getAStory = async (req, res) => {
    const {storyId} = req.params
   try {
        const story = await Story.findById({_id: storyId}).populate("writtenBy", "username")
        res.status(200).json({success: true, story})
   } catch (error) {
    res.json(error)
   }
  };
  
  //****users stories ******//
  
  //get users stories
  const getUsersStories = async (req, res) => {
    res.send("get users stories");
  };
  
  //create story
  const createStory = async (req, res) => {
   const {userId} = req.user
//    get access to the image in the req.files
   try {
    // image upload
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
        use_filename: true,
        folder: 'postitfileimages'
    })
    req.body.image = result.secure_url
    req.body.writtenBy = userId
    // send post request
    const story = await Story.create({...req.body})
    res.status(201).json({success: true, story})
   } catch (error) {
    res.json(error)
   }
  };
  
  // update story
  const editStory = async (req, res) => {
    res.send("update story");
  };
  
  //deleteStory
  const deleteStory = async (req, res) => {
    res.send("delete a story");
  };
  
  module.exports = {
    getAllStories,
    getAStory,
    getUsersStories,
    createStory,
    editStory,
    deleteStory,
  }