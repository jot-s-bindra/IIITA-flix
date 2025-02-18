require("dotenv").config();
const express = require("express");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const app = express();
app.use(express.json());

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = "iiita-flix-temp"; // Change to your bucket name

// ✅ Generate a Pre-Signed URL for Video Uploads
app.get("/generate-presigned-url", async (req, res) => {
  try {
    const { fileName, fileType } = req.query;

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `uploads/${fileName}`, // Store inside "uploads/" folder in S3
      ContentType: fileType,
    });

    const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 600 }); // URL valid for 10 min
    res.json({ presignedUrl });
  } catch (error) {
    console.error("Error generating pre-signed URL:", error);
    res.status(500).json({ error: "Could not generate pre-signed URL" });
  }
});

// ✅ Start Express Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Upload Service running on port ${PORT}`);
});
