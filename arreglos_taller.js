
// Datos personales 
const perfilUser = [
    {
      name: "Mateo",
      lastname: "Bernal",
      age: 21,
      country: "Ecuator",
      university: "EPN",
      career: "Desarrollo de Software",
      description: "nStudet of the EPN",
      address: {
        phone: "0995389340",
        email: "jose.bernal@epn.edu.ec",
        streets: {
          main: "Guatemala",
          secundary: "Condorcunga",
        },
      },
    },
  ];
  
  // muestra los datos que se guardaron en el array
  datosPersonales=perfilUser.forEach((dato)=>{
    console.log(dato)
  });
  
  // datos
  console.log(datosPersonales);
  
  // este arreglo guarda los conociemientos 
  const skills = ["Python", "MongoDB", "Java", "CSS", "HTML", "MySQL", "C++"];
  const [a, b, c, d, e, f, g] = skills;
  // se mostrara el lenguaje de programacion python
  console.log(a);
  
  
  const cargosOcuapdos = ["Desarrollador jr","Desarrollador backend","Desarrollador frontend", "Pasante"];
  let result = cargosOcuapdos.find((cargo) => cargo === "Desarrollador jr");
  result ? console.log("Ggenial!!!"): console.log("Ese cargo no ocupaste");