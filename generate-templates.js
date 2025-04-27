const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
const templatesDir = path.join(__dirname, 'public', 'images', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Define resume template styles
const templates = [
  { name: 'professional', color: '#2c3e50', secondaryColor: '#3498db' },
  { name: 'modern', color: '#8e44ad', secondaryColor: '#9b59b6' },
  { name: 'minimal', color: '#2c3e50', secondaryColor: '#ecf0f1' },
  { name: 'creative', color: '#e74c3c', secondaryColor: '#f39c12' },
  { name: 'corporate', color: '#34495e', secondaryColor: '#95a5a6' },
  { name: 'elegant', color: '#16a085', secondaryColor: '#1abc9c' }
];

// Create resume template thumbnails
templates.forEach(template => {
  // Create a 600x800 canvas (resume format)
  const canvas = createCanvas(600, 800);
  const ctx = canvas.getContext('2d');

  // Fill the background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 600, 800);

  // Draw header
  ctx.fillStyle = template.color;
  ctx.fillRect(0, 0, 600, 150);

  // Draw profile photo placeholder
  ctx.fillStyle = template.secondaryColor;
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, Math.PI * 2);
  ctx.fill();

  // Draw name placeholder
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(170, 50, 350, 25);
  
  // Draw title placeholder
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(170, 90, 250, 20);

  // Draw main content sections
  ctx.fillStyle = template.secondaryColor;
  ctx.fillRect(30, 180, 540, 30); // Section title
  
  // Content boxes
  ctx.fillStyle = '#f1f1f1';
  ctx.fillRect(30, 230, 540, 60);
  ctx.fillRect(30, 310, 540, 60);
  ctx.fillRect(30, 390, 540, 60);
  
  // Second section
  ctx.fillStyle = template.secondaryColor;
  ctx.fillRect(30, 480, 540, 30); // Section title
  
  // Content boxes
  ctx.fillStyle = '#f1f1f1';
  ctx.fillRect(30, 530, 540, 60);
  ctx.fillRect(30, 610, 540, 60);
  ctx.fillRect(30, 690, 540, 60);

  // Add template name as label
  ctx.fillStyle = template.color;
  ctx.font = 'bold 16px Arial';
  ctx.fillText(template.name.toUpperCase(), 30, 780);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(templatesDir, `${template.name}-template.png`), buffer);
  
  console.log(`Created ${template.name} template`);
});

console.log('All templates generated successfully!'); 