particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#f5f100"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#f5f100"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#f5f100",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 20,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        eventd: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function() {
    var scrollTopButton = this.document.querySelector('.scroll-Top');
    if(this.window.pageYOffset > 200){
        scrollTopButton.computedStyleMap.display = 'block';
    }else{
        scrollTopButton.style.display = 'none';
    }
});