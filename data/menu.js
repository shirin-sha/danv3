export const menuData = [
  {
    label: "HOME",
    href: "/",

  
    // submenu: [
    //   {
    //     homeMenuItems: [
    //       {
    //         imageSrc: "/assets/img/header/home-1.jpg",
    //         title: "Home 01",
    //         buttons: [
    //           { label: "Multi Page", href: "/" },
    //           { label: "One Page", href: "/home-1-one-page" },
    //         ],
    //       },
    //       {
    //         imageSrc: "/assets/img/header/home-2.jpg",
    //         title: "Home 02",
    //         buttons: [
    //           { label: "Multi Page", href: "/home-2" },
    //           { label: "One Page", href: "/home-2-one-page" },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: "ABOUT US",
    href: "/about",
  },
  {
    label: "PRODUCTS",
    href: "/products",
   
  },
  {
    label: "SERVICES",
    href: "/service",
  
 
  },
  {
    label: "INFORMATION",
    href: "#",
    iconClass: "fa-regular fa-plus",
    submenu: [
      { label: "CLIENTS", href: "/clients" },
      { label: "CAREERS", href: "/careers" },
    ],
  },
  {
    label: "CONTACT US",
    href: "/contact",

  },
 
];

export const onepageLinks = [
  { href: "#about", text: "ABOUT US" },
  { href: "#services", text: "SERVICES" },
  { href: "#team", text: "TEAM" },
  { href: "#contact", text: "CONTACT" },
];

export const footerLinks = [
  // { name: "About Us", href: "#" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/service" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
];
