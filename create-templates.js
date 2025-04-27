const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const templatesDir = path.join(__dirname, 'public', 'images', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Create simple SVG templates
const templates = [
  { name: 'professional', bgColor: '#2c3e50', accentColor: '#3498db', textColor: '#ffffff' },
  { name: 'modern', bgColor: '#8e44ad', accentColor: '#9b59b6', textColor: '#ffffff' },
  { name: 'minimal', bgColor: '#ecf0f1', accentColor: '#2c3e50', textColor: '#000000' },
  { name: 'creative', bgColor: '#e74c3c', accentColor: '#f39c12', textColor: '#ffffff' },
  { name: 'corporate', bgColor: '#34495e', accentColor: '#95a5a6', textColor: '#ffffff' },
  { name: 'elegant', bgColor: '#16a085', accentColor: '#1abc9c', textColor: '#ffffff' }
];

templates.forEach(template => {
  const svgContent = `<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="600" height="800" fill="#ffffff" />
    
    <!-- Header -->
    <rect width="600" height="150" fill="${template.bgColor}" />
    
    <!-- Profile photo placeholder -->
    <circle cx="100" cy="75" r="50" fill="${template.accentColor}" />
    
    <!-- Name placeholder -->
    <rect x="170" y="50" width="350" height="25" fill="${template.textColor}" />
    
    <!-- Title placeholder -->
    <rect x="170" y="90" width="250" height="20" fill="${template.textColor}" />
    
    <!-- Main content sections -->
    <rect x="30" y="180" width="540" height="30" fill="${template.accentColor}" />
    
    <!-- Content boxes -->
    <rect x="30" y="230" width="540" height="60" fill="#f1f1f1" />
    <rect x="30" y="310" width="540" height="60" fill="#f1f1f1" />
    <rect x="30" y="390" width="540" height="60" fill="#f1f1f1" />
    
    <!-- Second section -->
    <rect x="30" y="480" width="540" height="30" fill="${template.accentColor}" />
    
    <!-- Content boxes -->
    <rect x="30" y="530" width="540" height="60" fill="#f1f1f1" />
    <rect x="30" y="610" width="540" height="60" fill="#f1f1f1" />
    <rect x="30" y="690" width="540" height="60" fill="#f1f1f1" />
    
    <!-- Template name -->
    <text x="30" y="780" font-family="Arial" font-size="16" font-weight="bold" fill="${template.bgColor}">${template.name.toUpperCase()} TEMPLATE</text>
  </svg>`;
  
  fs.writeFileSync(path.join(templatesDir, `${template.name}-template.svg`), svgContent);
  console.log(`Created ${template.name} template SVG`);
});

console.log('All templates created successfully!'); 