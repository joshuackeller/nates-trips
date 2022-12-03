import Image from "next/image";

const AboutNatePage = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center place-items-center p-12">
      <div>
        <Image
          src="https://project3-531-dev.s3.amazonaws.com/ashton.jpeg"
          height={300}
          width={400}
          alt="Nate Chandler"
        />
      </div>
      <div className="flex-1 p-5">
        <div className="text-3xl font-bold text-center ">About Nate</div>
        <div>
          Ko e tau Emu, &apos;a ia na&apos;e toe &apos;iloa pe ko e tau lahi
          Emu, ko ha ngaue fakakautau &apos;oku fai &apos;i &apos;Aositelelia
          &apos;i he konga kimui &apos;o e 1932 ke lea ki he hoha&apos;a &apos;a
          e kakai &apos;i he tokolahi &apos;o e emus na&apos;a nau pehe
          &apos;oku lele amok mo faka&apos;auha &apos;a e ngoue &apos;i he
          vahefonua &apos;Apitanga &apos;i he Wheatbelt &apos;o
          &apos;Aositelelia Hihifo. Na&apos;e faka&apos;aonga&apos;i &apos;e he
          ngaahi feinga ta&apos;e-ola lelei ke a&apos;u ki he kakai &apos;o e
          fanga ki&apos;i manupuna ko e emus, ko ha fu&apos;u manupuna lahi
          na&apos;e &apos;ikai lava &apos;o puna ki &apos;Aositelelia, &apos;a e
          kau sotia &apos;Aositelelia Faka&apos;ei&apos;eiki kuo fakamahafu
          &apos;aki &apos;a e ngaahi me&apos;afana &apos;a Luisi—&apos;o taki ai
          &apos;a e mitia ke ohi mai &apos;a e hingoa ko e{" "}
          <q>Tau &apos;a &apos;Emu</q> &apos;i he taimi na&apos;e &apos;uhinga
          ai ki he me&apos;a na&apos;e hoko. Neongo na&apos;e mate ha
          ni&apos;ihi &apos;o e fanga manupuná, ka na&apos;e vilitaki pē &apos;a
          e kakai &apos;emuí &apos;o hokohoko atu hono faka&apos;auha &apos;o e
          ngoué.
        </div>
      </div>
    </div>
  );
};

export default AboutNatePage;
