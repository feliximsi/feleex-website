const fs = require('fs');
const path = require('path');

const root = process.cwd();
const newProjectDir = path.join(root, 'felix-workforce-connect-main');

// Get all items in root
const items = fs.readdirSync(root);

// Delete all items except .git, felix-workforce-connect-main, and this script
for (const item of items) {
  if (item === '.git' || item === 'felix-workforce-connect-main' || item === 'migration.cjs') {
    continue;
  }
  const itemPath = path.join(root, item);
  console.log(`Deleting ${item}`);
  fs.rmSync(itemPath, { recursive: true, force: true });
}

// Move all items from new project to root
const newItems = fs.readdirSync(newProjectDir);
for (const item of newItems) {
  const oldPath = path.join(newProjectDir, item);
  const newPath = path.join(root, item);
  console.log(`Moving ${item} to root`);
  fs.renameSync(oldPath, newPath);
}

// Remove empty new project directory
fs.rmSync(newProjectDir, { recursive: true, force: true });
console.log('Migration complete');
