import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from "popmotion";

const Slider = ({ animeData }) => {

    const [[page, direction], setPage] = useState([0, 0]);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 500 : -500,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 500 : -500,
                opacity: 0
            };
        }
    };


    const imageIndex = wrap(0, animeData.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    console.log(animeData)
    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="home-cover"
                    key={page}
                    src={animeData[imageIndex].attributes.coverImage.large}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <i onClick={(e) => paginate(-1)} class="fas fa-chevron-left"></i>
            <i onClick={(e) => paginate(1)} class="fas fa-chevron-right"></i>
        </>
    )
}

export default Slider;