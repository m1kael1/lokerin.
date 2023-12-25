import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const fadeInFromBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};

export const CardJob = ({ job, index }) => {
  const { id, position, salary, area, company } = job;
  return (
    <motion.div
      variants={fadeInFromBottom}
      animate={"animate"}
      initial={"initial"}
      custom={index}
      className="relative mt-6 w-full max-w-[50rem] cursor-pointer rounded-r-lg border-l-[10px] border-lochmara-100 border-l-lochmara-400 bg-white from-blue-800 p-4 shadow-lg hover:bg-gradient-to-r hover:to-blue-500 hover:text-white dark:border-l-slate-500 dark:bg-[#1b1f23] dark:text-white dark:hover:from-slate-800 dark:hover:to-slate-500"
    >
      <NavLink to={`/jobs/${id}`}>
        <li>
          <h2 className="mb-2 text-2xl font-bold">{position}</h2>
          <p className="text-lg capitalize">
            {company}
            <br />
            Area: {area}
          </p>
          <p className="mt-4 w-full text-right text-2xl sm:mt-0">
            <b>Salary: ${salary},000</b>
          </p>
        </li>
      </NavLink>
    </motion.div>
  );
};
