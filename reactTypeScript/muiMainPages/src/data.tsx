import Image1 from './images/AMD.jpg';
import Image2 from './images/Epyc.jpg';
import Image3 from './images/Zen.jpg';
import Image4 from './images/RadeonHeader.jpg';
import Image5 from './images/RadeonHeader2.png';
import Image6 from './images/EPYC_2.png';
import Image7 from './images/Ryzen7.jpg';
import Image8 from './images/Radeon.jpg';

const structures = [
    {
		img: Image7,
		title: 'Ryzen 7 9800X3D',
		description: [`Only AMD Ryzen™ processors feature models with exclusive AMD 2nd Gen  3D V-Cache™ technology for a massive gaming performance boost.`, 
		`AMD combines its flagship Ryzen 9000X3D Series processors with up to a colossal 144MB of on-chip memory, paired with the most advanced processor cores you can get in a gaming PC so enthusiasts can harness the power of the ultimate gaming performance.`]
    }, 
	{
        img: Image1, 
        title: "The Future Of Computing", 
        description: [`For decades AMD has pioneered technology to push the limits of what AI can accomplish, so now you can experience the power of your very own, incredibly advanced Artificial Intelligence technology. Be ready to usher in the future with new capabilities that only AMD Ryzen can provide.`, 
		`Whether it's enabling the ultimate AI platform with the Ryzen 9000 series, or AMD Ryzen AI with select Ryzen 8000G series processors, the it’s your key to unlock magical AI experiences on your PC.`]
    }, 	
    {
        img: Image2,
		title: 'AMD EPYC',
		description: [`Meet the AMD EPYC™ Embedded Processor Family. AMD EPYC Embedded processors offer a scalable x86 CPU portfolio delivering world-class performance with enterprise-class reliability in a power-optimized profile.`,
		`The AMD EPYC™ Embedded 9005 Series is designed to meet the most demanding compute and platform longevity requirements for networking, storage, and industrial systems. Built on advanced “Zen 5” and “Zen 5c” architectures, these processors deliver industry-leading performance, energy efficiency, and purpose-built embedded features to ensure longevity and resiliency.`]
	},
	{
        img: Image8,
		title: 'AMD Radeon',
		description: [`Radeon™ RX 9000 Series Graphics. Built on the AMD RDNA™ 4 architecture, experience powerful raytracing and AI accelerators, increased visual quality for video streaming and recording, all backed by continuous optimizations with AMD Software. This is the upgrade that will keep your system feeling fast and fresh for years to come.`,
		`All You Need for Ultra-Fast Gaming. Whether you need ultra-high refresh rates for esports, or all settings maxed for exploring your favorite open-worlds, AMD Radeon™ RX 9000 Series graphics deliver all you need for ultra-fast gaming. Supercharge your experience with AMD HYPR-RX1 and unleash the true potential of your Radeon™ RX GPU, leveraging the combined forces of advanced super resolution, frame generation, and latency reduction technologies.`]
    },
	{
		img: Image3, 
        title: "The Fastest Gaming Processors Ever", 
        description: [
            `Harness the ultimate gaming edge with AMD Ryzen™ 7 9800X3D Processor.`,
			`Enjoy faster gaming with 2nd gen AMD 3D V-Cache™ technology for low latency.`	 
        ]
    },
	{
		img: Image4,
        title: 'Next-Generation Performance',
        description: [
            `Break through new levels of performance with up to 24 GB of GDDR6 memory and blazing fast clock speeds for an incredible gaming experience.`,
            `AMD Radeon RX 7000 Series graphics feature advanced AMD RDNA 3 compute units, with second-generation raytracing accelerators and new AI accelerators to deliver remarkable performance while maximizing graphical fidelity.`
        ] 
    },
    {
        img: Image5,
        title: "Breathtaking Visuals",  
        description: [
             `A pixel- perfect experience starts with Radeon RX 7000 Series graphics cards and the new AMD Radiance Display™ Engine.`, 
			 `Immerse yourself in your favorite visual vistas with stunning image clarity and up to 68 billion colors at up to 8K 165 Hz. `
        ]
    },
    {
        img: Image6,
        title: "Enterprise Performance, Optimized",  
        description: [
            `AMD EPYC 9005 processors deliver exceptional performance while enabling leadership energy efficiency and cost-of-ownership (TCO) value in support of key business imperatives.`,
			`AMD offers high-performance and power-efficient processors that are purpose-built for embedded applications in networking, storage, automotive, industrial, retail, healthcare, aerospace, test and measurement, and more.`
        ]
    }
];

export default structures;