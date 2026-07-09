export const revealVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,       
      scale: 0.95  
    },
    visible: { 
      opacity: 1, 
      y: 0,        
      scale: 1,    
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 16,
        staggerChildren: 0.05
      } 
    },
  };

export const aboutViewport = { 
  once: true, 
  amount: 0.15, 
  margin: "0px 0px -200px 0px"
 };

export const toolkitViewport = { 
  once: true, 
  amount: 0.15, 
  margin: "0px 0px -200px 0px"
 };

export const projectsViewport = { 
  once: true, 
  amount: 0.15, 
  margin: "0px 0px -50px 0px"
 };

 export const buttonViewport = { 
  once: true, 
  amount: 0.15, 
  margin: "0px 0px -100px 0px"
 };

export const hoverButtonProps = {
  whileHover: { 
    scale: 1.02, 
    y: -3 
  },
  whileTap: { 
    scale: 0.97 
  },
  transition: { 
    type: "spring", 
    stiffness: 500, 
    damping: 15 
  }
};

export const hoverProjectCardProps = {
  whileHover: {  
    scale: 1.015,
  },
  transition: { 
    type: "spring", 
    stiffness: 180, 
    damping: 15 
  }
};

export const hoverSlideRightProps = {
  whileHover: { 
    x: 4 
  },
  transition: { 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  }
};

export const navSlideProps = {
  type: "spring",
  stiffness: 380,
  damping: 30
};