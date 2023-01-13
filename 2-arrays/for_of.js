const massive = ["mamba", 'damba', 'panda', 'habl', 'babl', 'scrabl'];
// for (const index of massive) {
//   console.log(`enum of massive elements (${index})`);
// }


const string = 'enuming of letters in string by cicle (for of)'
for (const character of string) {
  console.log( `character ${character}`)
}

// const massive = ["mamba", 'damba', 'panda', 'habl', 'babl', 'scrabl'];
const wantToFind = 'panda'

for (const index of massive) {
  console.log(`serching for (${wantToFind})`);

  if (index === 'panda') {
    console.log(`i finded ${index}`)
    break;
  } else {
    console.log('nope')
  }
}