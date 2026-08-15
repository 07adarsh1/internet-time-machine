import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_ORDER, ERAS_DATA } from '../../data/erasData';

export const HardwareRigCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { continuousIndex, isBooting, bootEra } = useTimeMachine();
  const continuousIndexRef = useRef(continuousIndex);
  const isBootingRef = useRef(isBooting);

  useEffect(() => {
    continuousIndexRef.current = continuousIndex;
  }, [continuousIndex]);

  useEffect(() => {
    isBootingRef.current = isBooting;
  }, [isBooting]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0c0e);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.2);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x90b0ff, 1.2);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // --- Studio Pedestal Desk ---
    const deskGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.2, 64);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x16161a,
      roughness: 0.8,
      metalness: 0.1,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = -1.1;
    desk.receiveShadow = true;
    scene.add(desk);

    // --- Dynamic Screen Offscreen Canvas ---
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 384;
    const screenCtx = screenCanvas.getContext('2d')!;
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;
    screenTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const drawScreenContent = (t: number) => {
      const w = screenCanvas.width;
      const h = screenCanvas.height;

      // Era colors and snapshots
      if (t < 0.8) {
        // 1995: Grey Netscape raw HTML
        screenCtx.fillStyle = '#c0c0c0';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#000080';
        screenCtx.fillRect(10, 10, w - 20, 30);
        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 16px serif';
        screenCtx.fillText('Netscape Navigator - [Welcome to Web 1995]', 20, 32);

        screenCtx.fillStyle = '#0000ff';
        screenCtx.font = 'bold 24px serif';
        screenCtx.fillText('The World Wide Web Project', 30, 80);
        screenCtx.fillStyle = '#000000';
        screenCtx.font = '14px serif';
        screenCtx.fillText('• Raw HTML 2.0 tables & hyperlinks', 30, 115);
        screenCtx.fillText('• Dial-up 28.8k baud rate connected', 30, 140);
        screenCtx.fillText('• Hit Counter: [ 0042891 ]', 30, 170);

        // Scanlines
        screenCtx.fillStyle = 'rgba(0,0,0,0.15)';
        for (let y = 0; y < h; y += 4) {
          screenCtx.fillRect(0, y, w, 2);
        }
      } else if (t < 1.8) {
        // 2000: Dot-com & Flash
        screenCtx.fillStyle = '#000033';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#ff007f';
        screenCtx.font = 'bold 28px sans-serif';
        screenCtx.fillText('⚡ FLASH 4.0 PORTAL ⚡', 40, 70);
        screenCtx.fillStyle = '#ffff00';
        screenCtx.font = '16px monospace';
        screenCtx.fillText('>>> PETS.COM IPO SOARS! <<<', 40, 110);
        screenCtx.fillText('ICQ Status: Online (Winamp Playing)', 40, 140);
        screenCtx.fillStyle = '#00ffff';
        screenCtx.fillText('[ Enter Animated Cyber-Zone ]', 40, 180);
      } else if (t < 2.8) {
        // 2005: Web 2.0 MSN / MySpace
        screenCtx.fillStyle = '#e3f2fd';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#0288d1';
        screenCtx.fillRect(0, 0, w, 40);
        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 18px Tahoma, sans-serif';
        screenCtx.fillText('MSN Messenger 7.5 & MySpace Music', 20, 26);
        screenCtx.fillStyle = '#0d47a1';
        screenCtx.font = 'bold 15px Tahoma, sans-serif';
        screenCtx.fillText('xX_Sk8erBoi_Xx: brb mom needs phone line!', 25, 80);
        screenCtx.fillStyle = '#d32f2f';
        screenCtx.fillText('💥 Nudge received at 4:16 PM', 25, 115);
      } else if (t < 3.8) {
        // 2010: Skeuomorphic iOS 4
        screenCtx.fillStyle = '#2c3e50';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#3b5998';
        screenCtx.fillRect(20, 20, w - 40, 50);
        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 18px Helvetica, sans-serif';
        screenCtx.fillText('Facebook for iOS • Retina Display', 35, 52);
        screenCtx.fillStyle = '#ecf0f1';
        screenCtx.font = '14px Helvetica, sans-serif';
        screenCtx.fillText('Checked in at Apple Campus (Cupertino, CA)', 35, 105);
        screenCtx.fillText('👍 Like (42) • Slide to Unlock ➔', 35, 140);
      } else if (t < 4.8) {
        // 2015: Flat Material & Vine
        screenCtx.fillStyle = '#f5f5f5';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#009688';
        screenCtx.fillRect(0, 0, w, 50);
        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 20px Roboto, sans-serif';
        screenCtx.fillText('Material Feed & 6s Vine Loops', 25, 33);
        screenCtx.fillStyle = '#00b488';
        screenCtx.fillRect(30, 75, w - 60, 90);
        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 16px Roboto, sans-serif';
        screenCtx.fillText('🍇 Do it for the Vine! (6.0s Looping)', 45, 125);
      } else if (t < 5.5) {
        // 2020: Dark Bento & Discord
        screenCtx.fillStyle = '#0d1117';
        screenCtx.fillRect(0, 0, w, h);
        screenCtx.fillStyle = '#161b22';
        screenCtx.fillRect(20, 20, w - 40, 60);
        screenCtx.fillStyle = '#5865F2';
        screenCtx.font = 'bold 18px Inter, sans-serif';
        screenCtx.fillText('Discord Server • #study-lounge', 35, 55);
        screenCtx.fillStyle = '#8b949e';
        screenCtx.font = '14px Inter, sans-serif';
        screenCtx.fillText('🎧 Lo-Fi Beats Stream • 48k Listening', 35, 115);
        screenCtx.fillText('Zoom Standup: "You are on mute!"', 35, 145);
      } else {
        // 2026: Spatial AI
        screenCtx.fillStyle = '#050508';
        screenCtx.fillRect(0, 0, w, h);
        const grad = screenCtx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, '#8b5cf6');
        grad.addColorStop(1, '#3b82f6');
        screenCtx.fillStyle = grad;
        screenCtx.font = 'bold 22px system-ui, sans-serif';
        screenCtx.fillText('✨ Ambient Neural Canvas 2026', 30, 60);
        screenCtx.fillStyle = '#a1a1aa';
        screenCtx.font = '14px system-ui, sans-serif';
        screenCtx.fillText('Copilot Agent: Synthesizing Dynamic UI Viewport', 30, 100);
        screenCtx.fillText('Spatial Synapse: 0.2ms Direct Latency', 30, 130);
      }

      screenTexture.needsUpdate = true;
    };

    // --- Main Hardware Rig 3D Meshes ---
    const rigGroup = new THREE.Group();
    scene.add(rigGroup);

    // 1. Chassis Body (Depth and Shape Morphs)
    const chassisGeo = new THREE.BoxGeometry(1.8, 1.4, 1.0);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0xd8d2c4,
      roughness: 0.8,
      metalness: 0.05,
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    chassisMesh.castShadow = true;
    chassisMesh.receiveShadow = true;
    rigGroup.add(chassisMesh);

    // 2. Bezel Frame Face
    const bezelGeo = new THREE.BoxGeometry(1.82, 1.42, 0.1);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xc8c2b4,
      roughness: 0.85,
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.z = 0.46;
    rigGroup.add(bezelMesh);

    // 3. Screen Display Plane
    const screenGeo = new THREE.PlaneGeometry(1.42, 1.06);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.52;
    rigGroup.add(screenMesh);

    // 4. Stand / Swivel Pedestal
    const standGeo = new THREE.CylinderGeometry(0.3, 0.45, 0.25, 32);
    const standMat = new THREE.MeshStandardMaterial({
      color: 0x908c82,
      roughness: 0.7,
    });
    const standMesh = new THREE.Mesh(standGeo, standMat);
    standMesh.position.y = -0.82;
    standMesh.castShadow = true;
    rigGroup.add(standMesh);

    // 5. Hardware Details: Power Button & Floppy Slot
    const buttonGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.05, 16);
    const buttonMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const powerButton = new THREE.Mesh(buttonGeo, buttonMat);
    powerButton.rotation.x = Math.PI / 2;
    powerButton.position.set(0.65, -0.58, 0.52);
    rigGroup.add(powerButton);

    const floppySlotGeo = new THREE.BoxGeometry(0.35, 0.03, 0.04);
    const floppySlotMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const floppySlot = new THREE.Mesh(floppySlotGeo, floppySlotMat);
    floppySlot.position.set(-0.45, -0.58, 0.52);
    rigGroup.add(floppySlot);

    // --- Secondary Physical Media Props ---
    const propGroup = new THREE.Group();
    propGroup.position.set(1.4, -0.9, 0.4);
    scene.add(propGroup);

    // Floppy Mesh (1995)
    const floppyGeo = new THREE.BoxGeometry(0.6, 0.6, 0.04);
    const floppyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a24, roughness: 0.5 });
    const floppyMesh = new THREE.Mesh(floppyGeo, floppyMat);
    floppyMesh.rotation.x = -Math.PI / 2;
    floppyMesh.rotation.z = 0.2;
    floppyMesh.castShadow = true;
    propGroup.add(floppyMesh);

    // CD Jewel Case (2000)
    const cdGeo = new THREE.BoxGeometry(0.65, 0.65, 0.05);
    const cdMat = new THREE.MeshStandardMaterial({
      color: 0x0088cc,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const cdMesh = new THREE.Mesh(cdGeo, cdMat);
    cdMesh.rotation.x = -Math.PI / 2;
    cdMesh.rotation.z = -0.3;
    cdMesh.position.y = 0.02;
    cdMesh.visible = false;
    propGroup.add(cdMesh);

    // Micro-SIM / Modern Puck (2010+)
    const puckGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.03, 32);
    const puckMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.9, roughness: 0.2 });
    const puckMesh = new THREE.Mesh(puckGeo, puckMat);
    puckMesh.position.y = 0.02;
    puckMesh.visible = false;
    propGroup.add(puckMesh);

    // --- Mouse Parallax Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- Resize Observer ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    let currentT = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth interpolation of continuous scrub index
      const targetT = continuousIndexRef.current;
      currentT += (targetT - currentT) * 0.08;

      // 1. Morph Chassis Depth & Scale
      const depthFactor = THREE.MathUtils.lerp(0.85, 0.03, currentT / 6);
      chassisMesh.scale.set(1.0, 1.0, depthFactor);
      chassisMesh.position.z = (depthFactor - 1.0) * 0.4;
      bezelMesh.position.z = chassisMesh.position.z + 0.5 * depthFactor + 0.04;
      screenMesh.position.z = bezelMesh.position.z + 0.055;

      // Stand scale
      const standScale = THREE.MathUtils.lerp(1.0, 0.25, currentT / 6);
      standMesh.scale.set(standScale, standScale, standScale);
      standMesh.position.y = -0.7 - (1 - standScale) * 0.15;

      // Details visibility: scale down button/slot in modern eras
      const detailScale = THREE.MathUtils.clamp(1.0 - currentT / 2.5, 0.001, 1.0);
      powerButton.scale.set(detailScale, detailScale, detailScale);
      floppySlot.scale.set(detailScale, detailScale, detailScale);
      powerButton.position.z = screenMesh.position.z + 0.01;
      floppySlot.position.z = screenMesh.position.z + 0.01;

      // 2. Morph Materials
      if (currentT < 1.5) {
        // 1995-2000: Beige to Bondi
        const factor = currentT / 1.5;
        chassisMat.color.setRGB(
          THREE.MathUtils.lerp(0.85, 0.0, factor),
          THREE.MathUtils.lerp(0.82, 0.5, factor),
          THREE.MathUtils.lerp(0.77, 0.6, factor)
        );
        chassisMat.roughness = THREE.MathUtils.lerp(0.85, 0.3, factor);
        bezelMat.color.copy(chassisMat.color);
      } else if (currentT < 3.5) {
        // 2005-2010: Bondi to Brushed Aluminum
        const factor = (currentT - 1.5) / 2.0;
        chassisMat.color.setRGB(
          THREE.MathUtils.lerp(0.0, 0.88, factor),
          THREE.MathUtils.lerp(0.5, 0.88, factor),
          THREE.MathUtils.lerp(0.6, 0.88, factor)
        );
        chassisMat.metalness = THREE.MathUtils.lerp(0.1, 0.85, factor);
        chassisMat.roughness = THREE.MathUtils.lerp(0.3, 0.25, factor);
        bezelMat.color.copy(chassisMat.color);
      } else {
        // 2015-2026: Aluminum to Obsidian Glass
        const factor = (currentT - 3.5) / 2.5;
        chassisMat.color.setRGB(
          THREE.MathUtils.lerp(0.88, 0.05, factor),
          THREE.MathUtils.lerp(0.88, 0.05, factor),
          THREE.MathUtils.lerp(0.88, 0.07, factor)
        );
        chassisMat.metalness = THREE.MathUtils.lerp(0.85, 0.95, factor);
        chassisMat.roughness = THREE.MathUtils.lerp(0.25, 0.05, factor);
        bezelMat.color.copy(chassisMat.color);
      }

      // 3. Morph Secondary Props
      floppyMesh.visible = currentT < 1.5;
      cdMesh.visible = currentT >= 1.5 && currentT < 3.5;
      puckMesh.visible = currentT >= 3.5;

      // 4. Update Screen Content
      drawScreenContent(currentT);

      // 5. Parallax Mouse Tilt
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.3;
      rigGroup.rotation.y += (targetRotationY - rigGroup.rotation.y) * 0.06;
      rigGroup.rotation.x += (targetRotationX - rigGroup.rotation.x) * 0.06;

      // 6. Boot Camera Dive Animation
      if (isBootingRef.current) {
        camera.position.z += (1.4 - camera.position.z) * 0.08;
        camera.position.y += (0.05 - camera.position.y) * 0.08;
      } else {
        camera.position.z += (4.2 - camera.position.z) * 0.05;
        camera.position.y += (0.4 - camera.position.y) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[58vh] md:h-[65vh] cursor-grab active:cursor-grabbing"
      onClick={() => {
        // Clicking rig triggers boot
        if (!isBooting) bootEra();
      }}
      title="Click device or 'Turn On' to boot this internet era"
    />
  );
};