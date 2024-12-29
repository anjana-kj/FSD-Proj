// Updated data to include constellations, meteor showers, and planets
const data = {
    "New York": {
      "Constellations": {
        "Orion": { 
          time: "8:00 PM", 
          date: "2024-12-15", 
          info: "Visible during winter nights.",
          direction: "Southeastern sky",
          image: "C:\\Users\\npr20\\OneDrive\\Pictures\\project\\th (3).jpg"
        },
        "Ursa Major": { 
          time: "10:00 PM", 
          date: "2024-12-15", 
          info: "Prominent in spring and summer.",
          direction: "Northern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Ursa_Major_IAU.svg"
        }
      },
      "Meteor Showers": {
        "Geminids": { 
          time: "2:00 AM", 
          date: "2024-12-14", 
          info: "One of the best annual meteor showers.",
          direction: "Eastern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Geminids_2013.jpg"
        }
      },
      "Planets": {
        "Jupiter": { 
          time: "9:00 PM", 
          date: "2024-12-15", 
          info: "Brightest object in the night sky.",
          direction: "Southern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
        }
      }
    },
    "Los Angeles": {
      "Constellations": {
        "Cassiopeia": { 
          time: "9:00 PM", 
          date: "2024-12-15", 
          info: "Visible throughout the year.",
          direction: "Northeastern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cassiopeia_IAU.svg"
        }
      },
      "Meteor Showers": {
        "Perseids": { 
          time: "3:00 AM", 
          date: "2024-08-13", 
          info: "Known for its fast and bright meteors.",
          direction: "Northwestern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Perseid_meteors.jpg"
        }
      },
      "Planets": {
        "Mars": { 
          time: "10:30 PM", 
          date: "2024-12-15", 
          info: "The red planet is visible with the naked eye.",
          direction: "Eastern sky",
          image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Mars_Valles_Marineris.jpeg"
        }
      }
    }
  };
  
  // Populate location dropdown
  const locationSelect = document.getElementById('location-select');
  const categorySelect = document.getElementById('constellation-select');
  const detailsParagraph = document.getElementById('details');
  
  Object.keys(data).forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
  });
  
  // Handle location selection
  locationSelect.addEventListener('change', () => {
    categorySelect.innerHTML = '<option value="">-- Choose an Option --</option>';
    const selectedLocation = locationSelect.value;
  
    if (selectedLocation) {
      // Add categories (Constellations, Meteor Showers, Planets)
      Object.keys(data[selectedLocation]).forEach(category => {
        const optGroup = document.createElement('optgroup');
        optGroup.label = category;
  
        Object.keys(data[selectedLocation][category]).forEach(item => {
          const option = document.createElement('option');
          option.value = `${category}-${item}`;
          option.textContent = item;
          optGroup.appendChild(option);
        });
  
        categorySelect.appendChild(optGroup);
      });
    }
    updateDetails();
  });
  
  // Handle category selection
  categorySelect.addEventListener('change', updateDetails);
  
  // Update details section
  function updateDetails() {
    const location = locationSelect.value;
    const selectedValue = categorySelect.value;
    if (!selectedValue) {
      detailsParagraph.textContent = "Please select a location and an option to see details.";
      return;
    }
  
    const [category, item] = selectedValue.split("-");
    const details = data[location][category][item];
  
    if (details) {
      const { time, date, info, direction, image } = details;
      detailsParagraph.innerHTML = `
        <strong>Location:</strong> ${location}<br>
        <strong>Category:</strong> ${category}<br>
        <strong>Name:</strong> ${item}<br>
        <strong>Time:</strong> ${time}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Info:</strong> ${info}<br>
        <strong>Direction:</strong> ${direction}<br>
        <img src="${image}" alt="${item}" style="max-width: 100%; margin-top: 10px;">
      `;
    }
  }
  