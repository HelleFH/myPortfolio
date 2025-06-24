import React from "react";
import "./DesignEmbeds.scss";
import EmbedCard from "../EmbedCard/EmbedCard";
import Images from "../../../../assets/images";
import AnimatedSection from "../../../../components/AnimatedSection";

const embeds = [
  {
    id: 1,
    type: "image",
    title: "Canva Project: Landing Pages",
    src: Images.LandingPagesScreen,
    link: "https://landing-pages-sentispec.my.canva.site/landing-pages-website/",
  },
  {
    id: 2,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNPSR6_8/X4YFcHvhGZF_1u9Nar6qiw/watch?embed",
    link: "https://www.canva.com/design/DAGoNPSR6_8/X4YFcHvhGZF_1u9Nar6qiw/watch",
  },
  {
    id: 3,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNanNO00/tyg_YnhUIp1aneQrBSzHZg/watch?embed",
    link: "https://www.canva.com/design/DAGoNanNO00/tyg_YnhUIp1aneQrBSzHZg/watch",
  },
  {
    id: 4,
    type: "video",
    title: "Canva Video",
    src: "https://www.canva.com/design/DAGoNp-uMc8/ix6Y0ZM14GGSpp1J0RKS7g/watch?embed",
    link: "https://www.canva.com/design/DAGoNp-uMc8/ix6Y0ZM14GGSpp1J0RKS7g/watch",
  },
  {
    id: 5,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/cZ7KGRLO5RHa1AKRYuvcGA/Spil-Site-Ny-Skabelon--Copy-?node-id=0-1&embed-host=share",
    link: "https://www.figma.com/design/cZ7KGRLO5RHa1AKRYuvcGA/Spil-Site-Ny-Skabelon--Copy-?node-id=0-1",
  },
  {
    id: 5,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/ymCGyHi3cFRa2J3KdYMULM/Film-Site---Parasite?embed-host=share",
    link: "https://embed.figma.com/design/ymCGyHi3cFRa2J3KdYMULM/Film-Site---Parasite",
  },
  {
    id: 6,
    type: "figma",
    title: "Figma Site Design",
    src: "https://embed.figma.com/design/I7wrHW1TWKoeWlB4goPSvU/Burgos-Burger-Joint?node-id=0-1&embed-host=share",
    link: "https://embed.figma.com/design/I7wrHW1TWKoeWlB4goPSvU/Burgos-Burger-Joint?node-id=0-1",
  }
];

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="" allowfullscreen></iframe>

const DesignEmbeds = () => {
  return (
    <div className="design-embeds__container">

      <div className="design-embeds__intro">
        <h2>Design Examples</h2>
        <p>I've worked on a range of creative projects and built several sites and apps from scratch, and I'm confident using Canva, Figma, Photoshop and other tools.
          Here are some examples of my visual work</p>
      </div>
      <AnimatedSection>      <div className="design-embeds">
        {embeds.map((embed) => (
          <EmbedCard
            key={embed.id}
            type={embed.type}
            title={embed.title}
            src={embed.src}
            link={embed.link}
          />
        ))}
      </div>
      </AnimatedSection>

    </div>
  );
};

export default DesignEmbeds;
