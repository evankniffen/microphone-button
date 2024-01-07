// SpeechToText.tsx
import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");

  const handleStartRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const speechRecognition = new SpeechRecognition();
      speechRecognition.lang = "en-US";
      speechRecognition.interimResults = false;
      speechRecognition.maxAlternatives = 1;

      speechRecognition.onstart = () => {
        setIsRecording(true);
      };

      speechRecognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
        setIsRecording(false);
      };

      speechRecognition.onerror = (event: Event) => {
        console.error("Speech recognition error", event);
        setIsRecording(false);
      };

      speechRecognition.onend = () => {
        setIsRecording(false);
      };

      speechRecognition.start();
    } else {
      console.error("Speech recognition not supported in this browser.");
    }
  };

  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        {isRecording ? "🔄" : "🎙️"}
      </button>
      <div>{text}</div>
    </div>
  );
};

export default SpeechToText;
