"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const RunningText = () => {
  const items = [
    "Bukit Merah Family Store is open! Visit Us from Monday-Saturday 9am - 6pm.",
    "Permanent Closure of the i12 Katong Salvation Army Donation Booth from 22nd Jan 2024. Click here to view more details.",
  ];
  return (
    <div className="w-full bg-black flex-row pt-[14] pb-[16]">
      <Marquee autoFill={true}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex pr-[16] gap-[16] text-white items-center"
          >
            <p>•</p>
            <p className="text-nowrap">{item}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const Header = () => {
  return (
    <div className="py-[16] bg-white sticky top-0 z-50 px-[36]">
      <div className="flex h-[48]">
        <div className="flex gap-[5] absolute">
          <Image src="/re-nue.png" alt="re-nue" width={224} height={0} />
          <div>
            <Image
              src="/salvation-army.svg"
              alt="salvation-army"
              width={20}
              height={0}
            />
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-[3%] text-base text-black font-semibold">
          <Menu>
            <MenuButton className="hover:text-[#989898]">
              Thrift with us
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="bg-white px-[24] py-[24] shadow-sm z-100 top-10 rounded-[8] flex flex-col gap-[16]"
            >
              <MenuItem>
                <a className="block data-[focus]:text-[#FF0000]" href="/stores">
                  Our stores
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:text-[#FF0000]" href="/online">
                  Re:Nue online
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block data-[focus]:text-[#FF0000]"
                  href="/community"
                >
                  Re:Nue community
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Menu>
            <MenuButton className="hover:text-[#989898]">Donate</MenuButton>
            <MenuItems
              anchor="bottom"
              className="bg-white px-[24] py-[24] shadow-sm z-100 top-10 rounded-[8] flex flex-col gap-[16]"
            >
              <MenuItem>
                <a
                  className="block data-[focus]:text-[#FF9494]#FF0000"
                  href="/stores"
                >
                  Give small items
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:text-[#FF9494]" href="/online">
                  Give bulky items
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block data-[focus]:text-[#FF9494]"
                  href="/community"
                >
                  Accepted items
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Menu>
            <MenuButton className="hover:text-[#989898]">Impact</MenuButton>
          </Menu>
          <Menu>
            <MenuButton className="hover:text-[#989898]">
              Get Involved
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="bg-white px-[24] py-[24] shadow-sm z-100 top-10 rounded-[8] flex flex-col gap-[16]"
            >
              <MenuItem>
                <a className="block data-[focus]:text-[#FF9494]" href="/stores">
                  Volunteer
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:text-[#FF9494]" href="/online">
                  Re:Nue partners
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block data-[focus]:text-[#FF9494]"
                  href="/community"
                >
                  Join as staff
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Menu>
            <MenuButton className="hover:text-[#989898]">About Us</MenuButton>
          </Menu>
          <Menu>
            <MenuButton className="hover:text-[#989898]">Contact</MenuButton>
          </Menu>
        </div>
      </div>
    </div>
  );
};

const CarouselMasthead = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        noSwiping={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="aspect-16/9 w-full flex justify-center items-center bg-cover bg-center bg-[url('/masthead-1.jpeg')] rounded-3xl">
            <div className="flex flex-col items-center gap-[16]">
              <div className="flex gap-[5]">
                <Image
                  src="/re-nue.svg"
                  alt="re-nue"
                  width={224}
                  height={0}
                  className="invert"
                />
                <Image
                  src="/salvation-army.svg"
                  alt="salvation-army"
                  width={30}
                  height={0}
                />
              </div>

              <h1 className="text-white text-5xl font-semibold">
                Give. Thrift. Uplift.
              </h1>

              <button className="px-[24] py-[16] bg-[white] rounded-full">
                <p className="font-semibold text-base text-black">
                  Donate your items
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-16/9 w-full flex justify-center items-center bg-cover bg-center bg-[url('/masthead-2.jpeg')] rounded-3xl">
            <div className="flex flex-col items-center gap-[16]">
              <div className="flex gap-[5]">
                <h1 className="text-5xl text-white font-semibold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>

              <h1 className="text-white text-base font-semibold w-[55%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                suscipit eros ac faucibus eleifend. Integer sagittis ornare dui
                non maximus. Fusce quis rhoncus est. Vestibulum enim tortor,
                aliquam sit amet augue ac, molestie semper dui.
              </h1>

              <button className="px-[24] py-[16] bg-[white] rounded-full">
                <p className="font-semibold text-base text-black">
                  Start thrifting
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const RunningNumbers = () => {
  return (
    <div className="w-full flex justify-evenly">
      <div className="flex flex-col items-center gap-[16]">
        <Image src={"/Storefront.svg"} alt="storefront" width={60} height={0} />
        <p className="text-2xl font-semibold">Stores</p>
        <p className="text-5xl font-semibold">
          <CountUp end={4} />
        </p>
      </div>

      <div className="flex flex-col items-center gap-[16]">
        <Image src={"/Basket.svg"} alt="storefront" width={60} height={0} />
        <p className="text-2xl font-semibold">Donation booths</p>
        <p className="text-5xl font-semibold">
          <CountUp end={15} />
        </p>
      </div>

      <div className="flex flex-col items-center gap-[16]">
        <Image src={"/Partners.svg"} alt="storefront" width={60} height={0} />
        <p className="text-2xl font-semibold">Partners</p>
        <p className="text-5xl font-semibold">
          <CountUp end={9} />
        </p>
      </div>

      <div className="flex flex-col items-center gap-[16]">
        <Image src={"/Community.svg"} alt="storefront" width={60} height={0} />
        <p className="text-2xl font-semibold">Community</p>
        <p className="text-5xl font-semibold">
          <CountUp suffix={"+"} end={10000} />
        </p>
      </div>
    </div>
  );
};

const ParallaxSection = () => {
  const items = [
    {
      title: "Store",
      desc: "Creating a fun and interesting thrifting experience, targeted at current customers and reaching out to younger, new generations who are interested in thrifting and repurposing.",
      image: "store-parallax.jpeg",
    },
    {
      title: "Community",
      desc: "Our community comprises our volunteers, donors and store loyalty program members. Re:Nue strives to create purpose and engage with our community in a more personal and interactive way to encourage them to give, shop and feel part of doing good.",
      image: "community-parallax.png",
    },
    {
      title: "Partners",
      desc: "Our partners include corporations, shopping centres, condominiums and their respective management teams, schools and town councils. This program emphasizes their social responsibility (ESG programs), empowering good corporate citizenship for sustainability and environmental care and helping them become part of the overall circular economy.",
      image: "partners-parallax.png",
    },
    {
      title: "Lives",
      desc: "Re:Nue supports the social welfare programs of the broader Salvation Army. As an organisation, we are committed to living by our values, caring for our community and impacting lives in a meaningful way.",
      image: "lives-parallax.jpeg",
    },
  ];

  return (
    <div className="py-[171] px-[36] bg-[#21409C] flex flex-col gap-[350]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center">
          <div className="flex-1 flex flex-col gap-[24]">
            <Parallax opacity={[2, 0]} speed={8}>
              <p className="text-[#98C7F8] font-semibold text-xl">
                Re:Nue pillars
              </p>
              <h2 className="text-white font-semibold text-6xl">
                {item.title}
              </h2>
              <p className="text-white font-normal pr-[20%]">{item.desc}</p>
              <div>
                <button className="px-[24] py-[16] bg-[white] rounded-full">
                  <p className="font-semibold text-base text-black">
                    Donate your items
                  </p>
                </button>
              </div>
            </Parallax>
          </div>
          <div className="relative flex-1 aspect-1/1">
            <Image
              src={`/${item.image}`}
              alt="parallax"
              fill={true}
              className="rounded-[10]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const OurValues = () => {
  const items = [
    {
      title: "Purposeful",
      desc: "We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.",
      icon: "Purposeful.svg",
    },
    {
      title: "Passionate",
      desc: "We are dedicated to serving and fostering meaningful connections with consumers, donors, partners and the community.",
      icon: "Passionate.svg",
    },
    {
      title: "Caring",
      desc: "We care – about our consumers, employees, partners; about the broader community; and about the environment.",
      icon: "Caring.svg",
    },
    {
      title: "Authentic",
      desc: "We stay true to our values, actions and personality, while embodying honesty and transparency with a touch of fun. We strive to build genuine connections with each individual, so that everyone feels valued.",
      icon: "Authentic.svg",
    },
    {
      title: "Inclusive",
      desc: "We cater to diverse tastes, preferences and budgets while delivering goods at excellent quality. At the intersection of accessibility and individuality, there’s something for everyone in our wide collection of items.",
      icon: "TShirt.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-[24] items-center">
      {items.map((item) => (
        <Accordion
          key={item.title}
          sx={{
            "&:before": { height: "0px" },
            backgroundColor: "#F8F8F8",
            boxShadow: "none",
            borderRadius: 6,
            width: "80%",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          elevation={0}
          square={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex gap-[12] items-center">
              <Image
                src={`/${item.icon}`}
                alt={item.title.toLocaleLowerCase()}
                width={40}
                height={0}
              />
              <h2 className="font-semibold text-[32px]">{item.title}</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <p>{item.desc}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <Image
        src={"/footer-shape.svg"}
        alt="*"
        height={0}
        width={0}
        className="w-full h-auto bg-[#F8CA11]"
      />
      <div className="w-full bg-black flex flex-row p-[40]">
        <div className="flex flex-col gap-[24]">
          <div className="flex gap-[5]">
            <Image
              src="/re-nue.svg"
              alt="re-nue"
              width={200}
              height={0}
              className="invert"
            />
            <div>
              <Image
                src="/salvation-army.svg"
                alt="salvation-army"
                width={20}
                height={0}
              />
            </div>
          </div>
          <p className="text-sm max-w-[320] text-white">
            Re:Nue, a social enterprise under The Salvation Army, is passionate
            about sustainability and community impact since 1996. By
            re-purposing and reselling your generous donations, we generate
            funds to support vital programs for the community, including
            children, youth, the elderly, migrant workers, and ex-offenders.
          </p>

          <div className="flex gap-[16]">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/FacebookLogo.svg"
                alt="facebook icon"
                width={32}
                height={32}
              />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/InstagramLogo.svg"
                alt="facebook icon"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
        <div className="text-white flex flex-1 justify-end gap-[40]">
          <div>
            <h3 className="text-2xl">Company</h3>
            <div className="flex flex-col gap-[12] mt-[24]">
              <a href="">FAQs</a>
              <a href="">About us</a>
              <a href="">The Salvation Army</a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Join us</h3>
            <div className="flex flex-col gap-[12] mt-[24]">
              <a href="">Volunteer</a>
              <a href="">Corporate partnerships</a>
              <a href="">Join as staff</a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Contact</h3>
            <div className="flex flex-col gap-[12] mt-[24]">
              <div className="flex items-center gap-[12]">
                <Image
                  aria-hidden
                  src="/EnvelopeSimple.svg"
                  alt="envelope icon"
                  width={24}
                  height={24}
                />
                <a>customercare@smm.salvationarmy.org</a>
              </div>
              <div className="flex items-center gap-[12]">
                <Image
                  aria-hidden
                  src="/Phone.svg"
                  alt="phone icon"
                  width={24}
                  height={24}
                />
                <a>+65 6288 5438</a>
              </div>
              <div className="flex items-start gap-[12]">
                <Image
                  aria-hidden
                  src="/MapPinLine-24.svg"
                  alt="pin icon"
                  width={24}
                  height={24}
                />
                <a className="max-w-[290]">
                  356 Tanglin Road, Singapore 247674 Operation Hours: 8:30 am -
                  5:30 pm (Mon-Sat)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#3D3D3D] flex flex-row justify-between text-white text-xs px-[40] py-[16]">
        <div className="flex gap-[40]">
          <a>Privacy policy</a>
          <p>|</p>
          <a>Terms & conditions</a>
        </div>
        <p>© 2025 Re:Nue. All rights reserved</p>
      </div>
    </div>
  );
};

export default function Homepage() {
  return (
    <div>
      <RunningText />
      <Header />
      <div className="px-[36]">
        <CarouselMasthead />

        <div className="py-[80] gap-[40] flex flex-col items-center">
          <RunningNumbers />

          <p className="w-[50%] text-xl font-medium text-center">
            As the social enterprise arm of The Salvation Army, Re:Nue aims to
            deliver excellent donation-in-kind service that meets underserved
            needs within our community.
          </p>

          <button className="px-[24] py-[16] bg-black rounded-full">
            <p className="font-semibold text-base text-white">About Re:Nue</p>
          </button>
        </div>
      </div>
      <ParallaxSection />

      <div className="py-[80] px-[36] flex flex-col justify-center">
        <div className="flex flex-col items-center gap-[16] mb-[40]">
          <h2 className="font-semibold text-5xl">Our values</h2>
          <p className="font-normal">
            Guiding principles behind everything we do
          </p>
        </div>

        <OurValues />
      </div>

      <div className="bg-black flex-1 flex">
        <div className="bg-center bg-[url('/faq.png')] opacity-50 w-full h-[243]"></div>
        <div className="absolute w-full h-[243] flex flex-col justify-center items-center gap-[24]">
          <h2 className="text-[white] text-5xl font-semibold">
            Questions on your mind?
          </h2>
          <button className="px-[24] py-[16] bg-[white] rounded-full">
            <p className="font-semibold text-base text-black">See our FAQs</p>
          </button>
        </div>
      </div>

      <div className="bg-[#F8CA11] py-[80] px-[10%] flex flex-row justify-center items-center gap-[60]">
        <div className="relative overflow-hidden h-full w-full aspect-square flex-1">
          <Image
            src={"/contact-us.jpeg"}
            alt={"contact-us"}
            fill={true}
            className="rounded-[10] scale-x-[-1] object-cover"
          />
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-[24]">
            <h2 className="text-[40px] font-semibold">
              Be part of the community
            </h2>
            <p>
              Join the{" "}
              <a href="/community" className="underline">
                Re:Nue community
              </a>{" "}
              and unlock a world of exclusive perks and discounts when you shop
              with us!
            </p>
            <div className="flex flex-col gap-[8]">
              <label htmlFor="name">Full name</label>
              <input
                name="name"
                placeholder="Enter your name"
                className="bg-[white] w-full rounded-full px-[16] pt-[10] pb-[8]"
              ></input>
            </div>

            <div className="flex flex-col gap-[8]">
              <label htmlFor="name">Phone number</label>
              <div className="flex items-center bg-[white] rounded-full w-full gap-[8]">
                <select
                  className="bg-[white] text-black font-medium outline-none rounded-full px-[12] py-[9]"
                  value={"+62"}
                >
                  <option value="+62">+65</option>
                  <option value="+65">+65</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>

                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="border-l border-l-[#BDBDBD] bg-transparent flex-1 outline-none text-gray-700 px-[16]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8]">
              <label htmlFor="email">
                Email (optional) <label>ⓘ</label>
              </label>
              <input
                name="email"
                placeholder="Enter your email"
                className="bg-[white] w-full rounded-full px-[16] pt-[10] pb-[8]"
              ></input>
            </div>

            <div className="flex items-start gap-[8]">
              <input type="checkbox" width={20} height={20} />
              <p className="text-xs">
                By registering through this membership application form, you
                agree that The Salvation Army Red Shield Industries Singapore
                may collect, use and disclose your personal data, as provided in
                this application form, for the{" "}
                <a className="underline" href="/purposes">
                  following purposes
                </a>{" "}
                in accordance with the Personal Data Protection Act 2012.
              </p>
            </div>

            <button className="bg-black rounded-full w-full py-[12] text-white font-semibold">
              Join now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
