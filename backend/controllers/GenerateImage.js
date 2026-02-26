import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// ✅ GENERATE IMAGE (Modern OpenAI SDK)
export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024",
    });

    const imageUrl = result.data[0].url;

    return res.status(200).json({
      success: true,
      photo: "https://via.placeholder.com/1024",
    });

  } catch (error) {
    console.log("IMAGE GENERATION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to generate image",
    });
  }
};
