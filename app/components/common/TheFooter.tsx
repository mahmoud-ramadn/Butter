import Image from "next/image";

export default function TheFooter() {
  const FooterData = [
    {
      id: 1,
      mainTitle: "Site",
      links: [
        "Frontpage",
        "Desktop app",
        "Pricing",
        "About",
        "Contact",
        "Blog",
        "Community",
        "Careers",
        "Butter vs. Zoom",
      ],
    },
    {
      id: 2,
      mainTitle: "Company",
      links: [
        "About",
        "Contact",
        "Blog",
        "Community",
        "Careers",
        "Butter vs. Zoom",
      ],
    },
    {
      id: 3,
      mainTitle: "Resources",
      links: [
        "Help Center",
        "API",
        "Webinars",
        "Blog",
        "Case Studies",
        "Partners",
        "Changelog",
      ],
    },
  ];
  return (
    <div className=" bg-darkblue md:py-32  py-20">
      <div className="container px-4 mx-auto grid lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-10">
          <Image src="/logo.svg" alt="Butter logo" width={100} height={100} />
          <h3 className="text-gray-200">© Copyright Butter 2023</h3>
        </div>
        {FooterData.map((item) => (
          <div key={item.id}>
            <h3 className="text-gray-200 font-bold my-10">{item.mainTitle}</h3>
            <ul className="space-y-4">
              {item.links.map((link) => (
                <li
                  key={link}
                  className="text-gray-200 hover:text-white transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
