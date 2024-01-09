 // for in
 
 const myObject = {
    safety : "tata",
    internet : "Mg",
    power : "tayota",
    looks : "Mahindra"
 }

  for (const key in myObject) {
       // console.log(`${key} is the main specification of ${myObject[key]}`);        
  }

  const gymbros = ["anki","tani","pyush","aksh","manthan"];

  for (const key in gymbros) {
   // console.log(`the boys who go to gym are ${gymbros[key]}`);
  }
  
  const gymExercise = new Map();
  gymExercise.set('mon', 'chest')
  gymExercise.set('tue', 'back')
  gymExercise.set('wed', 'byceps')
  gymExercise.set('thu', 'triceps')
  gymExercise.set('fri', 'sholder')
  gymExercise.set('sat', 'legs')
  gymExercise.set('sun', 'cheat')

  // console.log(gymExercise);

  for (const key in gymExercise) {
    console.log(map);     // this doesnot work becouse maps are unittrable
  }

