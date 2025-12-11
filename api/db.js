const fs = require('fs').promises;
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'db.json');

async function readDB() {
  try {
    const data = await fs.readFile(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist or is invalid, return empty structure
    return { news: [] };
  }
}

async function writeDB(data) {
  // Note: In serverless environments this write is ephemeral and not persisted across deployments.
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB };
