/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Access Framer Motion from the global window object (loaded via UMD)
  const { motion } = window.framerMotion;

  // Square Pattern Animation
  motion(
    "#square-pattern",
    {
      initial: { opacity: 0.15, scale: 1, rotateX: 10, rotateY: 10 },
      animate: {
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.05, 1],
        rotateX: [10, -10, 10],
        rotateY: [10, -10, 10],
        transition: {
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        },
      },
    },
    { parent: document.body }
  );

  // Glow Effect Animation
  motion(
    "#glow-effect",
    {
      initial: {
        opacity: 0.5,
        scale: 1,
        x: "-50%",
        y: "-50%",
        rotateX: 20,
        rotateY: 20,
      },
      animate: {
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.2, 1],
        x: ["-50%", "-48%", "-50%"],
        y: ["-50%", "-52%", "-50%"],
        rotateX: [20, -20, 20],
        rotateY: [20, -20, 20],
        transition: {
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        },
      },
    },
    { parent: document.body }
  );

  // Blob Container Animation
  const blobContainer = document.getElementById("blob-container");

  // Define multiple blob configurations
  const blobs = [
    {
      size: 200,
      initialX: "20%",
      initialY: "30%",
      pathVariants: [
        "M100,30 C140,30 170,70 170,100 C170,130 140,170 100,170 C60,170 30,130 30,100 C30,70 60,30 100,30 Z",
        "M100,40 C150,40 180,80 180,100 C180,120 150,160 100,160 C50,160 20,120 20,100 C20,80 50,40 100,40 Z",
      ],
      duration: 10,
    },
    {
      size: 150,
      initialX: "70%",
      initialY: "60%",
      pathVariants: [
        "M75,20 C105,20 130,50 130,75 C130,100 105,130 75,130 C45,130 20,100 20,75 C20,50 45,20 75,20 Z",
        "M75,25 C110,25 135,55 135,75 C135,95 110,120 75,120 C40,120 15,95 15,75 C15,55 40,25 75,25 Z",
      ],
      duration: 12,
    },
    {
      size: 250,
      initialX: "50%",
      initialY: "80%",
      pathVariants: [
        "M125,40 C175,40 210,80 210,125 C210,170 175,210 125,210 C75,210 40,170 40,125 C40,80 75,40 125,40 Z",
        "M125,50 C180,50 220,90 220,125 C220,160 180,200 125,200 C70,200 30,160 30,125 C30,90 70,50 125,50 Z",
      ],
      duration: 14,
    },
  ];

  // Create and animate each blob
  blobs.forEach((blob, index) => {
    // Create SVG element
    const blobSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    blobSvg.setAttribute("width", blob.size);
    blobSvg.setAttribute("height", blob.size);
    blobSvg.setAttribute("viewBox", `0 0 ${blob.size} ${blob.size}`);
    blobSvg.classList.add("blob-svg");
    blobSvg.style.left = blob.initialX;
    blobSvg.style.top = blob.initialY;

    // Create blob path
    const blobPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    blobPath.setAttribute("fill", "#0CC0DF");
    blobPath.setAttribute("stroke", "#0CC0DF");
    blobPath.setAttribute("stroke-width", "4");
    blobSvg.appendChild(blobPath);
    blobContainer.appendChild(blobSvg);

    // Animate the blob
    motion(
      blobSvg,
      {
        initial: {
          x: blob.initialX,
          y: blob.initialY,
          scale: 0.8,
          rotateX: 30,
          rotateY: 30,
        },
        animate: {
          x: [
            blob.initialX,
            `calc(${blob.initialX} + ${Math.random() * 200 - 100}px)`,
            blob.initialX,
          ],
          y: [
            blob.initialY,
            `calc(${blob.initialY} + ${Math.random() * 200 - 100}px)`,
            blob.initialY,
          ],
          scale: [0.8, 1, 0.8],
          rotateX: [30, -30, 30],
          rotateY: [30, -30, 30],
          transition: {
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
            delay: index * 0.5, // Stagger animations
          },
        },
      },
      { parent: blobContainer }
    );

    // Animate the blob path (morphing)
    motion(
      blobPath,
      {
        initial: { scale: 0.8 },
        animate: {
          d: blob.pathVariants,
          transition: {
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
            delay: index * 0.5,
          },
        },
      },
      { parent: blobSvg }
    );
  });
});
