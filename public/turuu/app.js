let Turuu = new TimelineLite();
let tween1 = new TimelineLite();
let controller = new ScrollMagic.Controller();
const ur = document.getElementsByClassName("ur");
const path = document.getElementsByTagName("path");

for (let i = 0; i < 22; i++) {
  if (ur[i].classList.contains("urS") || i == 0) {
    if (i == 0) {
      gsap.to(ur[i], {
        left:
          path[i].getBoundingClientRect().width / 2 +
          path[i].getBoundingClientRect().x,
        top: path[i].getBoundingClientRect().y,
        duration: 1000,
        scrollTrigger: {
          trigger: ".urBigContainer",
          start: "top 100%",
          end: "top",
          scrub: 4,
          toggleActions: "restart none none none",
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
          },
        },
      });
    } else {
      gsap.to(ur[i], {
        left:
          path[i].getBoundingClientRect().width / 4 +
          path[i].getBoundingClientRect().x,
        top:
          path[i].getBoundingClientRect().height / 4 +
          path[i].getBoundingClientRect().y,
        duration: 1000,
        scrollTrigger: {
          trigger: ".urBigContainer",
          start: "top 100%",
          end: "top",
          scrub: 4,
          toggleActions: "restart none none none",
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
          },
        },
      });
    }
  } else {
    gsap.to(ur[i], {
      left:
        path[i].getBoundingClientRect().width / 2 +
        path[i].getBoundingClientRect().x,
      top:
        path[i].getBoundingClientRect().height / 2 +
        path[i].getBoundingClientRect().y,
      duration: 1000,
      scrollTrigger: {
        trigger: ".urBigContainer",
        start: "top 100%",
        end: "top",
        scrub: 4,
        toggleActions: "restart none none none",
        markers: {
          startColor: "purple",
          endColor: "fuchsia",
        },
      },
    });
  }
  // console.log(path[i].getBoundingClientRect());
}
console.log(path[0].getBoundingClientRect());

//------------------q

const tree = document.getElementsByClassName("tree")[0];
const clouds = document.getElementById("clouds");
const gazar = document.getElementsByClassName("gazar")[0];
const line = document.querySelectorAll(".line");
const grass = document.getElementsByClassName("grass")[0];
const seed = document.getElementsByClassName("seed")[0];
const root = document.getElementsByClassName("root")[0];
for (let i = 0; i < line.length; i++) {
  line[i].style.opacity = "0";
}

function Myanga(MyangaRES) {
  if (MyangaRES.matches) {
    Turuu.fromTo(
      seed,
      5,
      {
        bottom: 25 + "vh",
        width: 10 + "%",
        rotation: -180,
        opacity: 1,
      },
      {
        bottom: 2 + "vh",
        width: 10 + "%",
        rotation: 260,
        opacity: 0,
      }
    )
      .fromTo(
        root,
        1,
        {
          opacity: 0,
          bottom: 5 + "vh",
          width: 2 + "%",
          height: 13 + "%",
        },
        {
          opacity: 1,
          bottom: 6 + "vh",
          width: 35 + "%",
          height: 30 + "%",
        },
        "-=3"
      )

      .fromTo(
        tree,
        3,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        tree,
        7,
        {
          width: 7 + "%",
          height: 30 + "%",
        },
        {
          width: 65 + "%",
          height: 55 + "%",
        },
        "-=3"
      )
      .fromTo(
        root,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "-=7"
      )
      .fromTo(
        ".mainRoot",
        3,
        {
          opacity: 0,
          width: 0,
          height: 0,
        },
        {
          opacity: 1,
          width: 55 + "%",
          height: 25 + "%",
        }
      )
      .from(
        line,
        7,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
      .from(
        grass,
        10,
        {
          bottom: 0 + "vh",
        },
        {
          bottom: 14 + "vh",
        }
      )

      .fromTo(
        gazar,
        7,
        {
          backgroundImage:
            "linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)",
        },
        {
          backgroundImage:
            "linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)",
        },
        "-=7"
      )
      .fromTo(
        ".grassfirst",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=7"
      )
      .fromTo(
        ".grass1one",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".grass1",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=6.5"
      )
      .fromTo(
        ".grass2two",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".grass2",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=6.5"
      )
      .fromTo(
        "#flower , #flower1 , #flower2 , #flower3",
        7,
        {
          width: 0,
          height: 0,
        },
        {
          width: 7 + "%",
          height: 6 + "%",
        },
        "-=5"
      )
      .fromTo(
        "#SmallTree , #smalltree-one",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 20 + "%",
          height: 15 + "%",
        },
        "-=2"
      )
      .fromTo(
        "#GrassTall ,#grasstall-one ,#grasstall-two",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 20 + "%",
          height: 12 + "%",
        },
        "-=1"
      )
      .fromTo(
        "#GrassMany , #grassmany-one , #grassmany-two , #grassmany-three, #grassmany-four",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 20 + "%",
          height: 7 + "%",
        }
      )
      .fromTo(
        "#FlowerGrass , #flowergrass-one , #flowergrass-two ,#flowergrass-three , #flowergrass-four",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 16 + "%",
          height: 10 + "%",
        },
        "+=1"
      );
  } else {
    Turuu.fromTo(
      seed,
      3,
      {
        bottom: 25 + "vh",
        rotation: -180,
        opacity: 1,
      },
      {
        bottom: 2 + "vh",
        rotation: 260,
        opacity: 0,
      }
    )
      .fromTo(
        root,
        1,
        {
          opacity: 0,
          bottom: 5 + "vh",
          width: 2 + "%",
          height: 13 + "%",
        },
        {
          opacity: 1,
          bottom: 6 + "vh",
          width: 15 + "%",
          height: 30 + "%",
        },
        "-=3"
      )

      .fromTo(
        tree,
        3,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        tree,
        7,
        {
          width: 7 + "%",
          height: 30 + "%",
        },
        {
          width: 30 + "%",
          height: 70 + "%",
        },
        "-=3"
      )
      .fromTo(
        root,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "-=7"
      )
      .fromTo(
        ".mainRoot",
        1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .from(
        line,
        7,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
      .from(
        grass,
        7,
        {
          bottom: 0 + "vh",
        },
        {
          bottom: 14 + "vh",
        }
      )

      .fromTo(
        gazar,
        7,
        {
          backgroundImage:
            "linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)",
        },
        {
          backgroundImage:
            "linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)",
        },
        "-=7"
      )
      .fromTo(
        ".grassfirst",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=7"
      )
      .fromTo(
        ".grass1one",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".grass1",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=6.5"
      )
      .fromTo(
        ".grass2two",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".grass2",
        7,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=6.5"
      )
      .fromTo(
        "#flower , #flower1 , #flower2 , #flower3",
        7,
        {
          width: 0,
          height: 0,
        },
        {
          width: 3 + "%",
          height: 6 + "%",
        },
        "-=5"
      )
      .fromTo(
        "#SmallTree , #smalltree-one",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 10 + "%",
          height: 20 + "%",
        },
        "-=2"
      )
      .fromTo(
        "#GrassTall ,#grasstall-one ,#grasstall-two",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 10 + "%",
          height: 17 + "%",
        },
        "-=1"
      )
      .fromTo(
        "#GrassMany , #grassmany-one , #grassmany-two , #grassmany-three, #grassmany-four",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 10 + "%",
          height: 12 + "%",
        }
      )
      .fromTo(
        "#FlowerGrass , #flowergrass-one , #flowergrass-two ,#flowergrass-three , #flowergrass-four",
        3,
        {
          width: 0,
          height: 0,
        },
        {
          width: 6 + "%",
          height: 15 + "%",
        },
        "+=1"
      );
  }
}
let MyangaRES = window.matchMedia("(max-width:1000px)");
Myanga(MyangaRES);
MyangaRES.addListener(Myanga);

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".urgahheseg",
  duration: 3000,
  triggerHook: 0,
})
  .setTween(Turuu)
  .setPin(".urgahheseg")
  .addTo(controller);
