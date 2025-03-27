import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
    className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} 
            className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-6 font-semi-bold">
                  {experience.role} -{" "}
                  <span className="text-sm text-green-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="mr-1 mt-4 rounded bg-neutral-900 px-1
                  py-1 text-sm font-medium text-green-700 lg:mr-2 lg:px-3">
                    {tech}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Experience