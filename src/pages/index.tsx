import React from 'react';
import 'normalize.css';
import './index.css';

const links = [
  {
    label: 'github',
    url: 'https://github.com/gabts'
  },
  {
    label: 'npm',
    url: 'https://www.npmjs.com/~gabbe'
  },
  {
    label: 'twitter',
    url: 'https://twitter.com/g4bbe'
  },
  {
    label: 'last.fm',
    url: 'https://www.last.fm/user/spunklemeow'
  },
  {
    label: 'steam',
    url: 'https://steamcommunity.com/id/g4bbe/'
  },
  {
    label: 'visual studio marketplace',
    url: 'https://marketplace.visualstudio.com/publishers/gabrieltollstalbom'
  }
];

export default () => (
  <div className="container">
    <main className="main">
      <h1 className="title">Gabriel Toll Stålbom</h1>
      <ul className="list">
        {links.map(({ url, label }) => (
          <li>
            <a className="link" href={url}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  </div>
);
