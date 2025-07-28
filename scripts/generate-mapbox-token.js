require('dotenv').config();

const fs = require('fs');
const path = require('path');

const token = process.env.MAPBOX_TOKEN;
if (!token) {
  throw new Error('MAPBOX_TOKEN environment variable is required');
}

const generateForAndroid = () => {
  const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="mapbox_access_token">${token}</string>
</resources>`;

  const outputPath = path.join(
    __dirname,
    '../android/app/src/main/res/values/mapbox_access_token.xml',
  );
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }

  fs.writeFileSync(outputPath, xmlContent);
  console.log('Mapbox token file for Android was generated successfully');
};

const generateForIOS = () => {
  const iosOutputPath = path.join(
    __dirname,
    '../ios/MapboxAccessToken.xcconfig',
  );
  const xconfigContent = `MAPBOX_ACCESS_TOKEN = ${token}`;

  fs.writeFileSync(iosOutputPath, xconfigContent);
  console.log('Mapbox token file for IOS was generated successfully');
};

generateForAndroid();
generateForIOS();
