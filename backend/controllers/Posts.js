import Post from "../models/Posts.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ GET ALL POSTS
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.log("GET POSTS ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
    });
  }
};

// ✅ CREATE POST (FINAL SAFE VERSION)
export const createPosts = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body missing",
      });
    }

    const { name, prompt, photo } = req.body;

    if (!name || !prompt || !photo) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, prompt, photo) are required",
      });
    }

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: uploadedImage.secure_url,
    });

    return res.status(201).json({
      success: true,
      data: newPost,
    });

  } catch (error) {
    console.log("CREATE POST ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};