import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Factory, BarChart, Clock, Filter, CheckCircle2, AlertCircle } from '../components/Icons';
import { SEO } from '../components/SEO';

const projects = [
  { id: 1, client: "Indira Gandhi Centre for Atomic Research", location: "Kalpakkam, Tamil Nadu", capacity: "1 TPD", type: "MSW", status: "Installed" },
  { id: 2, client: "Aizwal Municipal Corporation", location: "Mizoram", capacity: "1 TPD", type: "MSW", status: "Installed" },
  { id: 3, client: "Assam Pollution Control Board", location: "Nagaon, Assam", capacity: "0.5 TPD", type: "MSW", status: "Installed" },
  { id: 4, client: "Sam Foundation for Eco friendly Environmental", location: "Chennai, TN", capacity: "0.1 TPD", type: "MSW", status: "Installed" },
  { id: 5, client: "Kartarpur Land Port", location: "Punjab", capacity: "0.5 TPD", type: "Port Waste", status: "Installed" },
  { id: 6, client: "Kartarpur Land Port", location: "Punjab", capacity: "0.5 TPD", type: "MSW", status: "Installed" },
  { id: 7, client: "Adani SEZ, Mundra Port", location: "Gujarat", capacity: "0.5 TPD", type: "MSW", status: "Installed" },
  { id: 8, client: "Defence colony, Shankar Vihar", location: "New Delhi", capacity: "0.15 TPD", type: "Institutional", status: "Installed" },
  { id: 9, client: "Don Boscho University, Guwahati", location: "Assam", capacity: "0.15 TPD", type: "Institutional", status: "Installed" },
  { id: 10, client: "Telangana Institute of Medical Science", location: "Hyderabad", capacity: "1 TPD", type: "COVID Waste", status: "Installed" },
  { id: 11, client: "Kareem Nagar Municipality", location: "Hyderabad", capacity: "0.25 TPD", type: "MSW", status: "Installed" },
  { id: 12, client: "Guntur Municipal Corporation", location: "Andhra Pradesh", capacity: "0.25 TPD", type: "MSW", status: "Installed" },
  { id: 13, client: "Kakinada Municipal Corporation", location: "Andhra Pradesh", capacity: "0.25 TPD", type: "MSW", status: "Installed" },
  { id: 14, client: "Department of Urban Development & Housing", location: "Tawang Valley, Arunachal Pradesh", capacity: "0.5 TPD", type: "MSW", status: "Installed" },
  { id: 15, client: "Department of Urban Development & Housing", location: "Ziro Valley, Arunachal Pradesh", capacity: "0.5 TPD", type: "MSW", status: "Installed" },
  { id: 16, client: "Numaligarh Refinery Limited", location: "Assam", capacity: "0.15 TPD", type: "Mixed Waste", status: "Installed" },
  { id: 17, client: "Indira Gandhi Centre for Atomic Research", location: "Kalpakkam, Tamil Nadu", capacity: "0.25 TPD", type: "MSW", status: "To be Installed" },
  { id: 18, client: "55 Engineer Regiment, Indian Army", location: "Rajasthan", capacity: "0.25 TPD", type: "MSW", status: "To be Installed" },
  { id: 19, client: "Tirupati Municipal Corporation", location: "Tirupati", capacity: "1 TPD", type: "MSW", status: "To be Installed" },
  { id: 20, client: "IndLab Equipment Pvt. Ltd.", location: "Bengaluru", capacity: "1 TPD", type: "Mixed Waste", status: "Installed" },
];

const StatCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
    <div className="bg-black/10 backdrop-blur-md border border-white/10 p-6 flex items-center space-x-4">
        <div className="bg-brand-gold p-3 text-white rounded-full">
            {icon}
        </div>
        <div>
            <div className="text-3xl font-heading font-bold text-white">{value}</div>
            <div className="text-gray-200 text-sm uppercase tracking-wider font-medium">{label}</div>
        </div>
    </div>
);

export const CaseStudies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
        const matchesSearch = project.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              project.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Case Studies - 500+ Successful Waste Management Installations"
        description="Explore Solwaste's case studies across India. 500+ installations in ONGC, Adani, government municipalities, hospitals, hotels & societies. View project details, capacity & impact. Real results from real clients."
        keywords="solwaste case studies, waste management projects India, OWC installations, composting success stories, client testimonials, municipal waste projects, industrial composting installations, hotel waste management"
        type="article"
      />
      
      {/* Header */}
      <section className="bg-brand-dark text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574607383476-f2c7115853f2?q=80&w=1972&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/25 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block border border-brand-gold px-4 py-1 text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-md rounded-full">
                        Proven Solutions
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 uppercase leading-none">
                        Real Impact
                    </h1>
                    <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
                        From government institutions to municipal corporations, our waste management solutions are transforming how India handles organic waste.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StatCard value="20" label="Total Installations" icon={<CheckCircle2 />} />
                    <StatCard value="8.3" label="TPD Capacity" icon={<BarChart />} />
                    <StatCard value="10" label="States Covered" icon={<MapPin />} />
                    <StatCard value="3" label="Upcoming Projects" icon={<Clock />} />
                </div>
            </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                      <h2 className="text-4xl font-heading font-bold text-brand-brown uppercase mb-2">Installation Showcase</h2>
                      <p className="text-gray-500">Explore our footprint across the nation.</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                      <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input 
                            type="text" 
                            placeholder="Search by name or location..." 
                            className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-sm w-full md:w-80 focus:outline-none focus:border-brand-gold transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                      </div>
                      <div className="relative">
                          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <select 
                             className="pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-sm appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
                             value={statusFilter}
                             onChange={(e) => setStatusFilter(e.target.value)}
                          >
                              <option value="All">All Status</option>
                              <option value="Installed">Installed</option>
                              <option value="To be Installed">To be Installed</option>
                          </select>
                      </div>
                  </div>
              </div>

              <div className="mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Showing {filteredProjects.length} of {projects.length} installations
              </div>

              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={project.id}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white border border-gray-200 p-6 hover:shadow-2xl hover:border-brand-gold transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-heading font-bold text-3xl text-gray-200 group-hover:text-brand-gold/40 transition-colors">#{project.id}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm transition-all duration-300 ${project.status === 'Installed' ? 'bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white' : 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white'}`}>
                                    {project.status === 'Installed' ? 'Installed' : 'In Progress'}
                                </span>
                            </div>
                            <h3 className="font-heading font-bold text-brand-brown text-lg leading-tight mb-3 min-h-[3rem] group-hover:text-brand-gold transition-colors">
                                {project.client}
                            </h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex items-center group-hover:translate-x-1 transition-transform">
                                    <MapPin size={16} className="text-brand-gold mr-2 group-hover:scale-125 transition-transform" />
                                    {project.location}
                                </div>
                                <div className="flex items-center group-hover:translate-x-1 transition-transform">
                                    <BarChart size={16} className="text-brand-gold mr-2 group-hover:scale-125 transition-transform" />
                                    Capacity: <span className="font-bold text-gray-900 ml-1">{project.capacity}</span>
                                </div>
                                <div className="flex items-center group-hover:translate-x-1 transition-transform">
                                    <Factory size={16} className="text-brand-gold mr-2 group-hover:scale-125 transition-transform" />
                                    Type: <span className="font-bold text-gray-900 ml-1">{project.type}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                  </AnimatePresence>
              </motion.div>
          </div>
      </section>

      {/* Table View */}
      <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                  <h2 className="text-4xl font-heading font-bold text-brand-brown uppercase mb-2">Complete Database</h2>
                  <p className="text-gray-500">Full project list for reference.</p>
             </div>

             <div className="overflow-x-auto shadow-sm border border-gray-200">
                 <table className="w-full text-left border-collapse">
                     <thead className="bg-gray-900 text-white">
                         <tr>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">S.No</th>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">Client Name</th>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">Location</th>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">Capacity</th>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">Waste Type</th>
                             <th className="p-4 font-heading font-bold uppercase tracking-wider text-sm">Status</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                         {projects.map((project, idx) => (
                             <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                 <td className="p-4 font-bold text-gray-500">{idx + 1}</td>
                                 <td className="p-4 font-bold text-brand-brown">{project.client}</td>
                                 <td className="p-4">{project.location}</td>
                                 <td className="p-4 whitespace-nowrap">{project.capacity}</td>
                                 <td className="p-4 whitespace-nowrap">
                                     <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600 border border-gray-200">{project.type}</span>
                                 </td>
                                 <td className="p-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {project.status === 'Installed' ? <CheckCircle2 size={16} className="text-green-500 mr-2" /> : <AlertCircle size={16} className="text-yellow-500 mr-2" />}
                                        <span className={project.status === 'Installed' ? 'text-green-700 font-medium' : 'text-yellow-700 font-medium'}>
                                            {project.status}
                                        </span>
                                    </div>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
          </div>
      </section>

    </div>
  );
};