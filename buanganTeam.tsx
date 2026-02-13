// nothing
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/team'

export const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-brown-primary/10 to-green-accent/10 max-w-6xl mx-auto px-8 py-16 rounded-2xl my-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-serif font-bold text-brown-primary mb-4">👥 Our Team</h1>
        <p className="text-xl text-brown-light max-w-2xl mx-auto">
          Dedicated professionals working together to preserve and celebrate Indonesian artisan heritage through storytelling and technology.
        </p>
      </motion.section>

      {/* Team Members Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-primary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-gold font-semibold">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Position Badge */}
                <motion.div
                  className="inline-block px-3 py-1 bg-brown-primary/10 text-brown-primary text-xs font-bold rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.position}
                </motion.div>

                {/* Bio */}
                <p className="text-brown-light text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Quote */}
                <blockquote className="border-l-4 border-gold pl-4 italic text-brown-primary text-sm mb-6">
                  "{member.quote}"
                </blockquote>

                {/* Experience */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">⭐</span>
                  <span className="text-sm text-brown-light">{member.experience}+ years of experience</span>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-brown-primary mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gold/20 text-brown-primary text-xs px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6 pb-6 border-b border-brown-primary/10">
                  <p className="text-xs text-brown-light">
                    📧{' '}
                    <a href={`mailto:${member.email}`} className="hover:text-gold transition-colors">
                      {member.email}
                    </a>
                  </p>
                  <p className="text-xs text-brown-light">
                    📱{' '}
                    <a href={`tel:${member.phone}`} className="hover:text-gold transition-colors">
                      {member.phone}
                    </a>
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gold transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      💼
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gold transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      🐦
                    </motion.a>
                  )}
                  {member.social.instagram && (
                    <motion.a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gold transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      📷
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-16 mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-gold/10 to-green-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-serif font-bold text-brown-primary mb-4">Our Mission</h2>
          <p className="text-lg text-brown-light max-w-3xl mx-auto leading-relaxed mb-6">
            We are dedicated to preserving Indonesian artisan heritage by creating transparent, storytelling-driven platforms that celebrate ethical UMKM production. Through technology and authentic narratives, we connect artisans with global audiences.
          </p>
          <Link to="/">
            <motion.button
              className="px-8 py-3 bg-brown-primary text-white font-semibold rounded-full hover:bg-brown-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}