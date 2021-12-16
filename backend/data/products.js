const products = [
  {
    product_type: "SkateBoard",
    brand: "Toy Machine",
    name: "Cat Monster Complete",
    description:
      "Take a ride and start rollin right with the Toy Machine Cat Monster Complete 8.25 x 31.88. This is a high quality complete that's perfect for beginning skateboarders, smaller riders, or yougnsters looking to start skateboarding. Features a top quality Toy Machine 7-ply maple deck, Rukus trucks, Toy Machine 52mm wheels and shielded Toy Machine abec 5 bearings. Fully assembled and ready to ride right out of the box.",
    price: 99,
    images: {
      drag: "https://i.imgur.com/4jwWKS6.png",
      main: "https://i.imgur.com/KxxCUF7.png",
      thumbnail: "https://i.imgur.com/KxxCUF7.png",
      closeUp: "https://i.imgur.com/UNqoruT.png",
      side: "https://i.imgur.com/bndKHjZ.png",
      wheel: "https://i.imgur.com/aJBCo33.png",
    },
    details: [
      {
        label: "Width",
        value: '8.25"',
      },
      {
        label: "Length",
        value: '31.88"',
      },
      {
        label: "Wheels",
        value: "Toy Machine 52mm",
      },
      {
        label: "Wheelbase",
        value: '14"',
      },
      {
        label: "Deck",
        value: "Toy Machine 7-ply maple deck",
      },
      {
        label: "Trucks",
        value: "Rukus",
      },
      {
        label: "Bearings",
        value: "Shielded Pig abec 5",
      },
    ],
  },
  {
    product_type: "Deck",
    brand: "Flip",
    name: "Flip Oliveria Blacklight Deck",
    description:
      "See what's in the dark when skating the Flip Oliveira Blacklight Deck 8.13 x 31.5. This is a pro quality skateboard deck constructed from traditional 7-ply maple wood with background stains that could be different than what is pictured.",
    price: 65,
    images: {
      drag: "https://i.imgur.com/kX0OihV.png",
      main: "https://i.imgur.com/unE2lkS.png",
      thumbnail: "https://i.imgur.com/unE2lkS.png",
      front: "https://i.imgur.com/beoaNFu.png",
      side: "https://i.imgur.com/fnjbD9F.png",
    },
    details: [
      {
        label: "Width",
        value: '8.13"',
      },
      {
        label: "Length",
        value: '31.5"',
      },
      {
        label: "Wheelbase",
        value: '14.25"',
      },
      {
        label: "Construction",
        value: "Traditional 7-ply",
      },
      {
        label: "PRO MODEL",
        value: "Luan Oliveira",
      },
    ],
  },
  {
    product_type: "Deck",
    brand: "Flip",
    name: "Flip Gonzalez Blacklight Deck",
    description:
      "See what's in the dark when skating the Flip Gonzalez Blacklight Deck 8.0 x 32.38. This is a pro quality skateboard deck constructed from traditional 7-ply maple wood with background stains that could be different than what is pictured.",
    price: 65,
    images: {
      drag: "https://i.imgur.com/XlW6jTx.png",
      main: "https://i.imgur.com/1rg3Glz.png",
      thumbnail: "https://i.imgur.com/1rg3Glz.png",
      front: "https://i.imgur.com/qvhl9bR.png",
      side: "https://i.imgur.com/1shgkUQ.png",
    },
    details: [
      {
        label: "Width",
        value: '8.0"',
      },
      {
        label: "Length",
        value: '32.38"',
      },
      {
        label: "Wheelbase",
        value: '14"',
      },
      {
        label: "Construction",
        value: "Traditional 7-ply",
      },
      {
        label: "PRO MODEL",
        value: "David Gonzalez",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Darkstar",
    name: "Darkstar Forty Wheels",
    description:
      "100% solid, smooth, and fast! Tear through the streets and start rolling with the Darkstar Forty Wheels. These are a classic street style wheel shape perfect for ripping through the streets or cruising through the skatepark. Not only do these wheels pack a great bang for your buck, they also come standard with a 30 day guarantee against flatspots. Wheels sold in sets of FOUR.",
    price: 23.95,
    images: {
      main: "https://i.imgur.com/aFJ3av5.png",
      thumbnail: "https://i.imgur.com/aFJ3av5.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Durable",
        value: "30 day guarantee against flatspots",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine FOS Arms Wheels",
    description:
      "Start rolling and go skate with the Toy Machine FOS Arms Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/ZW6EfjG.png",
      thumbnail: "https://i.imgur.com/mbS2AaV.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine FOS Arms Wheels",
    description:
      "Start rolling and go skate with the Toy Machine FOS Arms Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/VqTsqg5.png",
      thumbnail: "https://i.imgur.com/ZnSyY2S.png",
    },
    details: [
      {
        label: "Size",
        value: "54mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine Sect Skater Wheels",
    description:
      "Start rolling and go skate with the Toy Machine Sect Skater Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/rgzdFs3.png",
      thumbnail: "https://i.imgur.com/HnjJr7A.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine Sect Skater Wheels",
    description:
      "Start rolling and go skate with the Toy Machine Sect Skater Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/nrM0vXY.png",
      thumbnail: "https://i.imgur.com/DlTi1V6.png",
    },
    details: [
      {
        label: "Size",
        value: "54mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine All Seeing Wheels",
    description:
      "Start rolling and go skate with the Toy Machine All Seeing Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/coiUjEK.png",
      thumbnail: "https://i.imgur.com/iHjkg3J.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Toy Machine",
    name: "Toy Machine All Seeing Wheels",
    description:
      "Start rolling and go skate with the Toy Machine All Seeing Wheels. Guaranteed high-speed and durability, these pro-quality wheels keep you rolling no matter where you go. Manufactured for speed and control with a classic rounded street shape for all-terrain and technical performance. Wheels sold in sets of FOUR.",
    price: 30,
    images: {
      main: "https://i.imgur.com/udqpQGE.png",
      thumbnail: "https://i.imgur.com/K5CsOFx.png",
    },
    details: [
      {
        label: "Size",
        value: "53mm",
      },
      {
        label: "Wheel shape",
        value: "Classic street style",
      },
      {
        label: "Riding surface",
        value: "Standard",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Bones",
    name: "Bones 100's #14 V4 Wide Wheels White",
    description:
      "The Bones 100's #14 V4 Wide Wheels White are excellent wheels for the all-around skateboarder looking for an unbeatable value wheel. Bones original formula. Great for skating rails, ledges, bowls, and anything else in your pathway. Skater designed and built for faster longer grinds, more resistant to flatspots with light weight material to keep you rolling. Wheels sold in sets of FOUR.",
    price: 24.99,
    images: {
      main: "https://i.imgur.com/TorEc1f.png",
      thumbnail: "https://i.imgur.com/VTaIrzg.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Bones V4",
      },
      {
        label: "Hardness",
        value: "100A Durometer",
      },
      {
        label: "Formula",
        value: "Bones Original",
      },
      {
        label: "Protection",
        value: "UV Protected",
      },
      {
        label: "Riding Style",
        value: "Versatile, less side drag and high rebound for speed",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Bones",
    name: "Bones 100's #14 V4 Wide Wheels Black",
    description:
      "The Bones 100's #14 V4 Wide Wheels Black are excellent wheels for the all-around skateboarder looking for an unbeatable value wheel. Bones original formula. Great for skating rails, ledges, bowls, and anything else in your pathway. Skater designed and built for faster longer grinds, more resistant to flatspots with light weight material to keep you rolling. Wheels sold in sets of FOUR.",
    price: 24.99,
    images: {
      main: "https://i.imgur.com/fHleDeQ.png",
      thumbnail: "https://i.imgur.com/a3MtRpP.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Bones V4",
      },
      {
        label: "Hardness",
        value: "100A Durometer",
      },
      {
        label: "Formula",
        value: "Bones Original",
      },
      {
        label: "Protection",
        value: "UV Protected",
      },
      {
        label: "Riding Style",
        value: "Versatile, less side drag and high rebound for speed",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Bones",
    name: "Bones 100's #4 V5 Sidecuts Wheels White",
    description:
      "The Bones 100's #4 V5 Sidecuts Wheels White are excellent wheels for the all-around skateboarder looking for an unbeatable value wheel. Bones original formula. Great for skating rails, ledges, bowls, and anything else in your pathway. Skater designed and built for faster longer grinds, more resistant to flatspots with light weight material to keep you rolling. Wheels sold in sets of FOUR.",
    price: 24.99,
    images: {
      main: "https://i.imgur.com/MX5Pq9U.png",
      thumbnail: "https://i.imgur.com/aOaDV1y.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Bones V5",
      },
      {
        label: "Hardness",
        value: "100A Durometer",
      },
      {
        label: "Formula",
        value: "Bones Original",
      },
      {
        label: "Protection",
        value: "UV Protected",
      },
      {
        label: "Riding Style",
        value: "Versatile, less side drag and high rebound for speed",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Wheels",
    brand: "Bones",
    name: "Bones 100's #4 V5 Sidecuts Wheels Black",
    description:
      "The Bones 100's #4 V5 Sidecuts Wheels Black are excellent wheels for the all-around skateboarder looking for an unbeatable value wheel. Bones original formula. Great for skating rails, ledges, bowls, and anything else in your pathway. Skater designed and built for faster longer grinds, more resistant to flatspots with light weight material to keep you rolling. Wheels sold in sets of FOUR.",
    price: 24.99,
    images: {
      main: "https://i.imgur.com/m1Wm8gr.png",
      thumbnail: "https://i.imgur.com/SRTH9jO.png",
    },
    details: [
      {
        label: "Size",
        value: "52mm",
      },
      {
        label: "Wheel shape",
        value: "Bones V5",
      },
      {
        label: "Hardness",
        value: "100A Durometer",
      },
      {
        label: "Formula",
        value: "Bones Original",
      },
      {
        label: "Protection",
        value: "UV Protected",
      },
      {
        label: "Riding Style",
        value: "Versatile, less side drag and high rebound for speed",
      },
      {
        label: "Quantity",
        value: "Sold in a set of FOUR",
      },
    ],
  },
  {
    product_type: "Truck",
    brand: "Toy Machine",
    name: "Independent x Toy Machine Stage 11 Standard Truck",
    description:
      'Two iconic brands come together to collaborate and get you right with the Independent x Toy Machine Stage 11 Standard Truck. You get superior turn and stability, better grind clearance, and improved "no hang-up yoke". Only the best materials used and assembled locally, here in the U.S. Independent/Toy Machine detailing throughout.',
    price: 28,
    images: {
      main: "https://i.imgur.com/oXvBnpN.png",
      thumbnail: "https://i.imgur.com/4nsRl5z.png",
    },
    available_sizes: [
      {
        value: '8"',
        main_image: "https://i.imgur.com/oXvBnpN.png",
        thumbnail: "https://i.imgur.com/4nsRl5z.png",
      },
      {
        value: '8.25"',
        main_image: "https://i.imgur.com/oXvBnpN.png",
        thumbnail: "https://i.imgur.com/4nsRl5z.png",
      },
      {
        value: '8.5"',
        main_image: "https://i.imgur.com/oXvBnpN.png",
        thumbnail: "https://i.imgur.com/4nsRl5z.png",
      },
      {
        value: '8.75"',
        main_image: "https://i.imgur.com/oXvBnpN.png",
        thumbnail: "https://i.imgur.com/4nsRl5z.png",
      },
    ],
    details: [
      { label: "Material", value: "356 T6 aluminum" },
      { label: "Axles", value: "4140 chromoly steel" },
      { label: "Kingpins", value: "Grade 8" },
      { label: "Cut", value: 'Four-hole for sizes 7.75" - 8.5"' },
      { label: "Cut", value: 'Six-hole for sizes 8.75" - 10"' },
    ],
    truck_sizing: {
      139: '8.00"',
      144: '8.25"',
      149: '8.50"',
      159: '8.75"',
      169: '9.00"',
    },
  },
  {
    product_type: "Truck",
    brand: "Independent",
    name: "Independent Stage 11 Mason Silva Standard Truck",
    description:
      'The Independent Stage 11 Mason Silva Standard Truck feature new updated geometry. This is the new Standard. You get superior turn and stability, better grind clearance, improved "no hang-up yoke", and a lightweight hollow body hanger. Only the best materials used and assembled locally, here in the U.S. Independent detailing throughout.',
    price: 27.99,
    images: {
      main: "https://i.imgur.com/ZYUaEHO.png",
      thumbnail: "https://i.imgur.com/Vvc9CtR.png",
    },
    available_sizes: [
      {
        value: '8"',
        main_image: "https://i.imgur.com/ZYUaEHO.png",
        thumbnail: "https://i.imgur.com/Vvc9CtR.png",
      },
      {
        value: '8.25"',
        main_image: "https://i.imgur.com/ZYUaEHO.png",
        thumbnail: "https://i.imgur.com/Vvc9CtR.png",
      },
      {
        value: '8.5"',
        main_image: "https://i.imgur.com/ZYUaEHO.png",
        thumbnail: "https://i.imgur.com/Vvc9CtR.png",
      },
      {
        value: '8.75"',
        main_image: "https://i.imgur.com/ZYUaEHO.png",
        thumbnail: "https://i.imgur.com/Vvc9CtR.png",
      },
    ],
    details: [
      { label: "Material", value: "356 T6 aluminum" },
      { label: "Axles", value: "4140 chromoly steel" },
      { label: "Kingpins", value: "Grade 8" },
      { label: "Cut", value: 'Four-hole for sizes 7.75" - 8.5"' },
      { label: "Cut", value: 'Six-hole for sizes 8.75" - 10"' },
      { label: "Pro Model", value: "Mason Silva" },
    ],
    truck_sizing: {
      139: '8.00"',
      144: '8.25"',
      149: '8.50"',
      159: '8.75"',
      169: '9.00"',
    },
  },
  {
    product_type: "Truck",
    brand: "Ruckus",
    name: "Ruckus Mid Trucks",
    description:
      "Start charging through the grinds with the Ruckus Mid Trucks. New light weight design with improved turning geometry and quick and stable turning radius. High rebound and responsive 92a bushings with non-slip axels, hardened kingpin and axel. Bushing color may vary.",
    price: 18,
    images: {
      main: "https://i.imgur.com/Cgj3Rm8.png",
      thumbnail: "https://i.imgur.com/CUFGvF3.png",
    },
    available_sizes: [
      {
        value: '7.75"',
        main_image: "https://i.imgur.com/Cgj3Rm8.png",
        thumbnail: "https://i.imgur.com/CUFGvF3.png",
      },
      {
        value: '8"',
        main_image: "https://i.imgur.com/Cgj3Rm8.png",
        thumbnail: "https://i.imgur.com/CUFGvF3.png",
      },
      {
        value: '8.25"',
        main_image: "https://i.imgur.com/Cgj3Rm8.png",
        thumbnail: "https://i.imgur.com/CUFGvF3.png",
      },
    ],
    details: [
      { label: "Bushings", value: "Responsive 92a" },
      { label: "Axels", value: "Hardened Non-slip" },
      { label: "Kingpins", value: "Hardened" },
    ],
    truck_sizing: {
      '5" hanger': '7.5" - 7.75"',
      '5.25" hanger': '7.875" - 8.125"',
      '5.5" hanger': '8" - 8.25"',
    },
  },
  {
    product_type: "Hardware",
    brand: "Diamond",
    name: "Diamond Hella Tight Phillips Hardware",
    description:
      "Keep your board lookin and feeling hella tight with the Diamond Hella Tight Phillips Hardware. Includes a custom Diamond wrench to change your bolts whenever and wherever. Comes with 8 regular black bolts and 1 gold bolt for a total of 9 bolts with 9 silver nuts. Allen key included.",
    price: 3.99,
    images: {
      main: "https://i.imgur.com/cwzxkvP.png",
      thumbnail: "https://i.imgur.com/uaSmHpP.png",
    },
    available_sizes: [
      {
        value: '7/8"',
        main_image: "https://i.imgur.com/cwzxkvP.png",
        thumbnail: "https://i.imgur.com/uaSmHpP.png",
      },
      {
        value: '1"',
        main_image: "https://i.imgur.com/TVXqyGh.png",
        thumbnail: "https://i.imgur.com/Xn8spAy.png",
      },
      {
        value: '1.25"',
        main_image: "https://i.imgur.com/bsq5myq.png",
        thumbnail: "https://i.imgur.com/n6aKslh.png",
      },
    ],
    details: [
      { label: "Contents", value: "Allen key and Diamond wrench included" },
      { label: "Bolts", value: "Nine bolts included - one gold, eight black" },
      { label: "Nuts", value: "Nine silver nuts included" },
    ],
  },
  {
    product_type: "Hardware",
    brand: "Diamond",
    name: "Diamond Shane O'Neill Pro Allen Hardware",
    description:
      "Keep your board lookin and feeling hella tight with the Diamond Shane O'Neill Pro Allen Hardware. Time to get your shine on and roll in style. Manufactured with a custom Diamond wrench to change your bolts to your liking. Comes with eight (8) regular black bolts and one (1) yellow bolt with nine (9) nuts total. Allen key included.",
    price: 5,
    images: {
      main: "https://i.imgur.com/FBajkfz.png",
      thumbnail: "https://i.imgur.com/rG5VzrL.png",
    },
    available_sizes: [
      {
        value: '7/8"',
        main_image: "https://i.imgur.com/FBajkfz.png",
        thumbnail: "https://i.imgur.com/rG5VzrL.png",
      },
    ],
    details: [
      { label: "Contents", value: "Allen key and Diamond wrench included" },
      { label: "Bolts", value: "Nine bolts included - one yellow" },
      { label: "Nuts", value: "Nine nuts included - one yellow, eight white" },
      { label: "Pro Model", value: "Shane O'Neill" },
    ],
  },
  /*
  {
    product_type: "Hardware",
    brand: "",
    name: "",
    description: "",
    price: 0,
    images: {
      main: "",
      thumbnail: "",
    },
    available_sizes: [],
  },*/
];

module.exports = products;
