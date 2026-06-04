import React from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  MessageSquare, 
  Brain, 
  Globe, 
  Cpu, 
  Puzzle, 
  ArrowRight, 
  Github, 
  MessageCircle, 
  Download,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Network
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#03040b] text-gray-300 font-sans selection:bg-cyan-500/30">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#03040b]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.3)] flex justify-center items-center font-bold text-white text-xl border border-white/20">
              T
            </div>
            <span className="text-white font-display font-bold text-2xl tracking-widest uppercase">TA2MA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors tracking-wide">PROTOCOL</a>
            <a href="#reticulum-dcm" className="hover:text-cyan-400 transition-colors tracking-wide">MESH</a>
            <a href="#mindmap" className="hover:text-cyan-400 transition-colors tracking-wide">ARCHITECTURE</a>
            <a href="#integrations" className="hover:text-cyan-400 transition-colors tracking-wide">APPLICATIONS</a>
            <div className="w-px h-4 bg-white/10"></div>
            <a href="https://github.com/TheWolfOfChain/TA2MA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Github size={18} /> GITHUB
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a href="#newsletter" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-950/30 text-cyan-400 text-sm font-medium mb-10 hover:bg-cyan-900/40 transition-all border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="tracking-wide">TA2MA Protocol: DCM, SwarmOS, Reticulum & Blockchain</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8 leading-[1.1]"
          >
            TA2MA <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Decentralized Intelligence.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Un'infrastruttura decentralizzata che combina AI orchestration (DCM), edge computing (SwarmOS), comunicazioni mesh resilienti (Reticulum Network) e layer di fiducia blockchain (TA2MA Chain).
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              <Sparkles size={22} className="text-blue-600" /> Scopri il Protocollo
            </button>
            <button onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-10 py-5 bg-[#0a0f1a] text-white rounded-xl font-bold text-lg hover:bg-[#121a2f] transition-all border border-blue-500/20 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,60,255,0.1)] hover:border-cyan-500/40">
              <MessageCircle size={22} /> Contattaci
            </button>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 text-sm font-mono text-gray-600 tracking-wider"
          >
            ► COMPATIBILITA' KUBERNETES COMPLETA // SMART CONTRACTS SOLIDITY
          </motion.p>
        </section>

        {/* Features / Protocol Stack */}
        <motion.section 
          id="features"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 mb-40 pt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-cyan-500"></div>
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Architettura Core</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">TA2MA Protocol Stack</h2>
            </div>
            <p className="text-gray-400 max-w-sm md:text-right hidden md:block">
              L'ecosistema completo per l'intelligenza artificiale decentralizzata.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="text-cyan-400" size={28} />}
              title="DCM (Orchestrator)"
              description="AI-native orchestration protocol. Analizza richieste, pianifica le risorse distribuite, decide su quali nodi eseguire i task e verifica i risultati on-chain."
              details="L'AI-native orchestration protocol. Non un semplice chatbot. Analizza richieste, pianifica le risorse distribuite, decide in modo autonomo dove eseguire i task utilizzando SwarmOS ed il routing Reticulum. Verifica i risultati emessi dai worker AI e li certifica in modo immutabile sulla TA2MA Chain tramite triggering di Smart Contract."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Cpu className="text-blue-400" size={28} />}
              title="SwarmOS (Edge OS)"
              description="Sistema operativo distribuito per Edge Intelligence. Include DSM Scheduler, AI Runtime e RL Router (Reinforcement Learning) per ottimizzare latenza."
              details="Sistema operativo distribuito progettato per far girare l'AI all'Edge (Edge OS). Organizza il lavoro con il DSM Scheduler (assegnazione task, bilanciamento del carico, auto-recovery), esegue nativamente modelli con l'AI Runtime (Llama.cpp, Qwen, Phi) e ottimizza le direttrici tramite il RL Router (Reinforcement Learning) considerando latenza, costi e stabilità. Supporta pienamente il Multi-Tenant per uso Enterprise."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Network className="text-indigo-400" size={28} />}
              title="Reticulum Network"
              description="Il livello di comunicazione mesh sovrano (Sovereign Communication Layer). Connette i dispositivi in modalità multi-hop e offline-first senza dipendenze."
              details="Sovereign Communication Layer: una rete mesh sicura che connette nodi AI per passarsi task (Task Packets) e stati senza l'uso di Internet tradizionale. Supporta Node Discovery automatico, routing crittografico Multi-Hop offline-first (Transport su TCP, WiFi, Ethernet, LoRa) e comunicazioni inviolabili via crittografia end-to-end con Forward Secrecy."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Shield className="text-emerald-400" size={28} />}
              title="TA2MA Chain (Trust)"
              description="Livello di fiducia, prova e settlement economico. Gestisce le identità DID decentralizzate, le prove dei task hash, la reputazione e il registro di audit."
              details="Il livello di Digital Trust ed Economy Blockchain. Crea asset crittografici, attesta la reputazione e certifica operazioni off-chain con roll-up o sidechain Layer-2. Attraverso l'Identity Layer emette Wallet/DID (Decentralized Identifiers), mentre l'Audit Trail del Proof Layer effettua il timestamping e task hashing per garantire la verificabilità formale delle transazioni dei worker AI nel Swarm."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Terminal className="text-purple-400" size={28} />}
              title="Smart Contract Suite"
              description="Sistema economico e di governance della suite TA2MA completo in Solidity, per gestire billing, staking, meccanismi di slashing anti-frode e DAO."
              details="Architettura software composta da Smart Contracts reali in Solidity (compatible EVM). Applica l'Identity Registry (nodi ed org), il Reputation Engine (scoring sui validatori), il Billing Vault per gestire i Compute Credits/TAT Token, lo Staking per l'affidabilità dei nodi operatori e regole di Slashing. Garantisce inoltre l'aggiornamento protocolli tramite TA2MADAO."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Layers className="text-pink-400" size={28} />}
              title="Applicazioni TA2MA"
              description="Il livello superiore dell'architettura: include servizi sociali, SaaS aziendali, piattaforme Municipali (Smart Cities) ed esecuzione dati on-premises zero trust."
              details="Soluzioni progettate sopra l'infrastruttura mesh e trust decentralizzata TA2MA: include 'VolontàReale' per tracciare il lavoro di volontari e certificarlo on-chain (Volunteer Proof); piattaforme AI per Pubbliche Amministrazioni (Municipal); Edge AI per Enterprise in Zero Trust; Supply Chain Audit e soluzioni per l'economia distribuita (Education/Healthcare)."
              delay={0.6}
            />
          </div>
        </motion.section>

        {/* Integrazione Reticulum DCM */}
        <motion.section 
          id="reticulum-dcm"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 mb-40 pt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-blue-500"></div>
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">Network Layer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Integrazione Reticulum × DCM</h2>
            </div>
          </div>
          
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#0a0f1a] to-[#04060a] border border-blue-500/20 mb-12 overflow-hidden shadow-[0_0_50px_rgba(0,60,255,0.05)]">
             <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
             <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto relative z-10">
               Reticulum non è un semplice accessorio, è il <strong className="text-white font-medium">livello di comunicazione distribuito</strong> che trasforma DCM da piattaforma cloud in infrastruttura autonoma edge-native. Trasforma la dipendenza dai server centralizzati in una rete <strong className="text-cyan-400 font-medium">offline-capable, mesh-distributed, agent-to-agent native e resiliente</strong> alle interruzioni del cloud.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProcessCard 
              step="01"
              title="Adapter & Bridge"
              description="Ogni nodo DCM integra nativamente Reticulum (RNS) per stabilire connessioni sicure su canali CONTROL, DATA e BLOCK."
              details="Creazione dell'adapter Reticulum Node Wrapper per garantire ad ogni nodo un'identità criptografica. Costruzione del Message Bridge per tradurre eventi DCM in pacchetti Reticulum cifrati."
            />
            <ProcessCard 
              step="02"
              title="Discovery Layer"
              description="Rimozione di registri centralizzati: i nodi si auto-scoprono pubblicando capacità. Il mesh routing ottimizza i percorsi."
              details="Node Advertisement permette ai nodi di pubblicare le proprie specifiche. Capability Routing individua e contatta in modo efficiente l'edge node ottimale tramite l'instradamento intelligente."
            />
            <ProcessCard 
              step="03"
              title="Agent Communication"
              description="I communication packets permettono interazione serverless Agent-to-Agent. Scambio di TASK, RESPONSE, MEMORY SYNC."
              details="Permette comunicazione diretta peer-to-peer tra agenti AI eliminando il bisogno di server cloud intermediari, rendendo la distribuzione dei processi intrinsecamente edge-based."
            />
            <ProcessCard 
              step="04"
              title="Orchestration Over Mesh"
              description="DCM diventa il cervello decisionale, Reticulum il sistema nervoso distribuito. Assegnazione dinamica e intelligente geografica."
              details="Il flusso diventa User -> DCM -> RNS Mesh -> Edge Worker. La decisione dello scheduling non è vincolata a specifici cluster statici aziendali, ma sfrutta interamente le rotte mesh."
            />
            <ProcessCard 
              step="05"
              title="Blockchain Sync"
              description="Batching ottimizzato per non incingere sulla on-chain: vengono inviati ai validatori solo eventi essenziali e certificazioni."
              details="I compiti operativi minori rimangono circoscritti sulla rete mesh ed edge. L'Audit Log e le conferme del proof trustlayer sono gli unici trasferiti su L4 Blockchain per la scrittura persistente."
            />
            <ProcessCard 
              step="06"
              title="Offline-First Mode"
              description="Supporto per territori e situazioni sconnesse. Sfruttamento estensivo del meccanismo Store-and-Forward di RNS."
              details="Il sistema rimane operativo senza Internet. Utilizzando link Wi-Fi, Ethernet o LoRa, lo store-and-forward accumula hash, propagando le operazioni in modo asincrono quando si ripristina la rete."
            />
          </div>
        </motion.section>

        {/* Mind Map Section */}
        <motion.section 
          id="mindmap"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 mb-40 pt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-indigo-500"></div>
                <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">System Topology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Strategic Mind Map</h2>
            </div>
          </div>
          
          <div className="bg-[#05070d] rounded-[2.5rem] border border-white/10 p-8 md:p-16 text-center relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 shadow-2xl shadow-indigo-900/10">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg leading-relaxed relative z-10">
              Esplora l'architettura concettuale e le capacità del TA2MA Decentralized Intelligence Ecosystem (TDIE). La nostra mappa mentale visualizza il flusso, a partire dal DCM, su SwarmOS, attraversando the Reticulum Network fino al layer di fiducia blockchain.
            </p>
            
            <div className="aspect-[21/9] w-full max-w-5xl mx-auto bg-black rounded-3xl border border-white/10 flex items-center justify-center mb-12 relative overflow-hidden shadow-inner">
               <div className="absolute inset-0 opacity-30">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                     <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                       <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                     </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-indigo-500" />
                 </svg>
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
               
               <div className="flex flex-col items-center gap-6 z-10">
                 <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(0,180,255,0.4)] flex items-center justify-center font-display font-bold text-white text-4xl border border-white/20">TA</div>
                 <p className="font-display font-bold text-2xl text-white tracking-wide">TA2MA Architecture Topology</p>
                 <span className="text-xs font-mono text-cyan-400 px-5 py-2 bg-cyan-950/40 rounded-full border border-cyan-500/30 backdrop-blur-md flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                   SYSTEM_RESOURCE_ATTACHED
                 </span>
               </div>
            </div>
            
            <a href="#" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Download size={20} /> Scarica Diagramma ad Alta Risoluzione
            </a>
          </div>
        </motion.section>

        {/* Integrations Preview */}
        <motion.section 
          id="integrations"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 mb-40 pt-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-pink-500"></div>
              <span className="text-pink-400 font-mono text-sm tracking-widest uppercase">Ecosystem</span>
              <div className="h-px w-12 bg-pink-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">TA2MA Applications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Connettiti alle soluzioni basate sull'integrazione Reticulum, AI ed Edge Computing.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {['VolontàReale (Volunteer Proof)', 'Smart Municipalities', 'Enterprise AI SaaS', 'Edge Distributed Compute', 'TA2MA Smart Cities', 'Blockchain Identification (DID)', 'Education & Health AI', 'Supply Chain Transparency', 'Decentralized Impact Platforms', 'DAO Governance'].map(app => (
              <div key={app} className="px-6 py-3 rounded-full bg-[#0a0f1a] border border-white/10 text-sm font-medium text-gray-300 flex items-center gap-3 hover:border-pink-500/50 hover:bg-pink-950/20 hover:text-white transition-all cursor-default shadow-lg">
                <CheckCircle2 size={16} className="text-pink-500" /> {app}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="#newsletter" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-bold tracking-wide transition-colors group">
              Scopri tutti i casi d'uso (Whitepaper) 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section 
          id="newsletter"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 mb-20 pt-24"
        >
          <div className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#0a0f1a] to-[#03040b] border border-cyan-500/20 relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.05)] text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
            
            <div className="w-16 h-16 mx-auto bg-cyan-950/50 rounded-2xl border border-cyan-500/30 flex items-center justify-center mb-8 backdrop-blur-md">
              <MessageSquare className="text-cyan-400" size={28} />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4">Unisciti all'Ecosistema TA2MA</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">Ricevi gli ultimi aggiornamenti sullo sviluppo del protocollo, implementazioni mesh network, SwarmOS e suite Smart Contract.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="PROCEED TO: user@domain.com" 
                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
              />
              <button onClick={(e) => e.preventDefault()} className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] whitespace-nowrap">
                Accedi via Gateway
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020308] pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(0,240,255,0.3)] flex justify-center items-center font-bold text-white text-xl border border-white/20">
                  T
                </div>
                <span className="text-white font-display font-bold tracking-widest text-xl uppercase">TA2MA LLC</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                La rete neurale ad architettura distribuita supportata da Reticulum, governance on-chain e agenti AI mesh per il mondo zero-trust decentralizzato.
              </p>
              <div className="space-y-2 text-sm text-gray-500 font-mono">
                <p>VIA CASTIGLIONI, 23</p>
                <p>MOZZATE 22076 (CO), ITA</p>
                <p className="text-cyan-400/80">TA2MA@GMX.US</p>
                <p>+39 351 6328005</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">Product</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Protocol Stack</a></li>
                <li><a href="#reticulum-dcm" className="hover:text-cyan-400 transition-colors">Reticulum Mesh</a></li>
                <li><a href="#integrations" className="hover:text-cyan-400 transition-colors">Applications</a></li>
                <li><a href="#mindmap" className="hover:text-cyan-400 transition-colors">Mind Map</a></li>
                <li><a href="#newsletter" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">System</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#mindmap" className="hover:text-cyan-400 transition-colors">Documentation Core</a></li>
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Capabilities Index</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Whitepaper v2</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-display font-semibold mb-6 uppercase tracking-wider text-sm">Network</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="https://github.com/TheWolfOfChain/TA2MA" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Github size={16}/> GitHub Repository</a></li>
                <li><a href="mailto:TA2MA@GMX.US" className="hover:text-cyan-400 transition-colors">Contact Agent Protocol</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
            <p>BUILT BY ANWAR ZBIR & TA2MA LLC DEVS</p>
            <p>SYS.DATE: {new Date().getFullYear()} // ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, details, delay = 0 }: { icon: React.ReactNode, title: string, description: string, details?: string, delay?: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-8 rounded-2xl bg-[#0a0f1a] border border-white/10 hover:border-cyan-500/30 hover:bg-[#0c1222] transition-all group cursor-pointer overflow-hidden relative shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <motion.div layout className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,150,255,0.2)] transition-all duration-300 relative z-10">
        {icon}
      </motion.div>
      
      <motion.h3 layout className="text-xl font-display font-bold text-white mb-4 flex justify-between items-center relative z-10">
        {title} 
        <span className={`text-xs font-mono px-3 py-1 rounded-full transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-gray-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400'}`}>
          {isOpen ? 'COLLAPSE' : 'EXPAND'}
        </span>
      </motion.h3>
      
      <motion.p layout className="text-gray-400 leading-relaxed text-sm mb-2 relative z-10 font-light">{description}</motion.p>
      
      {isOpen && details && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pt-5 mt-5 border-t border-white/10 relative z-10"
        >
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            {details}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function ProcessCard({ step, title, description, details }: { step: string, title: string, description: string, details: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div 
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="border-t border-white/10 pt-6 pb-2 cursor-pointer group"
    >
      <div className="flex gap-4">
        <div className="text-blue-500 font-mono text-sm pt-1">{step}</div>
        <div className="flex-1">
          <motion.h3 layout className="text-xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </motion.h3>
          <motion.p layout className="text-gray-400 text-sm leading-relaxed font-light mb-4 text-balance">
            {description}
          </motion.p>
          
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-sm text-gray-300 leading-relaxed border-l-2 border-blue-500/30 pl-4 py-1 mb-4 font-light"
            >
              {details}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
