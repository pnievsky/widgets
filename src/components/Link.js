import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    /*changing url without reloading a webpage*/
    window.history.pushState({}, '', href);
    /*event for changing url*/
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a
    onClick={onClick}
    className={className}
    href={href}>
    {children}
    </a>
  );
};

export default Link;
