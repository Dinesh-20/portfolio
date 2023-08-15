import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion"
import {styles} from '../styles'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Technologies I have used </p>
        <h2 className={styles.sectionHeadText}>Technologies and Frameworks</h2>
      </motion.div>
      <br />
      {technologies.map((tech)=>(
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')