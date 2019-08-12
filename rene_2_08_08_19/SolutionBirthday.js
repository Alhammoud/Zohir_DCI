//Wie alt ist jede einzelne Person?
//Sortiert das Array nach Alter
//Bonus: Wer hat als nächstes Geburtstag

const people = [
    {
      name: "Rene",
      dateOfBirth: "02/13/1986"
    },
    {
      name: "Hans-Heinrich",
      dateOfBirth: "07/26/1974"
    },
    {
      name: "Holger",
      dateOfBirth: "02/24/1969"
    },
    {
      name: "Patrick",
      dateOfBirth: "02/25/1980"
    },
    {
      name: "Zohir",
      dateOfBirth: "01/01/1989"
    },
    {
      name: "Almas",
      dateOfBirth: "07/17/1954"
    },
    {
      name: "Björn",
      dateOfBirth: "07/03/1982"
    }
  ];
  
  //Solution Zohir
  let ageSort = people.forEach((person) => {
      person.age=Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10);
      console.log(people.sort( (x, y)=> {
          return x.age - y.age;
      }))
  })
  console.table(ageSort)
  
  //Solution Holger
  stillHaveBirthDayArray=[];
  const comparingAge = (array) => {
      for (elem of array) {
          let birthdayYear = elem.dateOfBirth.substring(6,10);
          let birthdayMonth = elem.dateOfBirth.substring(0,2);
          let birthdayDay = elem.dateOfBirth.substring(3,5);
          elem.birthdayMonthDay = birthdayMonth+birthdayDay;
          let otherBirthdayFormat = birthdayYear+birthdayMonth+birthdayDay;
          // console.log(otherBirthdayFormat);
          elem.otherBirthdayFormat= parseInt(otherBirthdayFormat);
          let currentDate = new Date;
          let currentYear = (currentDate.getFullYear());
          let currentMonth = (currentDate.getMonth())+1;
          let currentDay = (currentDate.getDay());
          // console.log (currentYear, currentMonth, currentDay)
          let currentAge = currentYear-parseFloat(birthdayYear);
          if (parseFloat(birthdayMonth) >= currentMonth && parseFloat(birthdayDay) > currentDay) {
              currentAge--;
              stillHaveBirthDayArray.push(elem)
          }
          elem.currentAge = currentAge;
      }
      if (stillHaveBirthDayArray.length===0) {
          stillHaveBirthDayArray=people.map(value =>value);
      }
  }
  const sortAge = (age1, age2) => {
      return (age1.otherBirthdayFormat) - (age2.otherBirthdayFormat);
  }
  const sortBirthdaysToCome = (birthday1, birthday2) => {
      return (birthday1.birthdayMonthDay - birthday2.birthdayMonthDay)
  }
  comparingAge(people);
  people.sort(sortAge);
  stillHaveBirthDayArray.sort(sortBirthdaysToCome)
  console.log(people);
  console.log(stillHaveBirthDayArray);
  console.log(`Als nächster hat Geburtstag: `+ stillHaveBirthDayArray[0].name);
  
  //Solution Michael
  people.forEach((value,index)=>{
      let time = new Date(people[index].dateOfBirth);
      people[index].epochTime = time.getTime();
      console.log(people[index].epochTime);
      let currentTime = new Date().getTime();
      let age = currentTime - people[index].epochTime;
      people[index].age = parseInt(age/(60*60*24*365*1000));
      let currentYear = new Date();
      console.log(currentYear.getFullYear())
      let currentDay = new Date(currentYear.getFullYear(),0,0);
      let dayOfTheYear = (currentYear - currentDay)/(1000*60*60*24);
      console.log (dayOfTheYear);
      
     let birthDayOfTheYear = people[index].dateOfBirth;
     birthDayOfTheYear = birthDayOfTheYear.split("/");
     console.log(birthDayOfTheYear);
     people[index].birthDayOfTheYear = birthDayOfTheYear[0] +'/'+birthDayOfTheYear[1]+'/'+currentYear.getFullYear();
     console.log(people[index].birthDayOfTheYear);
     let birthdayOfTheYear = new Date(people[index].birthDayOfTheYear);
     people[index].birthdayOfTheYearEpoch = birthdayOfTheYear.getTime();
     
     
      people[index].daysLeft = people[index].birthdayOfTheYearEpoch - currentYear;
      console.log(people[index].daysLeft);
      if(people[index].daysLeft < 0){
          people[index].daysLeft = people[index].daysLeft + 1000*60*60*24*365;
          console.log(people[index].daysLeft)
      }
      people[index].daysLeft = parseInt(people[index].daysLeft/(3600000*24));
      console.log(people[index].daysLeft)
  });
  let sortForAge = (a,b) => {
      return a.age-b.age;
  }
  people.sort(sortForAge);
  console.table(people);
  people2 = people;
  let sortForDaysLeft = (a,b) => {
      return a.daysLeft-b.daysLeft;
  }
  people2.sort(sortForDaysLeft);
  console.table(people2);
  
  //Solution René
  //Sort function
  const sortByNumber = (a, b) => {
      return a.ageInYears - b.ageInYears;
    };
    
    //Get Age in Milliseconds
    const yearInMs = 1000 * 60 * 60 * 24 * 365;
    const ageInYears = birthDate => {
      let ageInMs = new Date() - new Date(birthDate);
      return Math.floor(ageInMs / yearInMs);
    };
    
    //Save the age to the people Array
    people.forEach((person, index) => {
      people[index].ageInYears = ageInYears(person.dateOfBirth);
    });
    console.log(people);
    
    //Sort by Age
    people.sort(sortByNumber).reverse();
    
    console.table(people)

   // https://gist.github.com/ReneF1/d0e71c62f173760c4037bedbdd79711a