import workOne from '../../assets/word-1.png'
import workTwo from '../../assets/work-2.png'
import workThree from '../../assets/work-3.png'
import workFour from '../../assets/work-4.png'
import workFive from '../../assets/work-5.png'
const Work = () => {
    const skills = [
        {
            name: "User Reasearch",
            img: workOne,
            about: "User research is the process of understanding the needs, behaviors, and preferences of users in order to inform the design and development of products or services."
        },
        {
            name: "Wareframing",
            img: workTwo,
            about: "Wireframing is the blueprint of a website or application, outlining its structure and content layout. The purpose of wireframing is to create a visual representation of the user interface."
        },
        {
            name: "Prototype",
            img: workThree,
            about: "Create a simple, functional design that addresses the identified needs and test with potential users for feedback."
        },
        {
            name: "Ui Design",
            img: workFour,
            about: "UI design is the process of creating visually appealing and user-friendly interfaces for digital products."
        },
        {
            name: "Animation",
            img: workFive,
            about: "The pencil-drawn character on the paper suddenly comes to life, jumping off the page and into the real world."
        }
    ]
    return (
        <div className='px-14 py-2'>
            <h1 className='text-white font-bold text-2xl p-4'>Work Skill</h1>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-10 '>
                {
                    skills.map((skill, index) => <div key={index} className='p-4'>
                        <img src={skill.img} alt="this is skills image" className='mb-[1rem] w-[62px] h-[62px]'/>
                        <h2 className='mb-[1rem] font-semibold text-lg'>{skill.name}</h2>
                        <p className='text-sm'>{skill.about}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Work;