import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ( {setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className='mx-auto min-h-full w-5/6'>
        <motion.div 
            className='mt-8 flex items-center gap-8'
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <div>
                
            </div>
        </motion.div>

    </section>
  )
}

export default Benefits