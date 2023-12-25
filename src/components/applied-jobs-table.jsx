import { useAtom } from "jotai";
import { userAtom } from "../lib/atoms";

export default function AppliedJobsTable() {
  const [user, setUser] = useAtom(userAtom);
  const tableHead = [
    "id",
    "position",
    "salary",
    "company",
    "description",
    "category",
    "area",
    "status",
  ];
  return (
    <div className=" mb-24 overflow-x-auto rounded-lg dark:text-white">
      <table className="min-w-full max-w-screen-lg divide-y divide-gray-200 ">
        <thead className="bg-gray-50 dark:bg-gray-600">
          <tr>
            {tableHead.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-500">
          {user.applied_jobs.map((job, index) => (
            <tr className="hover:bg-gray-200" key={job.id}>
              <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">{job.position}</td>
              <td className="whitespace-nowrap px-6 py-4">${job.salary},000</td>
              <td className="whitespace-nowrap px-6 py-4">{job.company}</td>
              <td className="whitespace-nowrap px-6 py-4">{job.description}</td>
              <td className="whitespace-nowrap px-6 py-4">{job.category}</td>
              <td className="whitespace-nowrap px-6 py-4">{job.area}</td>
              <td
                className={`whitespace-nowrap px-6 py-4 ${
                  job.status === "accepted"
                    ? "text-green-500"
                    : job.status === "rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {job.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
