"use client";

import { useEffect } from 'react';
import Router from 'next/router';
import ReactGA from 'react-ga';

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('G-47TPV214R6');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
