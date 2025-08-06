import React, { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  delay: number;
}

interface Connection {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  angle: number;
  delay: number;
}

const NeuralBackground: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const generateNodes = () => {
      const nodeCount = 25;
      const newNodes: Node[] = [];
      
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6,
        });
      }
      
      setNodes(newNodes);
      
      // Generate connections between nearby nodes
      const newConnections: Connection[] = [];
      let connectionId = 0;
      
      for (let i = 0; i < newNodes.length; i++) {
        for (let j = i + 1; j < newNodes.length; j++) {
          const node1 = newNodes[i];
          const node2 = newNodes[j];
          
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect nodes that are close enough
          if (distance < 30) {
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            
            newConnections.push({
              id: connectionId++,
              x1: node1.x,
              y1: node1.y,
              x2: node2.x,
              y2: node2.y,
              length: distance,
              angle,
              delay: Math.random() * 4,
            });
          }
        }
      }
      
      setConnections(newConnections);
    };

    generateNodes();
  }, []);

  return (
    <div className="neural-bg">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20"></div>
      
      {/* Neural connections */}
      {connections.map((connection) => (
        <div
          key={connection.id}
          className="neural-connection"
          style={{
            left: `${connection.x1}%`,
            top: `${connection.y1}%`,
            width: `${connection.length}%`,
            transform: `rotate(${connection.angle}deg)`,
            transformOrigin: '0 50%',
            animationDelay: `${connection.delay}s`,
          }}
        />
      ))}
      
      {/* Neural nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="neural-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralBackground;