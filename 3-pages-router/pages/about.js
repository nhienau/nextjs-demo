import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>About - Fake Store</title>
      </Head>
      <div className="grid grid-cols-5 gap-8 items-center">
        <div className="col-span-3">
          <h1 className="font-semibold text-3xl mb-6">
            Welcome to The Fake Store
          </h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            dolorem sit! Recusandae quis voluptate quidem sed. A ratione culpa,
            officia, temporibus quod voluptate exercitationem deleniti
            aspernatur rerum nihil maxime quia mollitia. Perferendis nam
            deleniti ratione doloremque ad adipisci sequi animi voluptates amet
            alias. Maiores, praesentium amet officiis eius expedita ipsum,
            quibusdam officia ullam minus eligendi neque ab molestias minima
            fugit nam itaque libero ratione culpa iure nihil nostrum dolores
            perspiciatis! Adipisci sit debitis illo veniam.
          </p>
        </div>
        <div className="col-span-2">
          <Image src={image1} alt="T-shirt" placeholder="blur" quality={80} />
        </div>

        <div className="relative aspect-square col-span-2">
          <Image
            src="/about-2.jpg"
            fill
            alt="Men in T-shirt"
            className="object-cover"
          />
        </div>
        <div className="col-span-3">
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat veritatis, veniam voluptates illum soluta sequi sed id sit
            hic omnis quis reiciendis quam explicabo minima odit sint. Beatae
            itaque sed eos esse. Quo laboriosam assumenda neque consequuntur
            minima iure iusto sunt, vitae officiis molestiae deserunt
            repellendus corrupti aliquid hic ex similique! Consequatur, magni
            dolore vitae assumenda cumque delectus a omnis tempora explicabo
            nostrum ex!
          </p>
        </div>
      </div>
    </>
  );
}
