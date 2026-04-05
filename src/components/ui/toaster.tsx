"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  createToaster,
} from "@chakra-ui/react";

// 1. Define the toaster logic
export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

// 2. Define the Component without the 'toaster' prop
export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster />
    </Portal>
  );
};
