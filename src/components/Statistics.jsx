/* eslint-disable react/prop-types */
const StatisticCard = ({ value, label, description }) => (
  <div className="text-center">
    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
      <svg
        className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
        stroke="currentColor"
        viewBox="0 0 52 52"
      >
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      </svg>
    </div>
    <h6 className="text-4xl font-bold text-deep-purple-accent-400">{value}</h6>
    <p className="mb-2 font-bold text-md">{label}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

export const Statistic = () => {
  const stats = [
    {
      value: "50,000+",
      label: "International Students",
      description:
        "Over 50,000 students from more than 180 countries study in Bangladesh each year.",
    },
    {
      value: "185+",
      label: "Institutes",
      description:
        "Bangladesh boasts over 185 registered and verified higher education institutes.",
    },
    {
      value: "1226+",
      label: "Courses",
      description:
        "A wide range of courses are offered, covering various fields of study.",
    },
    {
      value: "100+",
      label: "Top Universities",
      description:
        "Bangladesh is home to over 100 top-class universities recognized globally.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatisticCard
            key={index}
            value={stat.value}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
};
