import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MoveText = () => {
  const services = [
    {
      icon: "⚡",
      title: "Zero Emissions Freight",
      description: "Reduce your carbon footprint with electric trucks.",
    },
    {
      icon: "🚛",
      title: "Trucking-as-a-Service",
      description: "Flexible fleet solutions without the ownership hassle.",
    },
    {
      icon: "📦",
      title: "Tailored for Corporate Logistics",
      description: "Scalable services for enterprise supply chains.",
    },
    {
      icon: "🔋",
      title: "Powered by Clean Energy",
      description: "Driving sustainability from source to delivery.",
    },
  ];

  return (
    <div className="w-4/5 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MoveText;
