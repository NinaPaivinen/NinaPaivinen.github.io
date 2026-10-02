
// src/components/Home/Home.jsx

import { Link } from 'react-router-dom';
import './CSS/Home.css';
import reactLogo from '../../assets/react2.svg';

const techNodes = [
  { className: 'node-react', icon: '⚛', label: 'React' },
  { className: 'node-node', icon: '⬢', label: 'Node.js' },
  { className: 'node-linux', icon: '🐧', label: 'Linux' },
  { className: 'node-network', icon: '⌁', label: 'Networking' },
  { className: 'node-kubernetes', icon: '⎈', label: 'Kubernetes' },
];

function Home() {
  return (
    <div className="welcome-page">
      <section className="welcome-hero">
        <div className="welcome-grid" />
          <img
    src={reactLogo}
    alt=""
    className="floating-react"
  />

        <div className="welcome-glow welcome-glow-one" />
        <div className="welcome-glow welcome-glow-two" />

        <div className="welcome-content">

          <p className="welcome-eyebrow">
            CODERINNA · ICT ENGINEER
          </p>

          <h1>
            Build.
            <span>Break.</span>
            Rebuild.
          </h1>

          <p className="welcome-description">
     Intohimoa jo kauvan ennen tekoälyä.
          </p>

          <div className="welcome-actions">
<a
  href="https://github.com/coderinna"
  target="_blank"
  rel="noreferrer"
  className="welcome-button welcome-button-primary"
>
🚀 Explore projects
</a>

          </div>
        </div>

        <div className="system-visual">
          <div className="system-orbit orbit-large" />
          <div className="system-orbit orbit-medium" />
          <div className="system-orbit orbit-small" />

<div className="connection connection-react" />
<div className="connection connection-node" />
<div className="connection connection-linux" />
<div className="connection connection-network" />
<div className="connection connection-kubernetes" />

          <div className="iris-core">
            <span className="iris-flower">✦</span>
            <strong>ICT</strong>
            <small>0000</small>
          </div>

          {techNodes.map((node) => (
            <div
              key={node.label}
              className={`tech-node ${node.className}`}
            >
              <span className="tech-icon">
                {node.icon}
              </span>

              <span>{node.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="welcome-terminal-section">
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span />
              <span />
              <span />
            </div>

            <span>coderinna@portfolio</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">$</span>{' '}
              whoami
            </p>

            <p className="terminal-output">
              software developer
            </p>

            <p>
              <span className="terminal-prompt">$</span>{' '}
              cat interests.txt
            </p>

            <p className="terminal-output">
              networking<br />
              distributed systems<br />
              cryptography<br />
              backend architecture<br />
              protocols
            </p>

            <p>
              <span className="terminal-prompt">$</span>{' '}
              ./build-something
              <span className="terminal-cursor">_</span>
            </p>
          </div>
        </div>
      </section>

      <section className="welcome-quote">
        <div className="quote-line" />

        <p>
          &ldquo;The interesting part is usually
          <span> underneath.&rdquo;</span>
        </p>

        <div className="quote-line" />
      </section>

    </div>
  );
}

export default Home;