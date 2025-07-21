import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Streaming = () => {
  const { username } = useParams();
  const roomID = username;

  const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
  const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    Date.now().toString(),
    username
  );

  const myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role: ZegoUIKitPrebuilt.Host,
        }
      },
      sharedLinks: [
        {
          name: 'Share this link',
          url: `http://localhost:5173/stream/${roomID}`,
        },
      ],
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default Streaming;
