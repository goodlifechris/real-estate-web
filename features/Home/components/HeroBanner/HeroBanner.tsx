import React, { useEffect, useRef } from 'react';
import { Box, Fade, Text } from '@chakra-ui/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
gsap.registerPlugin(TextPlugin); // Register the TextPlugin for typing effects

const HeroBanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Video autoplay logic

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }

    // GSAP typing effect for heading
    gsap.to(headingRef.current, {
      text: {
        value: "Welcome to Talani Development Group",
      },
      duration: 3,
      ease: "power1.inOut",
      delay: 0.5,
      onComplete: () => {
        // Start subheading typing effect after heading completes
        gsap.to(subheadingRef.current, {
          text: {
            value: "Future Living Starts Here: Join Us in Building Your Dream Apartment!",
          },
          duration: 3,
          ease: "power1.inOut",
        });
      },
    });

    // Fade-in effect for description after typing animations
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power4.out", delay: 6 }
    );
  }, []);

  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: '100vh', sm: '100vh' }}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        overflow="hidden"
      >
        {/* Video background */}
        <video
          ref={videoRef}
          width="100%"
          height={"800vh"}
          autoPlay 
          loop 
          muted
          style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        >
          <source 
            src="https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/videos/6259516_House%20Neighborhood%20Town%20Village_By_M-ART_Production_Artlist_HD.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.5"
          backgroundColor="purple.900"
        />

        {/* Content */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          maxWidth="1280px"
          position="absolute"
          color="white"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
        >
      
          {/* Heading with typing effect */}
          <Text
            ref={headingRef}
            fontSize={{ base: '40px', sm: '100px' }}
            fontWeight="bold"
            lineHeight="shorter"
            textAlign="left"
            color="white"
            marginBottom="1rem"
          >
            {/* Text will be dynamically typed here */}
          </Text>

          {/* Subheading with typing effect */}
          <Text
            ref={subheadingRef}
            fontSize={{ base: 'lg', sm: '2xl' }}
            fontWeight="bold"
            textAlign="left"
            background="linear-gradient(90deg, #f7971e, #ffd200)"
            backgroundClip="text"
            color="transparent"
            marginBottom="1.5rem"
          >
            {/* Text will be dynamically typed here */}
          </Text>

          {/* Real Estate Description */}
          <Text
            ref={descriptionRef}
            fontSize={{ base: 'md', sm: 'lg' }}
            textAlign="left"
            color="whiteAlpha.800"
            maxWidth="800px"
            lineHeight="taller"
          >
            Discover premium living spaces designed with modern amenities, sustainable architecture, and vibrant communities. At Talani Development Group, we offer state-of-the-art apartments, townhouses, and real estate properties built for your future. Whether you’re looking for luxury, affordability, or eco-friendly homes, we’ve got you covered!
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
