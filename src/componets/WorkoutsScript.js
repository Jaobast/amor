import React, { useState, useEffect, useRef } from 'react';

const workoutArray = [ 
    {
        id: 'bein',
        muskel: 'BEIN',
        training: 'BEINPRESSE',
        text: 'Auf der Maschine sitzend werden die Beine auf die FuÃŸplatte aufgesetzt. Die FÃ¼ÃŸe sind dabei ungefÃ¤hr HÃ¼ftbreit auseinander, die Zehenspitzen schauen leicht zur Seite. Der Sitz wird mit Hilfe des gelben Hebels so eingestellt, dass der Winkel im Kniegelenk etwas kleiner als 90 Grad ist. Um die Position im Sitz zu fixieren kann man sich an den Griffen fixieren. Bei der DurchfÃ¼hrung wird nun Kraft auf den Fersenbereich des FuÃŸes aufgebaut und der Sitz nach hinten weggedrÃ¼ckt. Eine maximale Streckung des Kniegelenks ist dabei in jedem Fall zu vermeiden, die Beine werden also nicht komplett durchgedrÃ¼ckt!',
        pic: './img/bein.png'
    },

    {
        id: 'brust',
        muskel: 'BRUST',
        training: 'BRUSTPRESSE',
        text: 'Der Sitz wird so hoch eingestellt, dass die HÃ¤nde ungefÃ¤hr auf SchulterhÃ¶he sind. Der RÃ¼cken ist gerade an den Sitz gepresst. Um das Gewicht zu Beginn nach vorne zu bringen, kann die FuÃŸraste zur Hilfe genommen werden. Mit der Ausatmung wird nun das Gewicht nach vorn gedrÃ¼ckt. Der gesamte OberkÃ¶rper bleibt dabei still. Die Kraft kommt nur aus der Brust.',
        pic: './img/brust.png'
    },

    {
        id: 'ruecken',
        muskel: 'RÃœCKEN',
        training: 'RÃœCKENSTRECKER',
        text: 'Die FuÃŸauflage wird so eingestellt, dass das Polster im Oberschenklbereich abstÃ¼tzt. Die FÃ¼ÃŸe werden an der Ferse durch die FuÃŸpolster eingespannt. Der RÃ¼cken ist zunÃ¤chst durchgestreckt, die Arme vor der Brust verschrÃ¤nkt, der Blick ist nach vorn gerichtet. Bei der AusfÃ¼hrung wird der OberkÃ¶rper langsam abgesenkt bis im HÃ¼ftgelenk ein 90 Grad Winkel erreicht ist. Dann wird der OberkÃ¶rper wieder in die Streckung gebracht. Auf eine Bildung des Hohlkreuzes ist wÃ¤hrend der gesamten AusfÃ¼hrung zu achten.',
        pic: './img/ruecken.png'
    },

    {
        id: 'ruder',
        muskel: 'RÃœCKEN',
        training: 'RUDERZUGMASCHINE',
        text: 'Das Brustpolster wird so weit herausgezogen, dass beim Greifen der Griffe die Arme fast komplett durchgestreckt sind. Die Brust wird dabei gegen das Polster gedrÃ¼ckt. Die Beine sind dabei angewinkelt und die FÃ¼ÃŸe stehen fest auf dem Boden. Mit Druck der Brust auf das Polster werden die Griffe nah am KÃ¶rper nach hinten gefÃ¼hrt. Die Bewegung geht so weit nach hinten, dass die SchulterblÃ¤tter sich fast gegenseitig berÃ¼hren. Danach werden die Arme wieder nach vorne gefÃ¼hrt, ohne dass sie in die vollstÃ¤ndige Streckung kommen.',
        pic: './img/ruder.png'
    },

    {
        id: 'bauch',
        muskel: 'BAUCH',
        training: 'CRUNCHES AN DER BAUCHMUSKELBANK',
        text: 'Das Brustpolster wird so weit herausgezogen, dass beim Greifen der Griffe die Arme fast komplett durchgestreckt sind. Die Brust wird dabei gegen das Polster gedrÃ¼ckt. Die Beine sind dabei angewinkelt und die FÃ¼ÃŸe stehen fest auf dem Boden. Mit Druck der Brust auf das Polster werden die Griffe nah am KÃ¶rper nach hinten gefÃ¼hrt. Die Bewegung geht so weit nach hinten, dass die SchulterblÃ¤tter sich fast gegenseitig berÃ¼hren. Danach werden die Arme wieder nach vorne gefÃ¼hrt, ohne dass sie in die vollstÃ¤ndige Streckung kommen.',
        pic: './img/bauch.png'
    }

    ]

function Workouts() {
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [showWorkout, setShowWorkout] = useState(false);
  const workoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (showWorkout) {
      setTimeout(() => {
        if (workoutRef.current && containerRef.current) {
          workoutRef.current.style.display = 'flex';
          containerRef.current.style.display = 'none';
        }
      }, 600);
    }
  }, [showWorkout]);

  const openWorkout = (id) => {
    const workout = workoutArray.find(w => w.id === id);

    if (workout) {
      setCurrentWorkout(workout);
      setShowWorkout(true);

      const container = document.querySelector(`#${workout.id}.uebung`);
      if (container) {
        container.classList.add('expandieren');

        setTimeout(() => {
          container.classList.remove('expandieren');
        }, 1000);
      }
    }
  };

  const closeWorkout = () => {
    setShowWorkout(false);
    if (workoutRef.current && containerRef.current) {
      workoutRef.current.style.display = 'none';
      containerRef.current.style.display = 'flex';
    }
  };

  return (
    <>
      <header>
        <img src="../img/logo.svg" alt="Logo 5 Days to Fitness" />
      </header>

      <div id="container" ref={containerRef}>
        <div id="bein" className="uebung" onClick={() => openWorkout('bein')}>
          <p>BEIN</p>
        </div>
        <div id="brust" className="uebung" onClick={() => openWorkout('brust')}>
          <p>BRUST</p>
        </div>
        <div id="ruecken" className="uebung" onClick={() => openWorkout('ruecken')}>
          <p>RÜCKEN</p>
        </div>
        <div id="ruder" className="uebung" onClick={() => openWorkout('ruder')}>
          <p>RUDER</p>
        </div>
        <div id="bauch" className="uebung" onClick={() => openWorkout('bauch')}>
          <p>BAUCH</p>
        </div>
      </div>

      <div id="workout" ref={workoutRef} style={{ display: 'none' }}>
        <div className="workout-container">
          <h1 className="h1">{currentWorkout?.muskel}</h1>
          <h4 className="h4">{currentWorkout?.training}</h4>
          <p className="p">{currentWorkout?.text}</p>
        </div>

        <div className="back">
          <img src="../img/back.svg" onClick={closeWorkout} className="close-btn" alt="icon für Startseite" />
        </div>

        <div className="wallpaper-lila">
          <img src="../img/wallpaper-blue.svg" alt="Wallpaper Lila" />
        </div>

        <div className="circle">
          <img className="img" src={currentWorkout?.pic} alt="" />
          <img className="wallpaper-circle" src="../img/circle.svg" alt="Wallpaper Circle" />
        </div>
      </div>

      <div className="wallpaper">
        <img src="../img/wallpaper-blue.svg" alt="Wallpaper Blue" />
      </div>
    </>
  );
}

export default Workouts;
