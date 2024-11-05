const syncDatabase = require('./Utils/syncDatabase');

(async () => {
  try {
    await syncDatabase();
    console.log('Database synchronized successfully.');
    process.exit(0); // Exit the script
  } catch (error) {
    console.error('Failed to synchronize database:', error);
    process.exit(1); // Exit with an error code
  }
})();