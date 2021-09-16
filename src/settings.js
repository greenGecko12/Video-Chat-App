import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "eb9610c88c6c4df189c12bb43a002c59";

const token =
  "006eb9610c88c6c4df189c12bb43a002c59IADpljEWyL3kemPra4WipN0DdUfZrwiR3QRkwi/TIatHI2TNKL8AAAAAEACI9+Rew5BEYQEAAQDDkERh";

export const config = { mode: "rtc", codec: "vp8", appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
