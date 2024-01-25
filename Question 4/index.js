async function getPostDataByTitle(title) {
    try {
      // Fetch data from the mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Filter the data based on the provided title
      const filteredPosts = data.filter(post => post.title.includes(title));
  
      // Log the filtered posts to the console
      if (filteredPosts.length > 0) {
        console.log('Filtered Posts:');
        filteredPosts.forEach(post => {
          console.log(`Title: ${post.title}, Body: ${post.body}`);
        });
      } else {
        console.log(`No posts found with the title "${title}"`);
      }
  
    } catch (error) {
      // Handle errors
      console.error(`Error: ${error.message}`);
    }
  }
  
  // Example usage with the title "magnam"
  getPostDataByTitle("magnam");
  