// flatMap()

const massive = [
    {property: 'solo', instrument: ['guitar', 'baraban']},
    {property: 'han', instrument: ['fleita', 'tarelka']},
    {property: 'vaayn', instrument: ['bairaktar', 'traktor']}
  ];
  
  const spisok = massive.flatMap(element => element.instrument);
  console.log(spisok);