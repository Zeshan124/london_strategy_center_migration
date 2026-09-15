import { Building2, MapPin, Briefcase, CalendarDays } from "lucide-react";

const JOBS = [
  {
    title: "Affiliate Programme",
    company: "London Strategy Centre",
    location: "London, United Kingdom",
    type: "Permanent – Full-time",
    posted: "26th September 2024",
    closing: "26th November 2024",
    status: "Expired",
  },
  {
    title: "Commercial Director",
    company: "London Strategy Centre",
    location: "London, United Kingdom",
    type: "Permanent – Full-time",
    posted: "23rd April 2024",
    closing: "20th May 2024",
    status: "Expired",
  },
  {
    title: "Associate Facilitator",
    company: "London Strategy Centre",
    location: "London, United Kingdom",
    type: "Permanent – Full-time",
    posted: "20th June 2023",
    closing: "15th July 2023",
    status: "Expired",
  },
];

export default function JobListings() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 transition-shadow hover:shadow-lg"
            >
              {/* Status */}
              <div className="flex justify-end mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200">
                  {job.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-[#0E2253] mb-4 leading-snug">
                {job.title}
              </h2>

              {/* Details */}
              <div className="space-y-2.5 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0E2253] shrink-0" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0E2253] shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#0E2253] shrink-0" />
                  <span>{job.type}</span>
                </div>
              </div>

              {/* Dates — pinned to the bottom for equal-height cards */}
              <div className="mt-auto pt-5 border-t border-gray-100 space-y-2 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  <span>Posted on {job.posted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  <span>Closing Date {job.closing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
