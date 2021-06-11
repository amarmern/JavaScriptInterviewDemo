var devs = [
  {
      name: 'A',
      age: 26,
      tech: ['JavaScript','React'],
      addr:{
          country:'India',
          city:'Pune'
      }
  },
  {
      name: 'B',
      age: 25,
      tech: ['Node','AngularJs'],
      addr:{
          country:'USA',
          city:'NY'
      }
  },
  {
      name: 'C',
      age: 27,
      tech: ['React','AWS'],
      addr:{
          country:'UK',
          city:'London'
      }
  }
]


const onlyReact = devs.filter(obj => obj.tech.includes('React')).map(obj => ({name: obj.name , "tech" : obj.tech}))
console.log(onlyReact)
