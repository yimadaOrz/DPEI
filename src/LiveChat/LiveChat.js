import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
//<script src="//code.tidio.co/bsd0wkn8r0mykdpoxpsppldqd0lkz6rj.js" async></script>
    script.src = "//code.tidio.co/bsd0wkn8r0mykdpoxpsppldqd0lkz6rj.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default LiveChat;