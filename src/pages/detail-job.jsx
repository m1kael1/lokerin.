import MainLayout from "../layouts/main-layout";
import useJobs from "../hooks/use-jobs";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../lib/atoms";
import { SkeletonText, SkeletonButton } from "../components/skeleton";

const DetailJob = () => {
  const { id } = useParams();
  const { loading, jobs } = useJobs(id);
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const label = ["company", "salary", "description", "category", "area"];

  const currentJob = {
    ...jobs,
    status: "pending",
  };

  const submitJob = () => {
    setUser({
      ...user,
      applied_jobs: [...user.applied_jobs, currentJob],
    });

    navigate(`/profile`, { replace: true });
  };

  return (
    <MainLayout>
      <section className="grid h-auto w-full place-items-center px-4">
        <div className="relative mt-12 w-full max-w-lg rounded-r-lg border-l-[10px] border-l-lochmara-600 bg-white p-8 shadow-lg dark:border-l-slate-500 dark:bg-[#1b1f23] dark:text-white ">
          {loading ? (
            <SkeletonText />
          ) : (
            <>
              <h1 className="mb-4 text-3xl font-semibold">{jobs.position}</h1>
              <div className="mb-8 flex gap-2 ">
                <div className="label">
                  {label.map((label, index) => (
                    <p
                      key={index}
                      className="flex justify-between gap-4 whitespace-nowrap capitalize"
                    >
                      {label}
                      <span>:</span>
                    </p>
                  ))}
                </div>
                <div className="value whitespace-nowrap capitalize">
                  {label.map((label, index) => (
                    <p key={index}>
                      {label === "salary" ? `$${jobs[label]},000` : jobs[label]}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
          {loading ? (
            <SkeletonButton />
          ) : (
            <button
              className="absolute bottom-4 right-4 rounded-full bg-lochmara-500 px-4 py-2 font-semibold text-white hover:bg-lochmara-600 active:bg-lochmara-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700"
              onClick={submitJob}
            >
              Apply Now
            </button>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default DetailJob;
