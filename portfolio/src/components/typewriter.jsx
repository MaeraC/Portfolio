import TypewriterEffect from 'react-typewriter-effect'

function Typewriter() {
    return (
        <TypewriterEffect 
            textStyle={{
                fontSize: '40px',
                color: '#FFB4A2',
                fontWeight: 'normal'
            }}
            changeDelay={60}
            pauseFor={600}
            multiText={[
                "Développeuse Front-End",
                "JAVASCRIPT - REACT",
                "Développeuse Front-End, Intégratrice web"
            ]}
            typeSpeed={70}

        />
    )
}

export default Typewriter