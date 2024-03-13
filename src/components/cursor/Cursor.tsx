import MouseTrail from "@pjsalita/react-mouse-trail";

const Cursor = () => {
    const config = {
        color: "#000000",
        idleAnimation: true,
        idleAnimationCount: 10,
        inverted: true,
        size: 15,
        trailCount: 50,
    };

    return <MouseTrail {...config} />;
};

export default Cursor;
