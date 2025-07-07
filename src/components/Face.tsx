import React from "react";

interface FaceProps {
    pupilXOffset: number;
    pupilYOffset: number;
}

const Face: React.FC<FaceProps> = ({ pupilXOffset, pupilYOffset }) => {
    const eyeStyle: React.CSSProperties = {
        width: 40,
        height: 24,
        border: "3px solid black",
        borderRadius: "20px / 12px",
        backgroundColor: "white",
        position: "relative",
        boxShadow:
            "inset -3px -3px 0 0 rgb(0,0,0), inset 3px 3px 0 0 rgb(255,255,255)",
        marginLeft: 6,
    };

    return (
        <div className="mt-4 mx-auto flex flex-col items-center select-none">
            {/* Eyes */}
            <div className="flex justify-center">
                <div style={eyeStyle}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 12,
                            height: 12,
                            backgroundColor: "black",
                            borderRadius: "50%",
                            transform: `translate(calc(-50% + ${pupilXOffset}px), calc(-50% + ${pupilYOffset}px))`,
                            transition: "transform 0.1s ease-out",
                        }}
                    />
                </div>
                <div style={eyeStyle}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 12,
                            height: 12,
                            backgroundColor: "black",
                            borderRadius: "50%",
                            transform: `translate(calc(-50% + ${pupilXOffset}px), calc(-50% + ${pupilYOffset}px))`,
                            transition: "transform 0.1s ease-out",
                        }}
                    />
                </div>
            </div>

            {/* Nose */}
            <div
                style={{
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "10px solid black",
                    marginTop: 6,
                }}
            />

            {/* Mouth */}
            <div
                style={{
                    width: 24,
                    height: 6,
                    borderTop: "3px solid black",
                    borderRadius: "0 0 12px 12px",
                    marginTop: 6,
                }}
            />
        </div>
    );
};

export default Face;
