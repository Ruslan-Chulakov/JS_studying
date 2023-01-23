const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
//   console.log(keys);

  for (const key of keys) {
    values.push(apartment[key])
    // console.log(apartment[key])
  }
  console.log(values);



//   console.log(apartment.rating);
  console.log(apartment['rating']);