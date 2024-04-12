import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("sienna");
  const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

  

    const recognition = new window.webkitSpeechRecognition();
    const SpeechRecognitionList = new window.webkitSpeechGrammarList();
    SpeechRecognitionList.addFromString(grammar,1);
    recognition.grammars = SpeechRecognitionList;
    recognition.lang = "en-US";
   

const OnStart = () => {
  recognition.start();
  console.log("OnStart Called:-");
  console.log("Ready to receive a color command.");

  recognition.onresult = (event) => {
    console.log(event);
    const color = event.results[0][0].transcript;
    //  diagnostic.textContent = `Result received: ${color}`;
    console.log(color);
    setcolor(color);
  
  };
};



     const OnStop = () => {

      recognition.stop();
      console.log("OnStop Called");
      setcolor("black");
     }
    
  



  return (
    <div className="basecolor  w-full min-h-screen  flex flex-col justify-center items-center gap-2">
      <p className='text-white'>
        AudioPalette is a minimalist web app that lets you change the background
        color of the webpage using your voice. Simply toggle the microphone on
        and off to start speaking color commands.
      </p>

      <div>
        <button
          className="border border-red-500 p-2 text-white rounded-xl "
          onClick={OnStart}
        >
          Start
        </button>
        <button
          className="border border-red-500 p-2 text-white rounded-xl "
          onClick={OnStop}
        >
          Stop
        </button>
      </div>
      <style>
        {`

          .basecolor{

          background-color:${color};
          }
          `}
      </style>
    </div>
  );
}

export default App
