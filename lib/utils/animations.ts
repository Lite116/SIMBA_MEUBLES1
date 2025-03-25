export const fadeUpAnimation = (delay: number = 0) => ({
  'data-aos': 'fade-up',
  'data-aos-duration': '1000',
  'data-aos-delay': delay.toString(),
});

export const zoomInAnimation = (delay: number = 0) => ({
  'data-aos': 'zoom-in',
  'data-aos-duration': '800',
  'data-aos-delay': delay.toString(),
});

export const fadeAnimation = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0) => ({
  'data-aos': `fade-${direction}`,
  'data-aos-duration': '1000',
  'data-aos-delay': delay.toString(),
});