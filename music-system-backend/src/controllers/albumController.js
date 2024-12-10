import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColour } = req.body; // Use bgColour instead of bgColor

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Upload file to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    // Create album data
    const albumData = {
      name,
      desc,
      bgColour, // Use bgColour instead of bgColor
      image: imageUpload.secure_url,
    };

    // Save album to database
    const album = new albumModel(albumData);
    await album.save();

    res.status(201).json({ success: true, message: "Album Added", album });
  } catch (error) {
    console.error("Error in addAlbum:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.json({ success: true, albums: allAlbums });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album removed" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { addAlbum, listAlbum, removeAlbum };