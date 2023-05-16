import certOne from '../../assets/cert-1.png'
import certTwo from '../../assets/cert-2.png'
import certThree from '../../assets/cert-3.png'
const Certificate = () => {
    const Certificates = [
        {
            name: "Conduct UX Research",
            img: certOne

        },
        {
            name: "Test early concept",
            img: certTwo

        },
        {
            name: "Test early concept",
            img: certThree

        },
    ]
    return (
        <div>
            <div className="p-14">
                <h1 className="text-white font-bold text-2xl p-4 mb-6">Achivements</h1>
                <div className='grid gird-cols-1 md:grid-cols-2 gap-10 mb-3'>
                    {
                        Certificates.map((certificate, index) => <div key={index} className=''>
                            <img src={certificate.img} alt="this is skills image" className='mb-[.6rem]' />
                            <h2 className=' font-semibold text-lg'>{certificate.name}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Certificate;