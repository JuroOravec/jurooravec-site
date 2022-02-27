import keyBy from 'lodash/keyBy';

const createUtterance = (): SpeechSynthesisUtterance => {
  if (!globalThis?.SpeechSynthesisUtterance) {
    return {} as SpeechSynthesisUtterance;
  }
  return new globalThis.SpeechSynthesisUtterance();
};

export const createSpeechSynth = () => {
  const utterance = createUtterance();

  const loadVoice = (): void => {
    // Good-sounding voices where localService === true & voice.lang.toLowerCase().startsWith('en')
    const preferredVoicesURIs = ['tessa', 'moira', 'samantha'];
    const availableVoices = keyBy(globalThis?.speechSynthesis?.getVoices(), (voice) =>
      voice.voiceURI.toLowerCase(),
    );
    // Find first matching voice, in order of preference
    const preferredVoice = preferredVoicesURIs.find(
      (voiceURI) => availableVoices[voiceURI],
    );

    utterance.voice = preferredVoice ? availableVoices[preferredVoice] : null;
  };

  const speak = (text: string) => {
    if (globalThis?.speechSynthesis?.speaking) return;
    utterance.text = text;
    globalThis?.speechSynthesis.speak(utterance);
  };

  return {
    utterance,
    speak,
    loadVoice,
  };
};
