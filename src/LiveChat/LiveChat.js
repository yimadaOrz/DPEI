import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    // <script src="//code.tidio.co/y1yixiikiqdtcofxmnhirtrkhsavjqrh.js" async></script>
    script.src = "//code.tidio.co/y1yixiikiqdtcofxmnhirtrkhsavjqrh.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default LiveChat;