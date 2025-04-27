const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directory if it doesn't exist
const templatesDir = path.join(__dirname, 'public', 'images', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Define placeholder image URLs
// Using placeholder.com for simple color placeholders with text
const templates = [
  { name: 'professional', url: 'https://via.placeholder.com/600x800/2c3e50/FFFFFF?text=Professional+Resume+Template' },
  { name: 'modern', url: 'https://via.placeholder.com/600x800/8e44ad/FFFFFF?text=Modern+Resume+Template' },
  { name: 'minimal', url: 'https://via.placeholder.com/600x800/ecf0f1/000000?text=Minimal+Resume+Template' },
  { name: 'creative', url: 'https://via.placeholder.com/600x800/e74c3c/FFFFFF?text=Creative+Resume+Template' },
  { name: 'corporate', url: 'https://via.placeholder.com/600x800/34495e/FFFFFF?text=Corporate+Resume+Template' },
  { name: 'elegant', url: 'https://via.placeholder.com/600x800/16a085/FFFFFF?text=Elegant+Resume+Template' }
];

// Download images
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filename);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filename, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Download all templates
const downloadAllTemplates = async () => {
  const promises = templates.map(template => {
    const filename = path.join(templatesDir, `${template.name}-template.png`);
    return downloadImage(template.url, filename);
  });

  try {
    await Promise.all(promises);
    console.log('All templates downloaded successfully!');
  } catch (error) {
    console.error('Error downloading templates:', error);
  }
};

downloadAllTemplates(); 