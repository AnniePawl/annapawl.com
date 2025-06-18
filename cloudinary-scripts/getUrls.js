require('dotenv').config(); 

const cloudinary = require('cloudinary').v2;
cloudinary.config(true);


async function getImageUrls() {
  try {
    const result = await cloudinary.search
      .expression('folder:Food')
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    const urls = result.resources.map((file) => file.secure_url);
    console.log(JSON.stringify(urls, null, 2));
  } catch (err) {
    console.log('Loaded config:', cloudinary.config());
    console.error('Error fetching images:', err);
  }
}

getImageUrls();
