import React, { useState, useEffect, useRef } from 'react';
import logo from '../img/logo.svg';
import back from '../img/back.svg';
import wallpaperBlue from '../img/wallpaper-blue.svg';
import circle from '../img/circle.svg';

const workoutArray = [ 
    {
        id: 'bein',
        muskel: 'BEIN',
        training: 'BEINPRESSE',
        text: 'Auf der Maschine sitzend werden die Beine auf die Fußplatte aufgesetzt. Die Füße sind dabei ungefähr hüftbreit auseinander, die Zehenspitzen schauen leicht zur Seite. Der Sitz wird mit Hilfe des gelben Hebels so eingestellt, dass der Winkel im Kniegelenk etwas kleiner als 90 Grad ist. Um die Position im Sitz zu fixieren kann man sich an den Griffen fixieren. Bei der Durchführung wird nun Kraft auf den Fersenbereich des Fußes aufgebaut und der Sitz nach hinten weggedrückt. Eine maximale Streckung des Kniegelenks ist dabei in jedem Fall zu vermeiden, die Beine werden also nicht komplett durchgedrückt!',
        pic: require('../img/bein.png')
    },
    {
        id: 'brust',
        muskel: 'BRUST',
        training: 'BRUSTPRESSE',
        text: 'Der Sitz wird so hoch eingestellt, dass die Hände ungefähr auf Schulterhöhe sind. Der Rücken ist gerade an den Sitz gepresst. Um das Gewicht zu Beginn nach vorne zu bringen, kann die Fußraste zur Hilfe genommen werden. Mit der Ausatmung wird nun das Gewicht nach vorn gedrückt. Der gesamte Oberkörper bleibt dabei still. Die Kraft kommt nur aus der Brust.',
        pic: require('../img/brust.png')
    },
    {
        id: 'ruecken',
        muskel: 'RÜCKEN',
        training: 'RÜCKENSTRECKER',
        text: 'Die Fußauflage wird so eingestellt, dass das Polster im Oberschenkelbereich abstützt. Die Füße werden an der Ferse durch die Fußpolster eingespannt. Der Rücken ist zunächst durchgestreckt, die Arme vor der Brust verschränkt, der Blick ist nach vorn gerichtet. Bei der Ausführung wird der Oberkörper langsam abgesenkt bis im Hüftgelenk ein 90 Grad Winkel erreicht ist. Dann wird der Oberkörper wieder in die Streckung gebracht. Auf eine Bildung des Hohlkreuzes ist während der gesamten Ausführung zu achten.',
        pic: require('../img/ruecken.png')
    },
    {
        id: 'ruder',
        muskel: 'RÜCKEN',
        training: 'RUDERZUGMASCHINE',
        text: 'Das Brustpolster wird so weit herausgezogen, dass beim Greifen der Griffe die Arme fast komplett durchgestreckt sind. Die Brust wird dabei gegen das Polster gedrückt. Die Beine sind dabei angewinkelt und die Füße stehen fest auf dem Boden. Mit Druck der Brust auf das Polster werden die Griffe nah am Körper nach hinten geführt. Die Bewegung geht so weit nach hinten, dass die Schulterblätter sich fast gegenseitig berühren. Danach werden die Arme wieder nach vorne geführt, ohne dass sie in die vollständige Streckung kommen.',
        pic: require('../img/ruder.png')
    },
    {
        id: 'bauch',
        muskel: 'BAUCH',
        training: 'CRUNCHES AN DER BAUCHMUSKELBANK',
        text: 'Das Brustpolster wird so weit herausgezogen, dass beim Greifen der Griffe die Arme fast komplett durchgestreckt sind. Die Brust wird dabei gegen das Polster gedrückt. Die Beine sind dabei angewinkelt und die Füße stehen fest auf dem Boden. Mit Druck der Brust auf das Polster werden die Griffe nah am Körper nach hinten geführt. Die Bewegung geht so weit nach hinten, dass die Schulterblätter sich fast gegenseitig berühren. Danach werden die Arme wieder nach vorne geführt, ohne dass sie in die vollständige Streckung kommen.',
        pic: require('../img/bauch.png')
    }
];

function Workouts() {
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [showWorkout, setShowWorkout] = useState(false);
  const workoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (showWorkout) {
      setTimeout(() => {
        if (workoutRef.current && containerRef.current) {
          document.getElementById('theme-color-meta').setAttribute('content', '#604FA1');
        }
      }, 700);
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
    document.getElementById('theme-color-meta').setAttribute('content', '#A4AED8');
    setShowWorkout(false);
    if (workoutRef.current && containerRef.current) {
      workoutRef.current.style.display = 'none';
      containerRef.current.style.display = 'block';
    }
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo 5 Days to Fitness" />
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
          <img src={back} onClick={closeWorkout} className="close-btn" alt="icon für Startseite" />
        </div>

        <div className="wallpaper-lila">
          <img src={wallpaperBlue} alt="Wallpaper Lila" />
        </div>

        <div className="circle">
          <img className="img" src={currentWorkout?.pic} alt="" />
          <img className="wallpaper-circle" src={circle} alt="Wallpaper Circle" />
        </div>
      </div>

      <div className="wallpaper">
        <img src={wallpaperBlue} alt="Wallpaper Blue" />
      </div>
    </>
  );
}

export default Workouts;
