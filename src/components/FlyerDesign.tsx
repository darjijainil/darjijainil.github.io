import React from "react";
import { Phone, CheckCircle, Flame, Sparkles, Building2, Ticket, Check } from "lucide-react";

interface FlyerDesignProps {
  id: string;
}

export default function FlyerDesign({ id }: FlyerDesignProps) {
  switch (id) {
    case "proj1":
      // Design 1: Digital Marketing Agency Seminar Flyer (Teal themed, Anne)
      return (
        <div className="w-full h-full bg-[#032a26] text-white p-6 flex flex-col justify-between relative overflow-hidden font-sans border border-emerald-900 shadow-xl rounded-2xl select-none group-hover:scale-[1.02] transition-transform duration-500">
          
          {/* Subtle Workspace background overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80')` }}
          />

          {/* Top Logo */}
          <div className="flex items-center gap-1.5 z-10">
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
              <span className="font-display font-black text-xs text-[#032a26]">A</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-black text-emerald-300">Apex Media</span>
          </div>

          <div className="grid grid-cols-12 h-full items-center z-10 pt-4">
            {/* Left Texts */}
            <div className="col-span-7 pr-3 flex flex-col justify-center h-full">
              <h3 className="font-display font-black text-[28px] sm:text-[32px] leading-none uppercase tracking-tighter text-white">
                Digital <br />
                <span className="text-emerald-400">Marketing</span> <br />
                Agency
              </h3>
              
              <p className="text-[9px] text-[#86ab9d] leading-relaxed mt-2 font-sans line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>

              {/* Seminar badge */}
              <div className="mt-4 space-y-1.5">
                <p className="text-[9px] text-emerald-300 italic flex items-center gap-1">
                  <span className="font-serif text-[11px] font-bold">online</span> SEMINAR ON:
                </p>
                <div className="bg-white text-[#032a26] px-3 py-1 font-display font-extrabold text-[10px] tracking-wide rounded-r-full inline-block max-w-max uppercase shadow-sm">
                  Digital Marketing
                </div>
                <div className="border border-emerald-600/60 bg-emerald-950/40 text-[9px] font-mono px-2 py-0.5 rounded text-emerald-100 max-w-max">
                  Friday 10:00 AM 10thDES
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-5 flex flex-col items-start gap-1">
                <button className="bg-white hover:bg-emerald-100 text-[#032a26] px-4 py-1.5 rounded-full font-display font-black text-[10px] tracking-wider uppercase transition-all shadow-md">
                  Register Now
                </button>
                <span className="text-[8px] text-emerald-400 font-mono tracking-wide ml-2">www.website.com</span>
              </div>
            </div>

            {/* Right Picture Box with Outline Border */}
            <div className="col-span-5 h-full relative flex items-end justify-center">
              {/* Layout outline box */}
              <div className="absolute top-2 right-1 bottom-4 left-2 border border-emerald-500/30 rounded-xl" />
              
              {/* Anne Specialist photo */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
                alt="Anne Specialist" 
                className="w-full h-[95%] object-cover object-top z-10 rounded-b-xl mask-gradient"
                referrerPolicy="no-referrer"
              />

              {/* Name block */}
              <div className="absolute bottom-5 z-20 bg-[#032a26]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/20 shadow-md text-center">
                <p className="font-display font-black text-[11px] tracking-tight uppercase text-white">ANNE</p>
                <p className="text-[8px] text-emerald-400 font-mono font-bold whitespace-nowrap">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "proj2":
      // Design 2: Blue/Orange Marketing Agency Flyer (Smiling Man)
      return (
        <div className="w-full h-full bg-[#0a1236] text-white p-6 flex flex-col justify-between relative overflow-hidden font-sans border border-blue-900 shadow-xl rounded-2xl select-none group-hover:scale-[1.02] transition-transform duration-500">
          
          {/* Slogan top header row */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 flex items-center justify-center bg-orange-500 rounded-full text-white">
                <Sparkles className="h-3 w-3" />
              </div>
              <div className="text-[8px] leading-none">
                <p className="font-bold uppercase tracking-wider text-white">BRAND LOGO</p>
                <p className="text-[6px] text-blue-300">YOUR SLOGAN</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 h-full items-center z-10 pt-3 relative">
            
            {/* Left column titles */}
            <div className="col-span-7 flex flex-col justify-center pr-2 h-full">
              <h3 className="font-display font-black text-[28px] sm:text-[32px] leading-tight uppercase tracking-tighter">
                <span className="text-[#f15a24]">Digital</span> <br />
                Marketing <br />
                Agency
              </h3>

              <p className="text-[10px] text-[#fb8c00] font-bold tracking-tight uppercase mt-1">
                best marketing agency <br />for your business
              </p>

              {/* Action Button */}
              <div className="mt-5 flex items-center">
                <div className="flex bg-gradient-to-r from-orange-500 via-orange-600 to-white/95 text-white pl-4 pr-1 py-1 rounded-full items-center shadow-lg gap-2 cursor-pointer border border-orange-500/10">
                  <span className="font-display font-black text-[9px] uppercase tracking-wider text-white">Click Here</span>
                  <div className="w-4 h-4 bg-[#0a1236] text-orange-500 font-black flex items-center justify-center rounded-full text-[8px] shadow-sm">→</div>
                </div>
              </div>

              <p className="text-[8px] text-blue-300 font-mono tracking-wide ml-2 mt-2">www.yourwebsite.com</p>
            </div>

            {/* Right side curve frame containing Citysky & Smiling Man */}
            <div className="col-span-5 h-full relative flex items-end justify-end">
              {/* Beautiful bold orange decoration curves */}
              <div className="absolute top-2 -right-8 w-44 h-44 border-r-8 border-t-8 border-[#f15a24] rounded-full opacity-90 pointer-events-none" />
              <div className="absolute top-0 right-[-32px] bottom-0 left-[10px] bg-gradient-to-tr from-[#0a1236]/90 via-transparent to-[#f15a24]/10 rounded-l-[100px] overflow-hidden border-l-4 border-orange-500 shadow-inner z-10">
                
                {/* Visual background inside the curved window */}
                <img 
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&auto=format&fit=crop&q=80" 
                  alt="Cityscape"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity brightness-70 contrast-125 opacity-45"
                  referrerPolicy="no-referrer"
                />

                {/* Professional portrait of smiling man nested inside layout curve */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80"
                  alt="Smiling Executive" 
                  className="w-full h-full object-cover object-top scale-105 saturate-110 z-20 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Green Call Banner / Phone Call details row always at bottom left */}
          <div className="bg-[#2e7d32] border border-emerald-600 px-3 py-1.5 rounded-2xl flex items-center gap-2 z-10 mt-3 shadow-md max-w-[90%] pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#2e7d32]">
              <Phone className="h-3 w-3 fill-current" />
            </div>
            <div>
              <p className="text-[7px] text-emerald-100 uppercase tracking-widest font-mono font-medium -mb-0.5">call for more information</p>
              <p className="text-[10px] font-sans font-black text-white leading-none">000 123 456 789</p>
            </div>
          </div>
        </div>
      );

    case "proj3":
      // Design 3: Explore Dream Destination (Yellow/Blue themed - Travel)
      return (
        <div className="w-full h-full bg-white text-slate-800 p-6 flex flex-col justify-between relative overflow-hidden font-sans border border-slate-200 shadow-xl rounded-2xl select-none group-hover:scale-[1.02] transition-transform duration-500">
          
          {/* Yellow top & bottom corners background decor blocks */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400 absolute-right-triangle pointer-events-none opacity-90 rounded-bl-[40px]" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-400 pointer-events-none opacity-90 rounded-tr-[40px]" />

          <div className="grid grid-cols-12 h-full items-center z-10 relative">
            
            {/* Left Title Panel */}
            <div className="col-span-7 flex flex-col justify-center pr-1.5 h-full">
              <span className="font-serif italic text-blue-900 text-lg leading-none mb-0.5">explore</span>
              <h3 className="font-display font-black tracking-tight leading-none text-2xl uppercase">
                <span className="text-amber-500 block text-[26px]">Dream</span>
                <span className="text-blue-900 block text-[24px]">Destination</span>
              </h3>
              
              <p className="text-[8px] text-slate-500 mt-1 lines-clamp-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              {/* Package Inclusion list */}
              <div className="mt-4 bg-blue-50/70 border border-blue-100/50 p-2.5 rounded-xl">
                <p className="font-mono text-[8px] uppercase tracking-wider text-blue-900 font-extrabold border-b border-blue-900/10 pb-0.5 mb-1.5">
                  Package Includes
                </p>
                <div className="grid grid-cols-2 gap-x-1 gap-y-1">
                  {["Luxury Rooms", "Natural View", "Intercity Travel", "Dinner and Lunch"].map((item) => (
                    <div key={item} className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-900 flex items-center justify-center text-white flex-shrink-0">
                        <Check className="h-1.5 w-1.5 text-white stroke-[4]" />
                      </div>
                      <span className="text-[7.5px] font-sans font-bold text-slate-700 leading-none truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA links & Bookings buttons column */}
              <div className="mt-5 flex items-center gap-2">
                <button className="bg-blue-900 hover:bg-blue-950 text-white px-3.5 py-1.5 rounded font-display font-bold text-[9px] tracking-wide uppercase transition-all shadow-sm">
                  Book Now
                </button>
                <span className="text-[8px] text-blue-900 font-mono font-bold">www.youwebsite.com</span>
              </div>
            </div>

            {/* Right overlapping visual shape slices (Leaf shapes) */}
            <div className="col-span-5 h-full relative flex items-center justify-center pr-1">
              
              {/* Stacked offset leaf frames showing travel stock photos */}
              <div className="w-full h-full relative flex flex-col justify-center items-end gap-1.5 scale-95">
                
                {/* Frame 1 Top leaf curve shape */}
                <div className="w-24 h-16 rounded-tl-[30px] rounded-br-[30px] overflow-hidden border-2 border-white shadow-md z-30">
                  <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&auto=format&fit=crop&q=80" 
                    alt="Beach"
                    className="w-full h-full object-cover saturate-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Frame 2 Center active hiker slice */}
                <div className="w-28 h-20 rounded-tl-[35px] rounded-br-[35px] overflow-hidden border-2 border-white shadow-lg z-20 -mr-2 bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&auto=format&fit=crop&q=80" 
                    alt="Travel"
                    className="w-full h-full object-cover scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Frame 3 Bottom peak slice */}
                <div className="w-24 h-16 rounded-tl-[30px] rounded-br-[30px] overflow-hidden border-2 border-white shadow-md z-15 bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=300&auto=format&fit=crop&q=80" 
                    alt="Peak"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating price circle badge */}
                <div className="absolute top-10 right-14 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center z-40 p-1">
                  <span className="text-[6px] font-mono text-slate-400 uppercase font-black tracking-tighter leading-none">ONLY</span>
                  <p className="text-[12px] font-black text-blue-950 font-display tracking-tight leading-none">
                    29<span className="text-[7px] align-top">,99</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social media tag message row */}
          <div className="mt-2 text-right border-t border-slate-100 pt-1.5 flex items-center justify-between z-10 font-mono text-[7px] text-slate-400 font-bold tracking-wide uppercase">
            <span>Social Media Goes Here</span>
            <div className="flex gap-1.5 text-blue-900 font-black">
              <span>● FB</span>
              <span>● TW</span>
              <span>● WA</span>
            </div>
          </div>
        </div>
      );

    case "proj4":
      // Design 4: Real Estate House For Sale Semicircle (White/Burgundy)
      return (
        <div className="w-full h-full bg-white text-slate-800 p-6 flex flex-col justify-between relative overflow-hidden font-sans border border-slate-200 shadow-xl rounded-2xl select-none group-hover:scale-[1.02] transition-transform duration-500">
          
          {/* Top Left Row Headers */}
          <div className="flex justify-between items-start z-10 w-full mb-1">
            <div className="flex flex-col">
              <span className="font-display font-black text-[13px] text-blue-900 tracking-tight uppercase">Real Estate</span>
              <span className="font-mono text-[7px] tracking-widest text-slate-400 font-extrabold uppercase">Logo Here</span>
            </div>
          </div>

          <div className="grid grid-cols-12 h-full items-center z-10 pt-2 relative">
            
            {/* Left Texts info */}
            <div className="col-span-6 flex flex-col justify-center pr-2 h-full">
              <span className="font-serif italic text-blue-950 text-xl leading-none block">House</span>
              <h3 className="font-display font-black text-[22px] sm:text-[24px] tracking-tighter leading-none text-[#880d4e] uppercase">
                For Sale
              </h3>

              {/* Checklist details */}
              <div className="mt-4 grid grid-cols-2 gap-x-1.5 gap-y-1.5 border-t border-b border-slate-100 py-3 my-2">
                {["5 Bedroom", "Guest Room", "Luxury Room", "Kitchen", "Laundry Room", "Swimming"].map((spec) => (
                  <div key={spec} className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-full border border-[#880d4e] flex items-center justify-center bg-[#880d4e]/5 flex-shrink-0">
                      <Check className="h-1.5 w-1.5 text-[#880d4e] stroke-[3]" />
                    </div>
                    <span className="text-[7.5px] font-sans font-extrabold text-slate-700 truncate">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Book Now Button */}
              <div className="mt-2.5">
                <button className="bg-[#880d4e] hover:bg-[#6c003a] text-white px-4 py-1.5 rounded font-display font-black text-[9px] tracking-wider uppercase transition-all shadow-md">
                  Book Now
                </button>
              </div>
            </div>

            {/* Right circular semicircle layout showing 3 beautiful slices */}
            <div className="col-span-6 h-full relative flex items-center justify-end select-none">
              
              {/* Giant semicircular grid block containing sliced room photos */}
              <div className="w-52 h-52 relative flex items-center justify-end rounded-full overflow-hidden translate-x-16 border-4 border-white shadow-2xl bg-white select-none pointer-events-none">
                
                {/* Visual Burgundy ring background circle spacer */}
                <div className="absolute left-[38%] transform -translate-x-1/2 w-14 h-14 rounded-full border-[10px] border-[#880d4e] bg-white z-20" />

                <div className="grid grid-rows-3 h-full w-full relative select-none">
                  
                  {/* Row 1/3 (Top Slice) - Elegant Dining Room layout */}
                  <div className="h-full w-full relative border-b-2 border-white select-none">
                    <img 
                      src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&auto=format&fit=crop&q=80" 
                      alt="Dining"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Row 2/3 (Middle Slice) - Lobby Room */}
                  <div className="h-full w-full relative border-b-2 border-white select-none">
                    <img 
                      src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300&auto=format&fit=crop&q=80" 
                      alt="Living Room"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Row 3/3 (Bottom Slice) - Bedroom Layout */}
                  <div className="h-full w-full relative select-none">
                    <img 
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&auto=format&fit=crop&q=80" 
                      alt="Bedroom"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Semicircle footer with contact details */}
          <div className="mt-2 border-t border-slate-100 pt-1.5 flex items-center gap-2 z-10">
            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white">
              <Phone className="h-2.5 w-2.5 fill-current" />
            </div>
            <div className="text-[7.5px] font-sans text-slate-400">
              <span className="block font-mono font-medium -mb-0.5 text-slate-400/80 uppercase">Call for details</span>
              <span className="font-extrabold text-blue-950 text-[10px] block">+000 123 456 789</span>
            </div>
          </div>
        </div>
      );

    case "proj5":
      // Design 5: Real Estate Luxury Home (Blue/Gold/Yellow)
      return (
        <div className="w-full h-full bg-[#0d143c] text-white p-6 flex flex-col justify-between relative overflow-hidden font-sans border border-blue-950 shadow-xl rounded-2xl select-none group-hover:scale-[1.02] transition-transform duration-500">
          
          {/* Yellow right panel borders decorate layout layout frame */}
          <div className="absolute top-0 right-0 bottom-0 w-3 bg-[#e6b800] opacity-92 pointer-events-none z-10" />

          {/* Top Info Log Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-emerald-400" />
              <div className="text-[8px] leading-tight">
                <p className="font-extrabold tracking-tight uppercase text-white">Real Estate</p>
                <p className="text-[6px] font-mono tracking-widest text-[#cccccc] -mt-0.5">TAGELINE HERE</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 h-full items-center z-10 pt-2 pb-1 relative">
            
            {/* Left spec column info */}
            <div className="col-span-7 flex flex-col justify-center pr-1.5 h-full z-10">
              <h3 className="font-display font-black leading-tight tracking-tight uppercase">
                <span className="text-[#e6b800] text-[20px] block -mb-0.5">Luxury</span>
                <span className="text-white text-[28px] block leading-none">Home</span>
                <span className="text-[#e6b800] text-[20px] block mt-0.5 tracking-tighter">For Sale</span>
              </h3>

              {/* Checked bullets parameters */}
              <div className="mt-3.5 space-y-1.5">
                {["3 Bed Rooms", "1 Living Room", "Swimming Pool", "Guest House"].map((spec) => (
                  <div key={spec} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blue-500/10 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0">
                      <Check className="h-2 w-2 stroke-[4]" />
                    </div>
                    <span className="text-[8px] font-sans font-bold text-[#d0ede2] uppercase tracking-wide">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Golden angle chevron strip price indicator */}
              <div className="mt-4.5 bg-gradient-to-r from-[#e6b800] to-yellow-500 text-slate-900 rounded pl-3 pr-4 py-1 flex flex-col max-w-max shadow-md pointer-events-none">
                <span className="text-[5.5px] font-mono font-bold tracking-widest uppercase leading-none opacity-80">Price starts from</span>
                <span className="font-sans font-black text-[12px] leading-none tracking-tight">$ 1,500</span>
              </div>
            </div>

            {/* Right stacked three photos panels frame with thin gold border offset */}
            <div className="col-span-5 h-[98%] relative flex flex-col justify-between py-1.5 items-end pr-2">
              
              <div className="absolute top-0 bottom-0 right-1 left-2 bg-[#e6b800]/5 border border-yellow-500/20 rounded-xl pointer-events-none" />

              {/* Photo slice 1: Modern kitchen */}
              <div className="w-[82px] h-11 border-2 border-[#e6b800] rounded-xl overflow-hidden shadow-md z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200&auto=format&fit=crop&q=80" 
                  alt="Modern Kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Photo slice 2: Livingroom couch */}
              <div className="w-[82px] h-11 border-2 border-[#e6b800] rounded-xl overflow-hidden shadow-md z-10 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=200&auto=format&fit=crop&q=80" 
                  alt="Living"
                  className="w-full h-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Photo slice 3: Cozy bedroom panel */}
              <div className="w-[82px] h-11 border-2 border-[#e6b800] rounded-xl overflow-hidden shadow-md z-10">
                <img 
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&auto=format&fit=crop&q=80" 
                  alt="Bedroom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Footer bar with phone details */}
          <div className="flex justify-between items-center z-10 border-t border-blue-900 pt-2 mt-2 gap-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 h-4.5 rounded-full bg-blue-950 flex items-center justify-center border border-blue-800">
                <Phone className="h-2 w-2 text-emerald-400 fill-current" />
              </div>
              <div className="text-[7px]">
                <p className="text-slate-400 leading-none">MORE INFORMATION CALL US</p>
                <p className="font-extrabold text-white text-[8px] leading-tight mt-0.5">000 123 456 XXX</p>
              </div>
            </div>

            <button className="bg-[#e6b800] hover:bg-yellow-500 text-slate-950 px-3 py-1 rounded font-display font-black text-[9px] tracking-wide uppercase transition-all shadow-sm z-20">
              Book Now
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full relative overflow-hidden bg-slate-100 flex items-center justify-center">
          <span className="font-mono text-xs text-slate-400">Pristine Visual Work Grid</span>
        </div>
      );
  }
}
