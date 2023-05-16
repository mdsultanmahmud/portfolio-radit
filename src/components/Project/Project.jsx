import projectOne from '../../assets/project-1.png'
import projectTwo from '../../assets/project-2.png'
import projectThree from '../../assets/project-3.png'
import funOne from '../../assets/pr-1.png'
import funTwo from '../../assets/pr-2.png'
import funThree from '../../assets/pr-3.png'
const Project = () => {
    const projects = [
        {
            name: "Movie ticket booking app",
            img: projectOne,
            link: "https://dribbble.com/shots/21341620-Movie-Ticket-Booking-App"
            
        },
        {
            name: "Virtual Mobile App",
            img: projectTwo,
            link: "https://dribbble.com/shots/21270810-Virtual-Movie-App"
            
        },
        {
            name: "Gaming console ui",
            img: projectThree,
            link: "https://dribbble.com/shots/21274729-User-interface-UI-design-for-a-gaming-console "
            
        },
    ]

    return (
        <div className="p-14 my-20">
            <h1 className="text-white font-bold text-2xl p-1  mb-6">Projects</h1>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-10 mb-3'>
                {
                    projects.map((project, index) => <div key={index} className=''>
                        <a href={project?.link} target='_blank' rel='noreferrer'>
                            <img src={project.img} alt="this is skills image" className='mb-[1rem]' />
                        </a>
                        <h2 className='mb-[1rem] font-semibold text-lg ml-[3px]'>{project.name}</h2>
                    </div>)
                }
            </div>
            <div>
                <h1 className="text-white font-bold text-2xl px-4 mt-8">Fun facts</h1>
                <div className='grid gap-10 grid-cols-2 md:grid-cols-3 p-4'>
                    <img src={funOne} alt="this is skills image" className='w-3/4' />
                    <img src={funTwo} alt="this is skills image" className='w-3/4' />
                    <img src={funThree} alt="this is skills image" className='w-3/4' />
                </div>
            </div>
        </div>
    );
};

export default Project;