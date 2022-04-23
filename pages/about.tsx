import Image from 'next/image'
import pp from '../public/img/pic.jpeg'
const About = () => {
    return (
        <section>
            <div>
                <Image
                    src={pp}
                    alt="Gada foto yang mendingan, jadi pake yang ini aja dulu"
                    className="bg-auto m-20"
                />
                    
            </div>
        </section>
    )
}

export default About;