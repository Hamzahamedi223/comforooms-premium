// All content below is taken from the client's existing site (comforooms.co.uk).

export const COMPANY = {
  name: 'ComfoRooms',
  legal: 'ComfoRooms LTD',
  phone: '07856139957',
  phoneHref: 'tel:+447856139957',
  email: 'comforooms@yahoo.com',
  city: 'London',
  director: 'H. Turki',
}

const img = (p) => `/images/${p}`
const range = (folder, n, ext = 'jpeg') => Array.from({ length: n }, (_, i) => img(`${folder}/${i + 1}.${ext}`))

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80'
export const DIRECTOR_IMAGE = img('hero.png')
export const ABOUT_IMAGE = img('extensions/3.jpeg')
export const CTA_IMAGE = img('outdoor/2.jpeg')

export const HERO = {
  eyebrow: 'We make your dreams reality',
  title: 'Building Dream, Crafting Reality',
  lead: 'We deliver complete construction solutions, ensuring quality and reliability from start to finish.',
}

export const DIRECTOR_MESSAGE =
  'Hello, I am H. Turki, a civil engineer with extensive experience in building and groundwork. After working with various companies in France and the UK, I decided to establish my own company, COMFOROOMS LTD. I am supported by a dedicated and skilled team that shares my commitment to high-quality work. We take great pride in our jobs, always respecting our customers and striving to deliver results that are both clean and professional. As the director of COMFOROOMS LTD, I personally guarantee satisfaction with every project, and we offer a warranty for all the work we complete. I look forward to hearing from you soon.'

export const FEATURES = [
  { title: 'Unmatched Quality', text: 'Craftsmanship guaranteed' },
  { title: 'Innovative Designs', text: 'Creative and modern solutions' },
  { title: 'Timely Delivery', text: 'Projects completed on schedule' },
  { title: 'Focused Service', text: 'Prioritizing client satisfaction always' },
]

export const SECTORS = [
  { title: 'Residential Construction', text: 'Building modern, high-quality homes tailored to your vision.', image: img('outdoor/11.jpeg') },
  { title: 'Commercial Projects', text: 'Developing functional, innovative commercial spaces for businesses.', image: img('business/4.jpeg') },
  { title: 'Refurbishment', text: 'Transforming existing spaces with expert renovation and design.', image: img('business/1.jpeg') },
]

export const GALLERIES = {
  Bathrooms: range('bathrooms', 7),
  Outdoor: range('outdoor', 18),
  Extensions: range('extensions', 6),
  Business: range('business', 7),
  Kitchens: [img('kitchen.jpg')],
}

export const SERVICES = [
  {
    key: 'bathrooms',
    title: 'Bathroom Renovations',
    blurb:
      'Renovating your bathroom is a great way to enhance its functionality and style, whether you’re updating an old design or optimizing the space for better use. Our bathroom renovation services are tailored to meet your needs, improving both comfort and value. Whether it’s upgrading fixtures, expanding storage, or creating a modern, spa-like atmosphere, a well-executed renovation can transform your bathroom into a more enjoyable and efficient space. Working with an experienced contractor ensures the project stays on track, within budget, and delivers lasting results.',
    image: img('bathrooms/2.jpeg'),
  },
  {
    key: 'business',
    title: 'Business Renovations',
    blurb:
      'Renovating your business space is key to staying competitive and appealing to your clients. Whether you’re remodeling a storefront, office, or commercial facility, our business renovation services focus on functionality, aesthetics, and sustainability. We provide modern solutions that enhance your space, optimize workflow, and create an inviting atmosphere for your customers and employees alike. With our expertise and attention to detail, your business space will reflect your brand’s identity and goals.',
    image: img('business/2.jpeg'),
  },
  {
    key: 'outdoor',
    title: 'Outdoor Spaces',
    blurb:
      'Outdoor space renovations can transform your home’s exterior into a beautiful and functional area. Whether it’s landscaping, decking, or creating a comfortable outdoor living space, our services help you maximize your outdoor areas. We specialize in designs that enhance both aesthetics and functionality, creating spaces for relaxation, entertainment, or gardening. Let us help you turn your outdoor vision into reality with expert craftsmanship and creative solutions.',
    image: img('outdoor/14.jpeg'),
  },
  {
    key: 'extensions',
    title: 'Extensions',
    blurb:
      'Extending your business or home space allows for more functionality and comfort. Our extension services are tailored to meet your unique needs, whether it’s adding a new room, expanding your office space, or enhancing your property’s value. We combine modern design principles with quality construction to deliver extensions that not only look great but also improve the flow and usability of your space. Let us help you maximize your property’s potential with stylish and functional extensions.',
    image: img('extensions/4.jpeg'),
  },
  {
    key: 'kitchens',
    title: 'Kitchen Renovation',
    blurb: 'A complete kitchen renovation with premium materials and finishes.',
    image: img('kitchen.jpg'),
  },
]

export const TEXT = {
  servicesIntro: 'We deliver complete construction solutions, ensuring quality and reliability from start to finish.',
  projectsIntro: 'Explore our curated collection of civil engineering projects. Browse through our recent works and see the impact of thoughtful design and innovation.',
  testimonialsIntro: 'We turn visions into reality. Hear from our clients about how we bring their dreams to life with precision, passion, and excellence.',
  testimonialsSub: 'Hear from our satisfied clients who share their experiences and success stories with us.',
  contactIntro: "Get in touch with us for any inquiries or support. We're here to help with any questions you may have or assistance you need. Feel free to reach out, and we'll get back to you as soon as possible.",
  footerTag: 'We provide top-notch services with a commitment to excellence. Get in touch for more details!',
}

// Client reviews from the existing site.
export const TESTIMONIALS = [
  {name:"Jean. CThrine, UB5",review:"Needed a roof and partition wall put up in my decking area. The work was done to a high specification. And completed in one day. Nothing was too much trouble for the builder. He made sure everything was left neat and tidy and that all rubbish was thrown away. I can highly recommend the builder and company for all your work that you need done.",task:"Building roof and partition wall"},
  {name:"Paul, SW1V",review:"Very pleased with their work to replace my concealed shower with an exposed power shower. It was a surprisingly tricky and skilled job, with considerable physical space constraints. Their work was project managed exceedingly well and conducted in good time. Would definitely recommend",task:"Bathroom Repair"},
  {name:"Neeta, HA2",review:"Highly recommend Hass. Is very punctual & does great work. Water was leaking from my shower door which he came twice & fixed it. Would definitely recommend him",task:"Bathroom Tiling"},
  {name:"Robert, HA9",review:"Yo say that Hass\u2019s quote was the cheapest would be doing him a disfavour his was the most reasonable. I initially approached him for making the big pergola and laying new patio with new design in addition to doing summer kitchen as well. Hass is really hard working, punctual, has good communication skills, experience in his trade and very reasonable. I want to wish him the very best for the future and I know whom to approach and recommend forward. Many thanks",task:"Landscaping"},
  {name:"Philipe, N8",review:"Hass and the rest of the team were very polite and professional; the work was made in the best conditions. I asked him to give me quotes for more jobs. Strongly recommended",task:"Landscaping"},
  {name:"Arthur, EN4",review:"Contacted fast and despite delays at my end, was able to come to replace a radiator within 24 hours of being asked. Carried out the job well and cleared up after. Altogether a job well done by a competent plumber",task:"Radiator"},
  {name:"Mark, N6",review:"Very cooperative team. I am really satisfied with the way they have understood my requirements and helped me scope my project. That truly shows that they do care for their customers. Strongly recommended",task:"Garage Conversion"},
  {name:"David, W6",review:"Hassine\u2019s installation work on a replacement bathroom basin and stand was exceptional - precise, quick and completely trouble-free. I\u2019ve absolutely no hesitation in recommending him and I hope to persuade him back to do other restoration work on the house.",task:"Bathroom, Kitchen and WC Plumbing"},
  {name:"Bach, HA9",review:"Amazing tradesmen, he was prompt, friendly and was tidy on the job. He triple checked the work he carried out and double checked the work that needed to be carried out. After 2 plumbers failed me, he was able to come out next day to fix a leak under the sink, fit new taps and install new waste pipes from the kitchen. In addition, he created a temporary work surface that I could attach my taps to while I wait for the worktops to arrive. I'm so impressed I am looking to give all the house work to him.",task:"Bathroom, Kitchen and WC Plumbing"},
  {name:"Victor, NW8",review:"Good advice, professional and very clean jobs. Strongly recommended.",task:"Bathroom, Kitchen and WC Plumbing"},
  {name:"Matt, HA9",review:"Very satisfied with the plumbing work done. Highly recommended!",task:"Bathroom, Kitchen and WC Plumbing"},
  {name:"Shenaz, NW10",review:"Very friendly, professional, and punctual. Good advice and very experienced\u2014an absolute pleasure. Highly recommend.",task:"Plumbing Repair & Maintenance"},
  {name:"Teresa, W9",review:"The company comforooms completed a very clean job to an amazing standard. I love the finished product. I would definitely recommend.",task:"Bathroom, Kitchen and WC Plumbing"},
  {name:"Geoff, SW6",review:"Comforooms did a fantastic job in our house they were really professional and fast. The job was done to an amazing standard. The Director and the team were very respectful. Highly recommend.",task:"House Extension"},
  {name:"Teresa, NW6",review:"I am very satisfied with the work that the company Comforooms LTD did for us. Very serious, polite, and professional. I would really recommend.",task:"Concrete Driveway"},
  {name:"Ollie, SE19",review:"Really happy with the work that Hass and the team did and the level of service they provided. The job was done to an amazing standard and his team was very respectful of working around the house. We\u2019ve already asked him to come back and quote for more work and are looking forward to working with him many more times going forward.",task:"Soil Irrigation / Drainage"},
  {name:"Rachel, N8",review:"Has did a great job of the patio in our garden. It was done neatly and exactly as we requested. He was always on time and completely respectful, tidying up each day. He was also very reasonably priced and finished the job in the time he had specified. I have recommended him to friends and would definitely use him again.",task:"Landscaping"},
  {name:"Maria, HA7",review:"I was very pleased with the service provided by Hasim. He replaced my basin, toilet, shower mixer tap, and waste, and kitchen mixer tap. I would strongly recommend him to anyone requiring plumbing services.",task:"Bathroom Installation"},
  {name:"Harriet, SW9",review:"Prompt, polite, friendly, efficient - highly recommend",task:"Plumbing Repair & Maintenance"},
]
