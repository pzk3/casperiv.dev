import { Layout } from "components/layout";
import { NextSeo } from "next-seo";
import Image from "next/image";

import LaylaSitting from "../../../public/gallery/_A9A1725.jpg";
import LaylaWithAnotherDog from "../../../public/gallery/_A9A1780.jpg";
import TheyWantYouSilencedPoster from "../../../public/gallery/they_want_you_silenced_poster.jpeg";
import HomeRules from "../../../public/gallery/home_rules.jpeg";
import HertDK from "../../../public/gallery/hert_dk.jpg";
import SkyWithPlanes from "../../../public/gallery/sky_planes.jpeg";
import Cat01 from "../../../public/gallery/cat01.jpeg";
import Cat02 from "../../../public/gallery/cat02.jpeg";
import ChurchDK from "../../../public/gallery/church_dk.jpeg";
import ViewArdennes from "../../../public/gallery/view_ardennes.jpeg";
import FromPlane01 from "../../../public/gallery/from_plane01.jpeg";
import FromPlane02 from "../../../public/gallery/from_plane02.jpeg";
import ValandryView from "../../../public/gallery/view_valandry.jpeg";
import Rainbow from "../../../public/gallery/rainbow.jpeg";

const pageTitle = "Gallery - Casper Iversen";
const pageDescription = "";

// images

export default function Gallery() {
  return (
    <Layout>
      <NextSeo
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://caspertheghost.me/about"
        title={pageTitle}
        description={pageDescription}
      />

      <section id="about">
        <h1 className="section-title">Photography</h1>

        <p>
          In my spare time I also enjoy taking pictures of my pets, surroundings, lovely views and
          memories.
        </p>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          <Column>
            <ImageItem src={LaylaSitting} alt="Layla sitting on the beach." />

            <ImageItem
              src={TheyWantYouSilencedPoster}
              alt="They want you silenced. Resist, Speak out!!"
            />

            <ImageItem src={ViewArdennes} alt="Lovely view from the Ardennes." />

            <ImageItem src={FromPlane01} alt="Amazing view from a plane flying to Denmark." />
            <ImageItem src={Rainbow} alt="Beautiful rainbow." />
          </Column>

          <Column>
            <ImageItem src={LaylaWithAnotherDog} alt="Layla With another dog" />
            <ImageItem src={Cat02} alt="Picture of my cat." />
            <ImageItem
              src={HomeRules}
              alt="Home Rules. Say please & thank you. Try new things. Always be grateful. Keep your promises. Create memories. Hugs and kisses. Forgive & forget. Say I love you. Be yourself."
            />
            <ImageItem src={ChurchDK} alt="Church Denmark." />
            <ImageItem
              src={ValandryView}
              alt="Mountains in the background from a ski piste in Valandry, France."
            />
          </Column>

          <Column>
            <ImageItem src={Cat01} alt="Picture of my cat in a funny way." />
            <ImageItem src={HertDK} alt="Deer in the garden in a vacation house in Denmark." />
            <ImageItem src={SkyWithPlanes} alt="A lovely sunset with the coolest sky." />
            <ImageItem src={FromPlane02} alt="An amazing view from a plane flying over Germany." />
          </Column>
        </div>
      </section>
    </Layout>
  );
}

function Column(props: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{props.children}</div>;
}

function ImageItem(props: { alt: string; src: any }) {
  return (
    <div className="relative w-full h-fit overflow-hidden rounded-lg shadow-lg">
      <Image
        placeholder="blur"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        {...props}
      />
    </div>
  );
}
