'use client'

import { useEffect } from "react";
import CursorTrail from "./CursorTrail";

const Cursor = () => {
  useEffect(() => {
    const cursors = document.querySelectorAll('.cursor');
    const coords = { x: 0, y: 0 };
    let prevCoords = { x: 0, y: 0 };  // 이전 좌표 저장용

    window.addEventListener('mousemove', (e) => {
      // 갑작스러운 움직임 감지 및 완화
      const dx = Math.abs(e.clientX - prevCoords.x);
      const dy = Math.abs(e.clientY - prevCoords.y);
      
      if (dx > 100 || dy > 100) {
        // 갑작스러운 큰 움직임이 있을 때는 모든 커서의 위치를 현재 위치로 초기화
        cursors.forEach(cursor => {
          cursor.x = e.clientX;
          cursor.y = e.clientY;
        });
      }

      coords.x = e.clientX;
      coords.y = e.clientY;
      prevCoords = { x: e.clientX, y: e.clientY };
    });

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      cursors.forEach((cursor, index) => {
        // lerpFactor를 매우 작게 설정하여 부드러운 움직임 구현
        const lerpFactor = 0.6 + index * 0.02;
        
        if (!cursor.x) cursor.x = x;  // 초기값 설정
        if (!cursor.y) cursor.y = y;

        // 부드러운 보간 적용
        cursor.x += (x - cursor.x) * lerpFactor;
        cursor.y += (y - cursor.y) * lerpFactor;

        // 위치 업데이트시 소수점 반올림으로 미세한 떨림 방지
        cursor.style.left = `${(cursor.x - 12)}px`;
        cursor.style.top = `${(cursor.y - 12)}px`;

        x = cursor.x;
        y = cursor.y;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  const points = Array.from({ length: 30 }, (_, i) => ({
    opacity: 1 - (i * 0.02)
  }));

  return (
    <>
      {points.map((point, index) => (
        <CursorTrail key={index} index={index} opacity={point.opacity} />
      ))}
    </>
  );
};

export default Cursor;