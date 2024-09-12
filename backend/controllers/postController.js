// import Post from "../models/postModel";

// export const createPost = async (req, res) => {
//   try {
//     const { title, author, content, categories, tags } = req.body;

//     const mainImage = req.files["mainImage"]
//       ? {
//           data: req.files["mainImage"][0].buffer,
//           contentType: req.files["mainImage"][0].mimetype,
//         }
//       : null;

//     const additionalImages = req.files["additionalImages"]
//       ? req.files["additionalImages"].map((file) => ({
//           data: file.buffer,
//           contentType: file.mimetype,
//         }))
//       : [];

//     const newPost = new Post({
//       title,
//       author,
//       content,
//       categories: categories.split(",").map((category) => category.trim()),
//       tags: tags.split(",").map((tag) => tag.trim()),
//       mainImage,
//       additionalImages,
//     });

//     await newPost.save();
//     res.status(201).send("Post created successfully");
//   } catch (error) {
//     console.error("Error creating post:", error);
//     res.status(500).send("Error creating post");
//   }
// };

// export const getPostById = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).send("Post not found");

//     // Convert Buffer to base64 string for sending to client
//     const postWithBase64Images = {
//       ...post.toObject(),
//       mainImage: post.mainImage
//         ? {
//             ...post.mainImage,
//             data: post.mainImage.data.toString("base64"),
//           }
//         : null,
//       additionalImages: post.additionalImages.map((img) => ({
//         ...img,
//         data: img.data.toString("base64"),
//       })),
//     };

//     res.json(postWithBase64Images);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching post");
//   }
// };
