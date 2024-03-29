(async () => {
    const { default: express } = await import('express');
    const { default: fetch } = await import('node-fetch');
  
    const app = express();
    const PORT = process.env.PORT || 3000;
  
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
          console.log('Filtering by category:', categoryToFilter);
          filteredData = filteredData.filter(entry =>
            entry.Category.toLowerCase().includes(categoryToFilter)
          );
        }
  
        // Limit results
        const limit = req.query.limit ? parseInt(req.query.limit) : filteredData.length;
        console.log('Limiting results to:', limit);
        filteredData = filteredData.slice(0, limit);
  
        console.log('Filtered data:', filteredData); // Log filtered data before sending response
  
        res.json(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })();
  