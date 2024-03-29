const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint to fetch data with filtering options
app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from the public API
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();

    // Apply filtering based on query parameters
    let filteredData = data.entries;

    // Filter by category
    if (req.query.category) {
      const categoryToFilter = req.query.category.toLowerCase();
      filteredData = filteredData.filter(entry =>
        entry.Category.toLowerCase().includes(categoryToFilter)
      );
    }

    // Limit results
    const limit = req.query.limit ? parseInt(req.query.limit) : filteredData.length;
    filteredData = filteredData.slice(0, limit);

    res.json(filteredData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
