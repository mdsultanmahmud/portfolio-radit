import phone from '../../assets/phone.png'
import gmail from '../../assets/gmail.png'
const Contact = () => {
    return (
        <div className='mb-32'>
            <h1 className="text-white font-bold text-2xl p-4 mb-6 uppercase text-center">Let’s talk about projects</h1>
            <div className='grid grid-cols-2 gap-10 px-24 py-5'>
                <div className='text-center'>
                    <img src={phone} alt="" className='w-[62px] h-[62px] mx-auto' />
                    <p className='text-white text-semibold text-lg'>Call</p>
                    <p className='text-white text-semibold text-lg'>01755970884</p>
                </div>
                <div className='text-center'>
                    <img src={gmail} alt="" className='w-[62px] h-[62px] mx-auto' />
                    <p className='text-white text-semibold text-lg'>E mail</p>
                    <p className='text-white text-semibold text-lg'>designimate166@gmail.com</p>
                </div>
            </div>
            {/* <div className='my-8'>
                <input type="text" placeholder='name'  className='bg-transparent border p-3 rounded-lg'/>
                <input type="text" placeholder='Email'  className='bg-transparent border p-3 rounded-lg'/>
                <input type="text" placeholder='Subject'  className='bg-transparent border p-3 rounded-lg'/>
                <textarea name="" id="" rows="20" placeholder='Type...' className='bg-transparent border p-3 rounded-lg w-full'></textarea>

            </div> */}
        </div>
    );
};

export default Contact;