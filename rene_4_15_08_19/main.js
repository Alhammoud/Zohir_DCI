//FB-Simulator
//1. Ball
//Spielfeld
//2 Tore
//22 Spieler / 2 Mannschaften
//Kommentator
//Aktionen
//Schiedsrichter
//1. Baue 2 Arrays mit 11 Spielern
const dortmund = {
    name: "Dortmund",
    tore: 0,
    spieler: [
      "Klaus Peter",
      "Rudy Beinhardt",
      "Karl Abräumer",
      "Mirko Dicht",
      "Jochen Brecher",
      "Jürgen Steilpass",
      "Konrad Aufbauer",
      "Yves Flügelflitzer",
      "Achim Flankengott",
      "Benjamin Vollstrecker",
      "Andy Latte"
    ]
  };
  const bayern = {
    name: "Bayern",
    tore: 0,
    spieler: [
      "Richard Fliegenfänger",
      "Rudy Blutgrätsche",
      "Jens Vorstopper",
      "Werner Planlos",
      "Peter Fusspilz",
      "Tony Verteiler",
      "Günther Einnetzer",
      "Lukas Vollspann",
      "Hans Pike",
      "Klaus Abstauber",
      "Thomas Knipser"
    ]
  };
  //Array mit Aktionen
  const spielAktionen = [
    {
      name: "hält",
      type: "torwart"
    },
    {
      name: "zieht ab",
      type: "aktion"
    },
    {
      name: "passt auf",
      type: "interaktion-eigen"
    },
    {
      name: "foult",
      type: "interaktion-fremd"
    },
    {
      name: "schießt",
      type: "aktion"
    }
  ];
  //Array mit Ergebnissen(von Aktionen)
  const aktionsErgebnisse = [
    {
      name: "trifft",
      typ: "tor"
    },
    {
      name: "trifft die Latte",
      typ: "vorbei"
    }
  ];
  //2. Spielzug
  const randomSelect = array => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const spielzug = (mannschaftAct, mannschaftReact, aktionen, ergebnisse) => {
    let currentPlayerAct = randomSelect(mannschaftAct.spieler);
    let currentPlayerReact = randomSelect(mannschaftReact.spieler);
    let currentAction = randomSelect(aktionen);
    if (currentAction.type === "interaktion-eigen") {
      return `${currentPlayerAct} von ${mannschaftAct.name} ${
        currentAction.name
      } ${randomSelect(mannschaftAct.spieler)}`;
    } else if (currentAction.type === "interaktion-fremd") {
      return `${currentPlayerAct} von ${mannschaftAct.name} ${
        currentAction.name
      } ${currentPlayerReact} von ${mannschaftReact.name}`;
    } else if (currentAction.type === "aktion") {
      if (Math.round(Math.random()) === 0) {
        return `${currentPlayerAct} von ${mannschaftAct.name} ${
          currentAction.name
        } und ${ergebnisse[0].name}`;
      } else {
        return `${currentPlayerAct} von ${mannschaftAct.name} ${
          currentAction.name
        } und ${ergebnisse[1].name}`;
      }
    } else {
        return `${currentPlayerAct} von ${mannschaftAct.name} ${
          currentAction.name
        }`
    }
  };
  //3. Spielablauf
  const spielablauf = (mannschaftA, mannschaftB) => {
    if (Math.round(Math.random()) === 0) {
      return spielzug(mannschaftA, mannschaftB, spielAktionen, aktionsErgebnisse);
    } else {
      return spielzug(mannschaftB, mannschaftA, spielAktionen, aktionsErgebnisse);
    }
  };
  setInterval(() => console.log(spielablauf(dortmund, bayern)), 3000);