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
      setcolor(color);
     }
    
  



  return (
    <div className="basecolor  w-full min-h-screen  flex flex-col justify-center items-center gap-2 font-noto">
      <p className="text-white p-3 text-center">
        AudioPalette is a web-app that lets you change the background
        color of the webpage using your voice. Simply Click the microphone on
        and off to start speaking color commands.
      </p>
      <div className="space-x-2 flex justify-center items-center text-black">
        <button
          className="border-2 border-black p-1.5  rounded-xl flex justify-center items-center "
          onClick={OnStart}
        >
          <span className="material-symbols-outlined ">mic</span>
        </button>
        <button
          className="border-2 border-black p-1.5 rounded-xl flex justify-center items-center "
          onClick={OnStop}
        >
          <span class="material-symbols-outlined">mic_off</span>
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
