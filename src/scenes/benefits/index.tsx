import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { SelectedPage, BenefitType } from '@/shared/types';
import { motion, stagger } from 'framer-motion';
import TitleText from '@/shared/TitleText';
import Benefit from './Benefit';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Top of the line equipment and facilities to help you reach your fitness goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Group classes to help you stay motivated and accountable."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Certified trainers that specialize in all areas of fitness."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const Benefits = ( {setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div className='md:w-4/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}>
                <TitleText>MORE THAN JUST A GYM.</TitleText>
                <p className='my-5 text-sm font-semibold'>
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>
                
            {/* BENEFITS */}
            <motion.div className='mt-5 items-center justify-between gap-8 md:flex'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              variants={container}>

                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Benefits