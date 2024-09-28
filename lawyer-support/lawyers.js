// lawyers.js
const lawyers = [
    {
      name: "John Doe",
      contact: "+1234567890",
      charges: "$100/hr",
      rating: 4.5
    },
    {
      name: "Jane Smith",
      contact: "+0987654321",
      charges: "$120/hr",
      rating: 4.8
    },
    {
      name: "Michael Lee",
      contact: "+1122334455",
      charges: "$150/hr",
      rating: 4.0
    },
    {
      name: "Emily Johnson",
      contact: "+2233445566",
      charges: "$110/hr",
      rating: 4.7
    },
    {
      name: "David Brown",
      contact: "+3344556677",
      charges: "$90/hr",
      rating: 3.9
    },
    {
      name: "Sarah Davis",
      contact: "+4455667788",
      charges: "$130/hr",
      rating: 4.6
    },
    {
      name: "Paul Wilson",
      contact: "+5566778899",
      charges: "$95/hr",
      rating: 4.2
    },
  ];
  
  // Function to display lawyer information on the page
  function displayLawyers(filteredLawyers = lawyers) {
    const lawyerList = document.getElementById('lawyer-list');
    lawyerList.innerHTML = ''; // Clear previous content
    filteredLawyers.forEach(lawyer => {
      const lawyerCard = `
        <div class="lawyer-card">
          <h3>${lawyer.name}</h3>
          <p>Contact: ${lawyer.contact}</p>
          <p>Charges: ${lawyer.charges}</p>
          <p>Rating: ${generateStars(lawyer.rating)} (${lawyer.rating} stars)</p>
        </div>
      `;
      lawyerList.innerHTML += lawyerCard;
    });
  }
  
  // Function to generate star ratings
  function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars += '★'; // Filled star
      } else {
        stars += '☆'; // Empty star
      }
    }
    return stars;
  }
  
  // Function to filter lawyers by name
  function searchLawyers() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredLawyers = lawyers.filter(lawyer =>
      lawyer.name.toLowerCase().includes(searchValue)
    );
    displayLawyers(filteredLawyers);
  }
  
  // Initial call to display lawyers
  window.onload = () => {
    displayLawyers();
  };
  